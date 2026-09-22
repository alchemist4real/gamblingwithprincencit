/**
 * Modular Card Packs Central Registry & Dynamic Loader
 * Single source of truth for card pack discovery and registration.
 */
(function() {
  window.CARD_PACKS = window.CARD_PACKS || {};

  // Manifest of active card packs
  window.CARD_PACK_REGISTRY = [
    'packs/blok-3.1.js',
    'packs/blok-3.2.js'
  ];

  let loadedCount = 0;
  const total = window.CARD_PACK_REGISTRY.length;
  window.CARD_PACKS_READY = false;

  function markReady() {
    window.CARD_PACKS_READY = true;
    window.dispatchEvent(new CustomEvent('cardPacksReady', { detail: window.CARD_PACKS }));
  }

  // Global helper to safely execute callbacks once all packs are ready
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

    if (window.CARD_PACKS_READY || (window.CARD_PACKS && Object.keys(window.CARD_PACKS).length >= total && total > 0)) {
      safeExecute();
      return;
    }

    window.addEventListener('cardPacksReady', function() {
      safeExecute();
    }, { once: true });

    // Interval fallback polling
    poll = setInterval(function() {
      if (window.CARD_PACKS && Object.keys(window.CARD_PACKS).length >= total && total > 0) {
        if (!window.CARD_PACKS_READY) markReady();
        safeExecute();
      }
    }, 30);

    // Safety timeout fallback (in case network or storage stalls, execute with any loaded packs)
    timeout = setTimeout(function() {
      if (!window.CARD_PACKS_READY && window.CARD_PACKS && Object.keys(window.CARD_PACKS).length > 0) {
        markReady();
      }
      safeExecute();
    }, 2500);
  };

  if (total === 0) {
    markReady();
    return;
  }

  // Dynamically load scripts with async = false to preserve order
  window.CARD_PACK_REGISTRY.forEach(function(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = function() {
      loadedCount++;
      if (loadedCount >= total) markReady();
    };
    script.onerror = function() {
      console.warn('Could not load card pack:', src);
      loadedCount++;
      if (loadedCount >= total) markReady();
    };
    document.head.appendChild(script);
  });
})();
