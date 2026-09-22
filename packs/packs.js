/**
 * Modular Card Packs Central Registry & Dynamic Loader
 * Single source of truth for card pack discovery and registration.
 * 
 * To add a new card pack:
 * 1. Create your pack file in packs/ (e.g. packs/blok-3.3.js)
 * 2. Add the relative path to CARD_PACK_REGISTRY below
 * 3. It will automatically load across Lobby, Casual Mode, and Exam Mode!
 */
(function() {
  window.CARD_PACKS = window.CARD_PACKS || {};

  // Manifest of active card packs
  window.CARD_PACK_REGISTRY = [
    'packs/blok-3.1.js',
    'packs/blok-3.2.js'
  ];

  // Dynamically load each registered pack script synchronously during HTML parse
  // so window.CARD_PACKS is ready immediately for all page scripts
  window.CARD_PACK_REGISTRY.forEach(function(src) {
    document.write('<script src="' + src + '"><\/script>');
  });
})();
