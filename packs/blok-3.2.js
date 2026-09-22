/**
 * Card Pack: Block 3.2 - Respirasi & Kardiovaskular (High-Yield Point System)
 * Optimized for Medical Exam Flashcard Memorization
 */
(window.CARD_PACKS = window.CARD_PACKS || {})['blok-3.2'] = {
  id: 'blok-3.2',
  title: 'GAMBLING WITH PRINCE NCIT',
  packName: 'Ident Blok 3.2: Respirasi & Kardio',
  subtitle: 'Persiapan Ujian Identifikasi & Praktikum • Blok 3.2 • 6 Sediaan',
  description: 'Sediaan histopatologi & soal teori sistem respirasi dan kardiovaskular',
  badge: 'IDENT 3.2',
  cardCount: 6,
  filters: [
    { id: 'all', label: 'Semua Sediaan', count: 6, icon: 'grid' },
    { id: 'preparat', label: 'Sediaan Mikroskopik', count: 4, icon: 'microscope' },
    { id: 'teori', label: 'Soal Teori & Kasus', count: 2, icon: 'book' }
  ],
  cards: [
    {
      id: 101,
      type: 'preparat',
      category: 'HISTOPATHOLOGY',
      prompt: 'Sediaan jaringan paru diambil dari seorang perokok kronis berusia 60 tahun dengan batuk berdahak dan sesak progresif. Amati destruksi septa alveolar yang menyebabkan pelebaran ruang udara permanen.',
      diagnosis: 'Emfisema Pulmonum (Centriacinar)',
      organ: 'Paru-paru (Asinus Pulmonalis)',
      sifat: 'Penyakit Paru Obstruktif Kronis (PPOK)',
      asal: 'Parenkim alveolar dan bronkiolus respiratorius',
      struktur_khas: [
        'Pelebaran permanen dan abnormal dari ruang udara distal terhadap bronkiolus terminalis',
        'Destruksi dinding septa alveolar tanpa fibrosis yang jelas',
        'Penipisan septa yang terputus-putus menyerupai jala rusak (clubbed ends)',
        'Penurunan elastisitas paru dan hilangnya luas permukaan difusi gas'
      ],
      mikroskopis: [
        'Ruang alveolus tampak membesar secara mencolok dan bersatu membentuk rongga kistik ireguler.',
        'Septa alveolar robek dan terputus dengan tepi yang bebas (floating septal fragments).',
        'Dinding kapiler alveolar berkurang drastis menyebabkan hipoperfusi lokal.',
        'Sering tampak partikel pigmen jelaga karbon (antrakosis) di dalam makrofag sekitar stroma.'
      ],
      etiologi: 'Ketidakseimbangan protease-antiprotease yang diinduksi oleh asap rokok. Infiltrasi neutrofil dan makrofag melepaskan elastase yang mendegradasi serat elastin, diperparah defisiensi fungsional alpha-1-antitrypsin.',
      keywords: 'Destruksi septa alveolar, pembesaran asinus permanen, tanpa fibrosis, elastase meningkat, asap rokok/antrakosis.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 102,
      type: 'preparat',
      category: 'HISTOPATHOLOGY',
      prompt: 'Biopsi pembuluh darah arteri koroner dari pria berusia 55 tahun dengan riwayat hiperkolesterolemia dan angina pektoris tidak stabil. Tampak penumpukan lipid pada intima dengan fibrous cap.',
      diagnosis: 'Aterosklerosis Koronaria',
      organ: 'Arteri Koronaria (Dinding Arteri Muscularis)',
      sifat: 'Penyakit Vaskular Degeneratif & Inflamasi Kronis',
      asal: 'Tunika intima dinding arteri',
      struktur_khas: [
        'Ateroma / Plak fibrofatty di tunika intima',
        'Core lipid nekrotik sentral (cholesterol clefts berupa celah kristal jarum)',
        'Foam cells (makrofag dan sel otot polos berisi droplet lipid ester)',
        'Fibrous cap kolagenosa yang menutupi lesi ateroma'
      ],
      mikroskopis: [
        'Penebalan asimetris tunika intima oleh jaringan ikat fibrosa padat.',
        'Area nekrotik sentral mengandung kristal kolesterol berbentung celah kosong jarum (cholesterol clefts).',
        'Infiltrat sel inflamasi kronis (limfosit T dan makrofag) di bahu plak (shoulder region).',
        'Neovaskularisasi rapuh pada dasar plak yang rentan perdarahan intraplak.'
      ],
      etiologi: 'Response-to-injury hypothesis: Jejas endotel kronis (dislipidemia, hipertensi, merokok) menyebabkan adhesi monosit, oksidasi LDL, akumulasi lipid intraintima, proliferasi sel otot polos, dan sintesis matriks ekstraseluler.',
      keywords: 'Ateroma, fibrous cap, cholesterol clefts, foam cells, intima menebal, stenosis lumen.',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 103,
      type: 'preparat',
      category: 'HISTOPATHOLOGY',
      prompt: 'Sediaan paru dari pasien gagal jantung kongestif kiri kronis. Tampak edema interstitial berat dan alveolus terisi cairan eosinofilik pucat serta sel makrofag berisi pigmen coklat kekuningan.',
      diagnosis: 'Edema Paru Kronis (Heart Failure Cells)',
      organ: 'Paru-paru (Septa Alveolar & Lumen Alveolus)',
      sifat: 'Gangguan Hemodinamik (Kongesti Vena Pasif Kronis)',
      asal: 'Kapiler septa alveolar dan rongga alveolus',
      struktur_khas: [
        'Kapiler septa alveolar sangat melebar dan kongestif (terisi eritrosit padat)',
        'Eksudat cairan edema homogen eosinofilik pucat di dalam lumen alveoli',
        'Heart Failure Cells (makrofag alveolar berisi butiran pigmen hemosiderin coklat)',
        'Penebalan septa alveolar akibat fibrosis interstisial ringan'
      ],
      mikroskopis: [
        'Septa antar-alveolus tampak menebal hebat dan terisi kapiler yang mengalami engorgement eritrosit.',
        'Rongga-rongga alveolus terisi massa cairan amorf merah muda pucat (edema transudat).',
        'Banyak ditemukan makrofag alveolar (siderofag) yang memfagositosis sel darah merah lisis, terbukti positif dengan pewarnaan Prussian Blue.',
        'Tidak ditemukan infiltrat sel leukosit polimorfonuklear (PMN) yang masif.'
      ],
      etiologi: 'Peningkatan tekanan hidrostatik vena pulmonalis akibat disfungsi ventrikel kiri (gagal jantung kiri atau stenosis katup mitral), menyebabkan ekstravasasi cairan dan eritrosit ke dalam ruang alveolar.',
      keywords: 'Heart failure cells, hemosiderin, cairan edema eosinofilik, kapiler septa kongestif, gagal jantung kiri.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 104,
      type: 'preparat',
      category: 'HISTOPATHOLOGY',
      prompt: 'Autopsi miokardium dari seorang pria yang meninggal 3 hari setelah episode nyeri dada hebat substernal. Tampak area nekrotik dengan infiltrasi neutrofil masif.',
      diagnosis: 'Infark Miokard Akut (Fase 1-3 Hari)',
      organ: 'Jantung (Miokardium Ventrikel Kiri)',
      sifat: 'Nekrosis Iskemik Miokardium',
      asal: 'Miosit kardiak',
      struktur_khas: [
        'Nekrosis koagulativa miosit kardiak (hilangnya striasi dan inti sel miosit)',
        'Wavy fibers (serabut otot bergelombang di tepi area infark)',
        'Infiltrat padat sel radang akut neutrofil di interstisial',
        'Edema interseluler dan perdarahan fokal kapiler'
      ],
      mikroskopis: [
        'Serabut miokardium mempertahankan bentuk dasarnya namun kehilangan inti (piknosis/kariolisis).',
        'Sitoplasma miosit tampak sangat eosinofilik gelap (hypereosinophilic fibers).',
        'Interstisium terisi eksudat edema dan serbukan lebat sel radang neutrofil PMN.',
        'Tampak serabut miosit bergelombang (wavy fibers) akibat regangan mekanik serabut nekrotik yang mati.'
      ],
      etiologi: 'Oklusi trombotik akut pada arteri koroner akibat ruptur plak aterosklerosis, menyebabkan iskemia miokard berkepanjangan (>20-40 menit) yang memicu kematian seluler ireversibel.',
      keywords: 'Nekrosis koagulativa miosit, infiltrat neutrofil, wavy fibers, hypereosinophilia, oklusi koroner.',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 105,
      type: 'teori',
      category: 'SOAL TEORI & VIGNETTE',
      prompt: 'Pria 68 tahun mengeluh batuk kronis berdahak kental selama 4 bulan berturut-turut dalam 2 tahun berturut-turut. Hasil biopsi bronkus menunjukkan indeks Reid > 0.5. Apa mekanisme adaptasi seluler utama dan kelainan struktural yang mendasari kondisi ini?',
      diagnosis: 'Bronkitis Kronis & Hiperplasia Kelenjar Mukosa Bronkus',
      organ: 'Trakeobronkial (Mukosa Bronkus)',
      sifat: 'Penyakit Paru Obstruktif Kronis (PPOK)',
      asal: 'Epitel kolumnar bersilia & kelenjar submukosa',
      struktur_khas: [
        'Peningkatan Indeks Reid (> 0.4 - 0.5) menandakan rasio tebal kelenjar mukosa terhadap tebal dinding bronkus',
        'Hiperplasia dan hipertrofi kelenjar mukosa submukosa',
        'Metaplasia skuamosa pada epitel respiratori pelapis lumen bronkus',
        'Infiltrat inflamasi limfositik kronis di lamina propria'
      ],
      mikroskopis: [
        'Kelenjar asinus mukus di tunika submukosa bertambah banyak dan hipertrofik.',
        'Epitel torak bertingkat bersilia mengalami metaplasia menjadi epitel gepeng berlapis (skuamosa).',
        'Silia epitel rusak dan berkurang menyebabkan gangguan klirens mukosiliar.',
        'Lumen bronkus terisi plug mukus kental berisi sel radang kronis dan leukosit.'
      ],
      etiologi: 'Pajanan iritan kronis (utamanya asap rokok atau polusi industri) merangsang hipersekresi mukus berlebihan dari sel goblet dan kelenjar submukosa, disertai infeksi mikroba sekunder berulang.',
      keywords: 'Indeks Reid > 0.5, hiperplasia kelenjar mukus, batuk 3 bulan 2 tahun berturut-turut, metaplasia skuamosa.',
      image: ''
    },
    {
      id: 106,
      type: 'teori',
      category: 'SOAL TEORI & VIGNETTE',
      prompt: 'Wanita 34 tahun dengan riwayat demam reumatik akut saat remaja mengalami murmur diastolik di apeks jantung. Pemeriksaan histopatologi katup mitral menunjukkan Aschoff bodies dan sel Anitschkow. Jelaskan karakteristik patognomonik temuan mikroskopis tersebut!',
      diagnosis: 'Penyakit Jantung Reumatik (Aschoff Bodies & Anitschkow Cells)',
      organ: 'Endokardium Katup Jantung (Katup Mitral)',
      sifat: 'Penyakit Inflamasi Autoimun Pasca-Infeksi',
      asal: 'Jaringan ikat valvular dan interstisial miokardium',
      struktur_khas: [
        'Aschoff body (granuloma fokal khas perivaskular)',
        'Sel Anitschkow (makrofag teraktivasi berinti "caterpillar chromatin")',
        'Sel Aschoff berinti banyak (multinucleated giant cells)',
        'Fibrinoid necrosis pada stroma jaringan ikat'
      ],
      mikroskopis: [
        'Area sentral menunjukkan nekrosis fibrinoid eosinofilik yang dikelilingi limfosit T dan sel plasma.',
        'Sel Anitschkow tampak dengan inti besar lonjong dan kromatin terkonsentrasi di tengah menyerupai pita atau ulat bergelombang.',
        'Beberapa makrofag berfusi membentuk sel raksasa berinti banyak (Aschoff giant cells).',
        'Vegetasi verukosa steril kecil (1-2 mm) di sepanjang garis penutupan daun katup mitral.'
      ],
      etiologi: 'Reaksi hipersensitivitas tipe II (mimikri molekuler) antara antigen Streptococcus beta-hemolyticus grup A (protein M) dengan antigen kardiak manusia (miosin, laminin), memicu kerusakan katup imunologis progresif.',
      keywords: 'Aschoff bodies, Anitschkow cells (caterpillar nucleus), demam reumatik, nekrosis fibrinoid, katup mitral.',
      image: ''
    }
  ]
};
