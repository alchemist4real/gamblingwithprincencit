/**
 * Card Pack Template: Contoh Pembuatan Card Pack Baru (High-Yield Point System)
 * 
 * Petunjuk Penggunaan:
 * 1. Duplikasi file ini menjadi nama pack baru, misal: packs/blok-3.2.js
 * 2. Ubah id, title, packName, subtitle, description, badge, dan daftar cards.
 * 3. Gunakan 'ciri_kunci' dan 'mekanisme' berupa poin-poin ringkas (bullet points)
 *    agar mudah diapalkan saat di-reveal.
 * 4. Muat file pack di index.html: <script src="packs/blok-3.2.js"></script>
 * 5. Pack akan otomatis terdeteksi dan muncul di Card Pack Switcher!
 */

(window.CARD_PACKS = window.CARD_PACKS || {})['contoh-pack'] = {
  id: 'contoh-pack',
  title: 'JUDUL APLIKASI / BLOK',
  packName: 'Card Pack Contoh',
  subtitle: 'Deskripsi Subtitle • Blok X.X • 0 Soal',
  description: 'Ringkasan materi atau tujuan pembelajaran untuk card pack ini',
  badge: 'BLOK X',
  cardCount: 2,
  filters: [
    { id: 'all', label: 'Semua Soal', count: 2, icon: 'grid' },
    { id: 'preparat', label: 'Preparat Histopatologi', count: 1, icon: 'microscope' },
    { id: 'teori', label: 'Soal Teori & Vignette', count: 1, icon: 'book' }
  ],
  cards: [
    {
      id: 1,
      type: 'preparat', // 'preparat' atau 'teori'
      category: 'PREPARAT HISTOPATOLOGI',
      prompt: 'Deskripsi pengamatan sediaan mikroskopis...',
      diagnosis: 'Nama Diagnosis / Sediaan',
      organ: 'Organ / Jaringan Asal',
      sifat: 'Klasifikasi / Sifat Patologi',
      asal: 'Asal Jaringan / Seluler',
      ciri_kunci: [
        '**Temuan Utama**: Ciri khas histologis 1...',
        '**Morfologi Sel**: Karakteristik seluler mikroskopis...',
        '**Batas / Stroma**: Kondisi stroma atau jaringan sekitar...'
      ],
      mekanisme: [
        '**Etiologi**: Penyebab utama kelainan...',
        '**Patofisiologi**: Mekanisme terjadinya jejas/proses penyakit...',
        '**Akibat / Prognosis**: Dampak klinis atau perkembangan lesi...'
      ],
      keywords: 'Kata kunci identifikasi cepat (misal: Ghost cells, piknosis, dll.)',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...' // data URI gambar atau path lokal/URL
    },
    {
      id: 2,
      type: 'teori',
      category: 'SOAL TEORI & VIGNETTE',
      prompt: 'Vignette kasus klinis / pertanyaan skenario...',
      diagnosis: 'Jawaban / Konsep Kunci',
      organ: 'Sistem Organ / Topik Terkait',
      sifat: 'Kategori / Mekanisme Fisiologi/Patofisiologi',
      asal: 'Referensi Pembelajaran / Modul',
      ciri_kunci: [
        '**Poin Diagnostik**: Kriteria klinis atau temuan laboratorium kunci...',
        '**Karakteristik Khas**: Fitur patologis pembeda dari penyakit lain...'
      ],
      mekanisme: [
        '**Mekanisme Seluler**: Jalur molekuler / reseptor yang terlibat...',
        '**Patogenesis**: Rantai peristiwa biologis dari onset hingga manifestasi...'
      ],
      keywords: 'Kata kunci vignette / konsep penting',
      image: '' // Kosongkan jika soal murni berbasis teks
    }
  ]
};
