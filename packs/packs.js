/**
 * Modular Card Packs Central Registry & Dynamic Loader
 * Single source of truth for card pack discovery and registration.
 */
(function() {
  window.CARD_PACKS = window.CARD_PACKS || {};

  // Manifest of active card packs
  window.CARD_PACK_REGISTRY = [
    'packs/mikro-3.2-exact.js',
    'packs/farmako-3.2.js',
    'packs/blok-3.1.js'
  ];

  // Determine active/preferred pack from URL or localStorage
  let preferredPack = null;
  try {
    const urlParam = new URLSearchParams(window.location.search).get('pack');
    if (urlParam) preferredPack = urlParam;
  } catch (e) {}

  if (!preferredPack) {
    try {
      preferredPack = localStorage.getItem('activeCardPack');
      if (!preferredPack) {
        const stored = localStorage.getItem('selectedCardPacks');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) preferredPack = parsed[0];
        }
      }
    } catch (e) {}
  }

  if (!preferredPack) {
    preferredPack = 'mikro-3.2-exact';
  }

  // Sort registry so the preferred pack is prioritized first
  const sortedRegistry = [...window.CARD_PACK_REGISTRY].sort(function(a, b) {
    const aMatch = a.includes(preferredPack);
    const bMatch = b.includes(preferredPack);
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    return 0;
  });

  let loadedCount = 0;
  const total = sortedRegistry.length;
  window.CARD_PACKS_READY = false;

  function markReady() {
    if (window.CARD_PACKS_READY) return;
    window.CARD_PACKS_READY = true;
    window.dispatchEvent(new CustomEvent('cardPacksReady', { detail: window.CARD_PACKS }));
  }

  function checkPackProgress(src) {
    loadedCount++;
    window.dispatchEvent(new CustomEvent('cardPackProgress', {
      detail: {
        loaded: loadedCount,
        total: total,
        src: src,
        packs: window.CARD_PACKS,
        activeReady: !!window.CARD_PACKS[preferredPack]
      }
    }));

    // If active pack is loaded or all packs loaded, mark ready early!
    if (window.CARD_PACKS[preferredPack] || loadedCount >= total) {
      markReady();
    }
  }

  // Global helper to safely execute callbacks once active pack or all packs are ready
  window.whenPacksReady = function(callback) {
    let executed = false;
    let poll = null;
    let timeout = null;

    function safeExecute() {
      if (executed) return;
      executed = true;
      if (poll) clearInterval(poll);
      if (timeout) clearTimeout(timeout);
      callback(window.CARD_PACKS);
    }

    if (window.CARD_PACKS_READY || (window.CARD_PACKS && (window.CARD_PACKS[preferredPack] || Object.keys(window.CARD_PACKS).length >= total))) {
      safeExecute();
      return;
    }

    window.addEventListener('cardPacksReady', function() {
      safeExecute();
    }, { once: true });

    // Polling fallback check
    poll = setInterval(function() {
      if (window.CARD_PACKS && (window.CARD_PACKS[preferredPack] || Object.keys(window.CARD_PACKS).length >= total)) {
        if (!window.CARD_PACKS_READY) markReady();
        safeExecute();
      }
    }, 25);

    // Timeout fallback (max 1.5s)
    timeout = setTimeout(function() {
      if (!window.CARD_PACKS_READY && window.CARD_PACKS && Object.keys(window.CARD_PACKS).length > 0) {
        markReady();
      }
      safeExecute();
    }, 1500);
  };

  if (total === 0) {
    markReady();
    return;
  }

  // Load scripts asynchronously in parallel, prioritizing preferred pack
  sortedRegistry.forEach(function(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = function() {
      checkPackProgress(src);
    };
    script.onerror = function() {
      console.warn('Could not load card pack:', src);
      checkPackProgress(src);
    };
    document.head.appendChild(script);
  });
})();
