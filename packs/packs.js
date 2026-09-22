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
    if (window.CARD_PACKS_READY || (window.CARD_PACKS && Object.keys(window.CARD_PACKS).length >= total && total > 0)) {
      callback(window.CARD_PACKS);
    } else {
      window.addEventListener('cardPacksReady', function() {
        callback(window.CARD_PACKS);
      }, { once: true });

      // Interval fallback polling
      const poll = setInterval(function() {
        if (window.CARD_PACKS && Object.keys(window.CARD_PACKS).length >= total && total > 0) {
          clearInterval(poll);
          if (!window.CARD_PACKS_READY) markReady();
          callback(window.CARD_PACKS);
        }
      }, 40);
    }
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
