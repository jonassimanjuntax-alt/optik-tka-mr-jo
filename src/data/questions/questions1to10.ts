import { Question } from '../../types/quiz';

export const questions1to10: Question[] = [
  // SOAL 1: PG - Miopi (Menengah)
  {
    id: 1,
    type: 'pg',
    difficulty: 'Menengah',
    topic: 'Cacat Mata (Miopi)',
    topicGroup: 'Miopi',
    competency: 'Menentukan kekuatan lensa kacamata miopi untuk penglihatan jauh tak hingga',
    stimulus: {
      title: 'Uji Lapang Pandang Jauh Siswa SMA',
      context: 'Seorang siswa kelas XII bernama Farhan mengikuti uji refraksi mata di laboratorium UKS sekolah. Berdasarkan kartu Snellen dan tes jarak jauh tanpa kacamata, Farhan hanya mampu melihat tulisan di papan tulis dengan jelas jika jarak papan tulis ke matanya paling jauh 200 cm. Jika objek berada lebih jauh dari 200 cm, bayangan jatuh di depan retina sehingga tampak kabur.',
      table: {
        headers: ['Kondisi Pengamatan', 'Jarak Objek Terjauh Jelas (PR)', 'Titik Dekat (PP)', 'Posisi Bayangan Tanpa Kacamata'],
        rows: [
          ['Mata Normal', 'Tak hingga (∞)', '25 cm', 'Tepat pada fovea sentralis retina'],
          ['Mata Farhan', '200 cm (2,0 m)', '25 cm', 'Di depan retina (bola mata terlalu lonjong)']
        ]
      },
      diagramDescription: 'Bola mata miopi: berkas sinar sejajar dari tak hingga dibiaskan oleh kornea & lensa mata mengumpul sebelum mencapai retina.'
    },
    misterJoClue: 'Halo sobat fisika! Farhan ingin melihat benda di jarak tak terhingga (s = ∞). Agar tampak jelas, kacamata harus membentuk bayangan maya benda tersebut tepat di titik jauhnya (s\' = -PR). Ingat rumus lensa tipis 1/f = 1/s + 1/s\'!',
    questionText: 'Berdasarkan data pemeriksaan refraksi di atas, kekuatan lensa (P) dan jenis kacamata yang harus diresepkan agar Farhan dapat melihat papan tulis dan benda-benda di kejauhan dengan normal adalah...',
    options: [
      { id: 'A', text: '-0,50 Dioptri, menggunakan lensa cekung (divergen)' },
      { id: 'B', text: '-2,00 Dioptri, menggunakan lensa cekung (divergen)' },
      { id: 'C', text: '+0,50 Dioptri, menggunakan lensa cembung (konvergen)' },
      { id: 'D', text: '-5,00 Dioptri, menggunakan lensa cekung (divergen)' },
      { id: 'E', text: '+2,00 Dioptri, menggunakan lensa cembung (konvergen)' }
    ],
    correctOption: 'A',
    discussion: {
      known: [
        'Titik jauh mata (Punctum Remotum, PR) = 200 cm = 2 m',
        'Jarak benda yang ingin dilihat (s) = tak hingga (∞)',
        'Sifat bayangan oleh lensa kacamata: maya, tegak (s\' = -PR = -200 cm)'
      ],
      asked: 'Kekuatan lensa kacamata (P) dan jenis lensa yang sesuai',
      physicsConcept: 'Mata miopi tidak mampu memipihkan lensa mata secara optimal sehingga daya bias bola mata terlalu kuat. Lensa cekung (negatif/divergen) berfungsi menyebarkan berkas sinar sejajar dari jauh tak terhingga seolah-olah berasal dari titik jauh mata (PR).',
      solutionSteps: [
        'Gunakan persamaan lensa tipis: 1/f = 1/s + 1/s\'',
        'Substitusi nilai s = ∞ dan s\' = -PR = -200 cm:',
        '1/f = 1/∞ + 1/(-200) = 0 - 1/200 = -1/200 cm⁻¹ ⇒ f = -200 cm = -2 meter',
        'Hitung kekuatan lensa: P = 100 / f(cm) atau P = 1 / f(m)',
        'P = 1 / (-2 m) = -0,50 Dioptri (D)'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: P = -0,50 D dengan lensa cekung menyebarkan berkas cahaya sehingga bayangan jatuh tepat di retina.',
        'Opsi B SALAH: Nilai -2,00 D diperoleh jika keliru membagi 100 dengan 50 cm atau salah menempatkan angka 2 m.',
        'Opsi C SALAH: Lensa positif (+0,50 D) adalah lensa cembung yang justru mengumpulkan cahaya lebih cepat ke depan retina.',
        'Opsi D SALAH: Nilai -5,00 D adalah kekeliruan perhitungan titik dekat (PP = 25 cm).',
        'Opsi E SALAH: Bertanda positif dan nilainya tidak sesuai rumus titik jauh.'
      ],
      conclusion: 'Farhan memerlukan lensa cekung (divergen) berkekuatan -0,50 Dioptri.'
    },
    quickTrick: {
      title: 'Trik Cepat Miopi Mister Jo',
      formulaOrMethod: 'P = -100 / PR(cm) atau P = -1 / PR(m)',
      explanation: 'Karena s = ∞ (sehingga 1/s = 0), kekuatan lensa kacamata miopi selalu sama dengan minus kebalikan dari titik jauhnya dalam meter: P = -1 / 2 = -0,50 D.',
      limitation: 'Hanya berlaku untuk pengamatan jarak jauh (s = tak hingga) dan jarak kacamata ke mata diabaikan.'
    },
    keyTakeaway: {
      coreConcept: 'Lensa cekung membentuk bayangan maya di titik jauh penderita miopi agar bayangan akhir oleh mata jatuh tepat di retina.',
      commonPitfall: 'Lupa menyertakan tanda minus pada fokus dan kekuatan lensa divergen.',
      quote: 'Ingat pesan Mister Jo: Lensa minus bukan mengurangi penglihatanmu, melainkan memperluas cakrawala pandangmu!'
    },
    animationConfig: {
      type: 'mata-miopi',
      pr: 200,
      focalLength: -200,
      description: 'Animasi sinar sejajar tak terhingga dibiaskan divergen oleh lensa kacamata negatif sehingga bayangan terfokus tepat pada retina.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita simak stimulus soal nomor satu. Farhan, siswa kelas 12, hanya mampu melihat objek terjauh dengan jelas pada jarak 200 sentimeter. Jika objek lebih jauh dari 200 sentimeter, bayangan jatuh di depan retina.',
      question: 'Pertanyaannya, berapakah kekuatan lensa dan jenis kacamata yang harus diresepkan agar Farhan dapat melihat benda di kejauhan dengan normal?',
      options: 'Pilihan A, minus 0,50 Dioptri lensa cekung. Pilihan B, minus 2,00 Dioptri lensa cekung. Pilihan C, positif 0,50 Dioptri lensa cembung. Pilihan D, minus 5,00 Dioptri lensa cekung. Pilihan E, positif 2,00 Dioptri lensa cembung.',
      clue: 'Petunjuk dari Mister Jo: Ingat bahwa Farhan ingin melihat benda di tak hingga, dan kacamata harus membuat bayangan maya di titik jauhnya. Gunakan hubungan P sama dengan minus seratus per PR.',
      normalDiscussion: 'Mari kita bahas secara matematis. Diketahui titik jauh Farhan 200 sentimeter atau 2 meter, s sama dengan tak hingga, dan s aksen sama dengan minus 200 sentimeter. Dari persamaan lensa satu per f sama dengan satu per s ditambah satu per s aksen, kita dapatkan f sama dengan minus 2 meter. Maka kekuatan lensa P sama dengan satu per f, yaitu minus 0,50 Dioptri.',
      quickTrick: 'Cara cepat Mister Jo: Untuk miopi penglihatan jauh, langsung gunakan rumus P sama dengan minus 1 dibagi jarak titik jauh dalam meter. P sama dengan minus 1 dibagi 2, hasilnya langsung minus 0,50 Dioptri!',
      conclusion: 'Kesimpulannya, jawaban yang tepat adalah opsi A, lensa cekung berkekuatan minus 0,50 Dioptri.'
    }
  },

  // SOAL 2: PGK - Hipermetropi (Menengah)
  {
    id: 2,
    type: 'pgk',
    difficulty: 'Menengah',
    topic: 'Cacat Mata (Hipermetropi)',
    topicGroup: 'Hipermetropi',
    competency: 'Menganalisis karakteristik pembentukan bayangan dan kekuatan lensa pada penderita hipermetropi',
    stimulus: {
      title: 'Hasil Uji Baca Dekat Pasien Hipermetropi',
      context: 'Ibu Ratna (usia 35 tahun) mengeluh cepat lelah dan pusing saat membaca buku pada jarak standar 25 cm. Dokter mata melakukan uji jarak baca terdekat tanpa kacamata. Hasilnya, Ibu Ratna baru bisa membaca huruf dengan tegas jika buku diletakkan pada jarak paling dekat 50 cm di depan matanya. Dokter merencanakan peresepan kacamata baca berlensa cembung.',
      table: {
        headers: ['Parameter Mata', 'Mata Emotrop (Normal)', 'Mata Ibu Ratna', 'Jarak Baca Standar (s)'],
        rows: [
          ['Titik Dekat (Punctum Proximum)', '25 cm', '50 cm', '25 cm'],
          ['Titik Jauh (Punctum Remotum)', 'Tak hingga (∞)', 'Tak hingga (∞)', '-'],
          ['Daya Pembiasan Lensa Alami', 'Normal', 'Terlalu lemah / bola mata pipih', '-']
        ]
      },
      diagramDescription: 'Berkas sinar dari jarak 25 cm tanpa kacamata dibiaskan konvergen di belakang retina.'
    },
    misterJoClue: 'Perhatikan baik-baik! Soal ini adalah Pilihan Ganda Kompleks. Ibu Ratna ingin membaca pada jarak s = 25 cm, namun matanya hanya bisa melihat jika bayangan berada di s\' = -50 cm. Analisis kekuatan lensa, jarak fokus, dan sifat bayangannya!',
    questionText: 'Berdasarkan kasus Ibu Ratna di atas, pilihlah SEMUA pernyataan fisika berikut yang BENAR! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Kekuatan lensa kacamata yang dibutuhkan Ibu Ratna bernilai +2,00 Dioptri.' },
      { id: 'B', text: 'Jarak fokus lensa kacamata tersebut adalah positif 50 sentimeter (+50 cm).' },
      { id: 'C', text: 'Bayangan yang dibentuk oleh kacamata baca bersifat nyata, terbalik, dan jatuh di retina.' },
      { id: 'D', text: 'Lensa kacamata berfungsi menggeser bayangan buku dari jarak 25 cm menjadi bayangan maya di jarak 50 cm di depan mata.' },
      { id: 'E', text: 'Tanpa kacamata, sinar dari benda berjarak 25 cm akan terfokus di depan retina.' }
    ],
    correctOptions: ['A', 'B', 'D'],
    discussion: {
      known: [
        'Titik dekat Ibu Ratna (PP) = 50 cm',
        'Jarak baca standar yang diinginkan (s) = 25 cm (Sn)',
        'Sifat bayangan kacamata: tegak dan maya (s\' = -PP = -50 cm)'
      ],
      asked: 'Pernyataan yang benar mengenai kekuatan lensa, jarak fokus, fungsi, dan sifat bayangan kacamata',
      physicsConcept: 'Pada mata hipermetropi, bayangan benda dekat jatuh di belakang retina karena kelengkungan kornea/lensa mata kurang cembung atau sumbu bola mata terlalu pendek. Lensa cembung (konvergen) mengumpulkan berkas cahaya terlebih dahulu dan membentuk bayangan maya di titik dekat mata.',
      solutionSteps: [
        'Gunakan rumus lensa tipis: 1/f = 1/s + 1/s\'',
        '1/f = 1/25 + 1/(-50) = 2/50 - 1/50 = 1/50 cm⁻¹',
        'Maka fokus lensa: f = +50 cm (Pernyataan B BENAR)',
        'Kekuatan lensa: P = 100 / f(cm) = 100 / 50 = +2,00 Dioptri (Pernyataan A BENAR)',
        'Fungsi lensa kacamata: membentuk bayangan maya di titik dekat (s\' = -50 cm) dari benda yang terletak pada jarak baca normal (s = 25 cm) (Pernyataan D BENAR)',
        'Evaluasi Pernyataan C: Bayangan oleh kacamata adalah MAYA dan TEGAK di depan mata (bukan nyata di retina; bayangan nyata di retina dibentuk oleh lensa mata, bukan oleh kacamata saja).',
        'Evaluasi Pernyataan E: Tanpa kacamata, sinar dari jarak 25 cm terfokus di BELAKANG retina, bukan di depan retina.'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: P = 100/25 - 100/50 = 4 - 2 = +2,00 D.',
        'Opsi B BENAR: f = 100 / P = 100 / 2 = 50 cm.',
        'Opsi C SALAH: Bayangan yang dibentuk kacamata adalah maya dan tegak di depan mata, agar lensa mata dapat membiaskannya ke retina.',
        'Opsi D BENAR: Definisi fungsi optik kacamata adalah membentuk bayangan maya di titik dekat pasien.',
        'Opsi E SALAH: Terfokus di belakang retina (di depan retina adalah miopi).'
      ],
      conclusion: 'Pernyataan yang benar adalah A, B, dan D.'
    },
    quickTrick: {
      title: 'Trik Cepat Hipermetropi Mister Jo',
      formulaOrMethod: 'P = 4 - (100 / PP cm)',
      explanation: 'Untuk jarak baca standar 25 cm: 100/25 = 4. Langsung kurangkan 4 dengan (100 / PP): P = 4 - (100 / 50) = 4 - 2 = +2,00 D!',
      limitation: 'Rumus cepat P = 4 - 100/PP hanya berlaku jika jarak baca normal s = 25 cm.'
    },
    keyTakeaway: {
      coreConcept: 'Kacamata tidak pernah memproyeksikan bayangan langsung ke retina; kacamata membentuk bayangan maya di depan mata agar dapat diakomodasi oleh lensa alami mata.',
      commonPitfall: 'Menganggap bayangan oleh kacamata bersifat nyata di retina.',
      quote: 'Kacamata adalah mitra lensa mata, bukan penggantinya!'
    },
    animationConfig: {
      type: 'mata-hipermetropi',
      sn: 25,
      focalLength: 50,
      description: 'Animasi sinar dari jarak baca 25 cm dibiaskan awal oleh kacamata cembung (+2 D) sehingga terfokus tepat pada retina.'
    },
    ttsScripts: {
      introAndStimulus: 'Soal nomor dua adalah pilihan ganda kompleks. Ibu Ratna baru bisa membaca dengan jelas pada jarak minimal 50 sentimeter dan ingin membaca pada jarak normal 25 sentimeter.',
      question: 'Pilihlah semua pernyataan fisika yang benar mengenai kasus Ibu Ratna tersebut.',
      options: 'Opsi A, kekuatan lensa kacamata plus 2 Dioptri. Opsi B, jarak fokus lensa plus 50 sentimeter. Opsi C, bayangan oleh kacamata bersifat nyata di retina. Opsi D, kacamata membentuk bayangan maya di jarak 50 sentimeter. Opsi E, tanpa kacamata sinar terfokus di depan retina.',
      clue: 'Bimbingan Mister Jo: Hitung dulu jarak fokus dan kekuatan lensanya dengan rumus satu per f sama dengan satu per 25 dikurang satu per 50. Ingat, bayangan yang dibentuk oleh kacamata selalu bersifat maya!',
      normalDiscussion: 'Mari kita telaah pembahasannya. Titik dekat PP sama dengan 50 sentimeter dan s sama dengan 25 sentimeter. Dari rumus satu per f sama dengan satu per 25 ditambah satu per minus 50, diperoleh f sama dengan positif 50 sentimeter. Kekuatan lensa P adalah 100 dibagi 50 sama dengan plus 2 Dioptri. Bayangan oleh kacamata bersifat maya di depan mata, bukan nyata di retina. Maka pernyataan A, B, dan D terbukti benar.',
      quickTrick: 'Cara cepat Mister Jo: Gunakan rumus P sama dengan 4 dikurang seratus per PP. P sama dengan 4 dikurang seratus dibagi 50, yaitu 4 dikurang 2 sama dengan plus 2 Dioptri!',
      conclusion: 'Opsi yang harus dipilih adalah A, B, dan D.'
    }
  },

  // SOAL 3: BS - Perbandingan Presbiopi vs Miopi/Hipermetropi (Menengah)
  {
    id: 3,
    type: 'bs',
    difficulty: 'Menengah',
    topic: 'Cacat Mata (Presbiopi)',
    topicGroup: 'Presbiopi',
    competency: 'Membedakan mekanisme hilangnya akomodasi pada presbiopi dengan anomali refraksi bola mata',
    stimulus: {
      title: 'Pemeriksaan Refraksi Lansia Usia 62 Tahun',
      context: 'Kakek Hendra (62 tahun) datang ke klinik mata dengan keluhan tidak bisa membaca koran pada jarak dekat (titik dekatnya telah mundur menjadi 80 cm) dan sekaligus tidak mampu melihat nomor bus kota dari kejauhan (titik jauhnya maju menjadi 250 cm). Dokter menjelaskan bahwa Kakek Hendra mengalami presbiopi yang disertai miopi, sehingga membutuhkan kacamata bifokal (lensa ganda).',
      table: {
        headers: ['Jenis Gangguan', 'Penyebab Anatomi/Fisiologi', 'Pergeseran Titik Dekat (PP)', 'Pergeseran Titik Jauh (PR)'],
        rows: [
          ['Miopi Murni', 'Aksial bola mata terlalu panjang', 'Normal (±25 cm)', 'Maju mendekat (< ∞)'],
          ['Hipermetropi Murni', 'Aksial bola mata terlalu pendek', 'Mundur menjauh (> 25 cm)', 'Tetap di tak hingga (∞)'],
          ['Presbiopi', 'Sklerosis & penurunan elastisitas lensa kristalina', 'Mundur menjauh (> 25 cm)', 'Sering disertai penurunan PR']
        ]
      },
      diagramDescription: 'Penampang kacamata bifokal: lensa atas untuk penglihatan jauh, lensa bawah untuk membaca.'
    },
    misterJoClue: 'Halo sahabat cerdas! Pada soal Benar atau Salah ini, kamu harus menilai kebenaran dari tiga pernyataan independen. Cermati penyebab fisiologis presbiopi dan fungsi masing-masing bagian lensa kacamata bifokal!',
    questionText: 'Tentukan apakah masing-masing pernyataan berikut BENAR (B) atau SALAH (S) berdasarkan konsep fisika optik mata presbiopi!',
    statements: [
      {
        id: 1,
        statement: 'Presbiopi terutama disebabkan oleh perubahan bentuk kelengkungan kornea secara permanen, bukan oleh berkurangnya elastisitas lensa mata.',
        isCorrect: false
      },
      {
        id: 2,
        statement: 'Bagian atas kacamata bifokal Kakek Hendra menggunakan lensa cekung berdaya -0,40 Dioptri untuk melihat objek di kejauhan tak hingga.',
        isCorrect: true
      },
      {
        id: 3,
        statement: 'Bagian bawah kacamata bifokal Kakek Hendra menggunakan lensa cembung berdaya +2,75 Dioptri agar dapat membaca koran pada jarak baca 25 cm.',
        isCorrect: true
      }
    ],
    discussion: {
      known: [
        'Titik jauh Kakek Hendra (PR) = 250 cm = 2,5 m',
        'Titik dekat Kakek Hendra (PP) = 80 cm',
        'Jarak baca standar (Sn) = 25 cm',
        'Objek jauh tak terhingga (s_jauh = ∞)'
      ],
      asked: 'Validasi kebenaran ketiga pernyataan tentang presbiopi dan kacamata bifokal',
      physicsConcept: 'Presbiopi terjadi akibat penuaan (sklerosis) pada serat lensa mata dan melemahnya otot siliaris, sehingga daya akomodasi (kemampuan mencembung dan memipih) berkurang. Untuk mengatasi gangguan jauh dan dekat sekaligus, digunakan kacamata bifokal: bagian atas negatif untuk melihat jauh, bagian bawah positif untuk membaca dekat.',
      solutionSteps: [
        'Analisis Pernyataan 1: Presbiopi disebabkan oleh sklerosis (kehilangan elastisitas) lensa kristalina dan melemahnya otot siliaris karena usia lanjut, BUKAN kelengkungan kornea. Jadi Pernyataan 1 SALAH.',
        'Analisis Pernyataan 2: Untuk melihat jauh (s = ∞) dengan PR = 250 cm: P_jauh = -100 / PR = -100 / 250 = -0,40 D (lensa cekung). Jadi Pernyataan 2 BENAR.',
        'Analisis Pernyataan 3: Untuk membaca dekat (s = 25 cm) dengan PP = 80 cm: P_dekat = 100/25 - 100/PP = 4 - 100/80 = 4 - 1,25 = +2,75 D (lensa cembung). Jadi Pernyataan 3 BENAR.'
      ],
      optionsAnalysis: [
        'Pernyataan 1: SALAH (Penyebab utama adalah hilangnya elastisitas lensa kristalina akibat usia).',
        'Pernyataan 2: BENAR (P = -1 / 2,5 m = -0,40 D pada segmen atas kacamata).',
        'Pernyataan 3: BENAR (P = 4 - 1,25 = +2,75 D pada segmen bawah kacamata).'
      ],
      conclusion: 'Urutan jawaban yang benar adalah SALAH - BENAR - BENAR.'
    },
    quickTrick: {
      title: 'Trik Cepat Bifokal Presbiopi Mister Jo',
      formulaOrMethod: 'P_atas = -1 / PR(m); P_bawah = 4 - 100 / PP(cm)',
      explanation: 'P_atas = -1 / 2,5 = -0,40 D. P_bawah = 4 - (100/80) = 4 - 1,25 = +2,75 D. Hitungan selesai dalam hitungan detik!',
      limitation: 'P_bawah berlaku jika jarak baca acuan adalah 25 cm.'
    },
    keyTakeaway: {
      coreConcept: 'Presbiopi adalah cacat akomodasi, bukan murni cacat refraksi anatomi bola mata. Solusinya kacamata bifokal dengan dua fokus berbeda.',
      commonPitfall: 'Mengira kacamata bifokal menggunakan satu lensa tunggal berkekuatan rata-rata.',
      quote: 'Mata boleh menua, namun ketajaman nalar fisikamu harus selalu prima!'
    },
    animationConfig: {
      type: 'mata-presbiopi',
      pr: 250,
      sn: 80,
      description: 'Animasi kacamata bifokal memperlihatkan jalur berkas penglihatan jauh melalui lensa atas dan penglihatan dekat melalui lensa bawah.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita amati soal nomor tiga bertipe Benar atau Salah. Kakek Hendra berusia 62 tahun mengalami titik dekat 80 sentimeter dan titik jauh 250 sentimeter.',
      question: 'Tentukan apakah masing-masing dari ketiga pernyataan berikut Benar atau Salah.',
      options: 'Pernyataan satu, presbiopi terutama disebabkan oleh perubahan bentuk kelengkungan kornea. Pernyataan dua, lensa atas berkekuatan minus 0,40 Dioptri. Pernyataan tiga, lensa bawah berkekuatan plus 2,75 Dioptri.',
      clue: 'Bimbingan Mister Jo: Ingat bahwa presbiopi berkaitan dengan elastisitas lensa mata yang menua. Untuk lensa atas gunakan rumus minus satu per titik jauh, dan lensa bawah gunakan rumus 4 dikurang seratus per titik dekat.',
      normalDiscussion: 'Mari kita periksa satu per satu. Pernyataan satu salah karena presbiopi disebabkan berkurangnya daya lentur lensa kristalina akibat usia, bukan kornea. Pernyataan dua benar karena kekuatan lensa atas adalah minus seratus per 250, sama dengan minus 0,40 Dioptri. Pernyataan tiga benar karena kekuatan lensa bawah adalah 4 dikurang seratus per 80, menghasilkan plus 2,75 Dioptri.',
      quickTrick: 'Cara cepat Mister Jo: P atas sama dengan minus 1 dibagi 2,5 m sama dengan minus 0,40 Dioptri. P bawah sama dengan 4 dikurang 1,25 sama dengan plus 2,75 Dioptri. Sangat ringkas!',
      conclusion: 'Hasil evaluasi adalah: Pernyataan 1 Salah, Pernyataan 2 Benar, Pernyataan 3 Benar.'
    }
  },

  // SOAL 4: PG - Lup Akomodasi Maksimum vs Tak Berakomodasi (Sulit)
  {
    id: 4,
    type: 'pg',
    difficulty: 'Sulit',
    topic: 'Lup',
    topicGroup: 'Lup',
    competency: 'Membandingkan perbesaran sudut lup dan pergeseran letak benda antara mode akomodasi maksimum dan rileks',
    stimulus: {
      title: 'Eksperimen Lup Ahli Filateli',
      context: 'Seorang filatelis (pengamat perangko) bermata normal (Sn = 25 cm) mengamati rincian cap pos pada perangko kuno menggunakan sebuah lup berlensa cembung dengan kekuatan +20 Dioptri. Pertama, ia mengamati dengan mata berakomodasi maksimum agar memperoleh perbesaran sebesar mungkin. Namun karena matanya lelah setelah beberapa menit, ia menggeser posisi perangko sehingga matanya menjadi rileks (tanpa akomodasi).',
      table: {
        headers: ['Kondisi Pengamatan', 'Letak Bayangan Akhir (s\')', 'Perbesaran Sudut (M)', 'Kondisi Otot Siliaris'],
        rows: [
          ['Akomodasi Maksimum', 'Di titik dekat (s\' = -25 cm)', 'M₁', 'Menebal maksimal (tegang)'],
          ['Tanpa Akomodasi (Rileks)', 'Di tak hingga (s\' = -∞)', 'M₂', 'Memipih rileks (santai)']
        ]
      },
      diagramDescription: 'Diagram sinar lup: berkas divergen dari bayangan maya yang diperbesar di depan lup.'
    },
    misterJoClue: 'Halo calon juara! Kekuatan lup P = +20 Dioptri, cari dulu jarak fokusnya f = 100/P. Kemudian bandingkan rumus perbesaran lup berakomodasi maksimum M₁ = Sn/f + 1 dengan tanpa akomodasi M₂ = Sn/f, serta tentukan seberapa jauh perangko harus digeser!',
    questionText: 'Berdasarkan data eksperimen di atas, perbesaran sudut saat berakomodasi maksimum (M₁), perbesaran tanpa akomodasi (M₂), serta arah dan jarak pergeseran perangko dari posisi pertama ke posisi kedua adalah...',
    options: [
      { id: 'A', text: 'M₁ = 6 kali, M₂ = 5 kali, dan perangko digeser menjauhi lup sejauh 0,83 cm' },
      { id: 'B', text: 'M₁ = 5 kali, M₂ = 4 kali, dan perangko digeser mendekati lup sejauh 1,25 cm' },
      { id: 'C', text: 'M₁ = 6 kali, M₂ = 5 kali, dan perangko digeser mendekati lup sejauh 0,50 cm' },
      { id: 'D', text: 'M₁ = 5 kali, M₂ = 6 kali, dan perangko digeser menjauhi lup sejauh 1,00 cm' },
      { id: 'E', text: 'M₁ = 4 kali, M₂ = 5 kali, dan perangko digeser menjauhi lup sejauh 0,83 cm' }
    ],
    correctOption: 'A',
    discussion: {
      known: [
        'Kekuatan lensa lup (P) = +20 Dioptri',
        'Titik dekat normal (Sn) = 25 cm',
        'Jarak fokus lup: f = 100 / P = 100 / 20 = 5 cm'
      ],
      asked: 'M₁ (akomodasi maksimum), M₂ (tanpa akomodasi), serta jarak dan arah pergeseran benda (Δs)',
      physicsConcept: 'Lup adalah lensa cembung yang membentuk bayangan maya, tegak, dan diperbesar. Pada akomodasi maksimum, bayangan terbentuk di titik dekat (s\'₁ = -Sn = -25 cm). Pada mata tanpa akomodasi, bayangan terbentuk di tak hingga (s\'₂ = -∞) sehingga benda diletakkan tepat di titik fokus lup (s₂ = f).',
      solutionSteps: [
        'Langkah 1: Hitung perbesaran sudut:',
        'Mata berakomodasi maksimum: M₁ = (Sn / f) + 1 = (25 / 5) + 1 = 5 + 1 = 6 kali',
        'Mata tanpa akomodasi: M₂ = Sn / f = 25 / 5 = 5 kali',
        'Langkah 2: Hitung letak benda pada kedua kondisi:',
        'Kondisi 1 (akomodasi maks): 1/s₁ = 1/f - 1/s\'₁ = 1/5 - 1/(-25) = 1/5 + 1/25 = 6/25 ⇒ s₁ = 25 / 6 ≈ 4,17 cm',
        'Kondisi 2 (tanpa akomodasi): s₂ = f = 5,00 cm',
        'Langkah 3: Hitung pergeseran benda:',
        'Δs = s₂ - s₁ = 5 - (25/6) = (30 - 25)/6 = 5/6 cm ≈ 0,83 cm',
        'Karena s₂ (5 cm) > s₁ (4,17 cm), maka perangko harus digeser MENJAUHI lup sejauh 0,83 cm.'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: M₁ = 6×, M₂ = 5×, Δs = 5/6 cm ≈ 0,83 cm menjauhi lup.',
        'Opsi B SALAH: Nilai perbesaran keliru (fokus tidak dihitung dengan benar).',
        'Opsi C SALAH: Arah pergeseran terbalik (bukan mendekati lup, melainkan menjauhi).',
        'Opsi D SALAH: Nilai perbesaran tertukar antara akomodasi maksimum dan rileks.',
        'Opsi E SALAH: M₁ harus lebih besar daripada M₂.'
      ],
      conclusion: 'Perbesaran saat akomodasi maksimum adalah 6 kali, tanpa akomodasi 5 kali, dan perangko digeser menjauhi lup sejauh 0,83 cm.'
    },
    quickTrick: {
      title: 'Trik Cepat Lup Mister Jo',
      formulaOrMethod: 'M₁ = M₂ + 1; s₁ = (f · Sn)/(f + Sn); Δs = f² / (f + Sn)',
      explanation: 'Perbesaran akomodasi maksimum selalu tepat 1 angka lebih besar dari perbesaran rileks (5 + 1 = 6). Pergeseran benda Δs = f² / (f + Sn) = 5² / (5 + 25) = 25 / 30 = 5/6 ≈ 0,83 cm menjauhi lup.',
      limitation: 'Formula pergeseran ini berlaku khusus antara akomodasi maksimum dan tanpa akomodasi untuk mata normal.'
    },
    keyTakeaway: {
      coreConcept: 'Pada lup, mata rileks mengorbankan perbesaran sebesar 1 kali (Sn/f vs Sn/f + 1), namun memberi kenyamanan pengamatan jangka panjang karena otot siliaris tidak bertegang.',
      commonPitfall: 'Mengira perbesaran sudut sama dengan perbesaran linear s\'/s ketika bayangan berada di tak hingga.',
      quote: 'Pilihlah akomodasi maksimum untuk ketelitian sesaat, pilihlah mata rileks untuk ketekunan berjam-jam!'
    },
    animationConfig: {
      type: 'lup',
      focalLength: 5,
      objectDistance: 4.17,
      sn: 25,
      isAccommodating: true,
      description: 'Animasi lup interaktif menunjukkan berkas sinar dari benda di s=4,17 cm membentuk bayangan maya di titik dekat 25 cm, lalu bergeser ke s=5 cm membentuk berkas sejajar ke tak hingga.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita simak soal nomor empat. Seorang pengamat bermata normal menggunakan lup dengan kekuatan plus 20 Dioptri. Ia membandingkan pengamatan saat berakomodasi maksimum dan saat rileks tanpa akomodasi.',
      question: 'Berapakah perbesaran sudut saat akomodasi maksimum, perbesaran tanpa akomodasi, serta jarak dan arah pergeseran perangko?',
      options: 'Pilihan A, M1 sama dengan 6 kali, M2 sama dengan 5 kali, digeser menjauhi lup 0,83 sentimeter. Pilihan B, 5 kali, 4 kali, mendekati 1,25 sentimeter. Pilihan C, 6 kali, 5 kali, mendekati 0,5 sentimeter. Pilihan D, 5 kali, 6 kali, menjauhi 1 sentimeter. Pilihan E, 4 kali, 5 kali, menjauhi 0,83 sentimeter.',
      clue: 'Petunjuk Mister Jo: Hitung dulu fokus lup dari 100 dibagi 20. Kemudian gunakan rumus M1 sama dengan Sn per f ditambah satu, dan M2 sama dengan Sn per f. Cari posisi benda pertama dan kedua!',
      normalDiscussion: 'Mari kita bahas. Fokus lup adalah 100 dibagi 20 sama dengan 5 sentimeter. Perbesaran akomodasi maksimum M1 adalah 25 dibagi 5 ditambah satu, hasilnya 6 kali. Perbesaran tanpa akomodasi M2 adalah 25 dibagi 5 sama dengan 5 kali. Posisi benda pertama adalah 25 per 6 sama dengan 4,17 sentimeter. Posisi benda kedua tepat di fokus yaitu 5 sentimeter. Selisihnya adalah 5 dikurang 4,17 sama dengan 0,83 sentimeter menjauhi lup.',
      quickTrick: 'Cara cepat Mister Jo: Perbesaran akomodasi pasti tepat satu lebih besar dari tanpa akomodasi, jadi 5 dan 6. Selisih jaraknya adalah f kuadrat dibagi f ditambah Sn, yaitu 25 dibagi 30 sama dengan 5 per 6 atau 0,83 sentimeter menjauhi lup.',
      conclusion: 'Jawaban yang tepat adalah opsi A.'
    }
  },

  // SOAL 5: PGK - Mikroskop: Lensa Objektif & Okuler (Sulit)
  {
    id: 5,
    type: 'pgk',
    difficulty: 'Sulit',
    topic: 'Mikroskop',
    topicGroup: 'Mikroskop',
    competency: 'Menganalisis sifat bayangan perantara, perbesaran total, dan panjang tabung mikroskop',
    stimulus: {
      title: 'Spesifikasi Optik Mikroskop Laboratorium Biologi',
      context: 'Di laboratorium biologi, seorang siswa mengamati preparat sel gabus menggunakan mikroskop cahaya. Jarak fokus lensa objektif mikroskop adalah 1,0 cm dan jarak fokus lensa okuler adalah 5,0 cm. Preparat diletakkan pada jarak 1,2 cm di depan lensa objektif. Pengamat memiliki mata normal dengan titik dekat Sn = 25 cm dan melakukan pengamatan dengan mata tanpa berakomodasi (rileks).',
      table: {
        headers: ['Komponen Optik', 'Jarak Fokus (f)', 'Posisi Benda (s)', 'Peran Optik'],
        rows: [
          ['Lensa Objektif', 'f_ob = 1,0 cm', 's_ob = 1,2 cm', 'Membentuk bayangan nyata, terbalik, diperbesar'],
          ['Lensa Okuler', 'f_ok = 5,0 cm', 'Diatur agar s_ok = f_ok', 'Berfungsi sebagai lup untuk memperbesar bayangan objektif']
        ]
      },
      diagramDescription: 'Jalur sinar mikroskop: berkas dari preparat melewati objektif membentuk bayangan I1, lalu melewati okuler membentuk berkas sejajar ke mata rileks.'
    },
    misterJoClue: 'Halo sobat analis! Soal ini adalah Pilihan Ganda Kompleks. Cermati bahwa mata TIDAK BERAKOMODASI. Ini berarti bayangan oleh lensa objektif harus jatuh tepat di titik fokus okuler (s_ok = f_ok). Hitung perbesaran objektif, okuler, perbesaran total, dan panjang tabung mikroskop d!',
    questionText: 'Berdasarkan data spesifikasi dan kondisi pengamatan di atas, pilihlah SEMUA pernyataan berikut yang BENAR! (Pilih semua opsi yang tepat)',
    options: [
      { id: 'A', text: 'Bayangan yang dibentuk oleh lensa objektif berjarak 6,0 cm di belakang lensa objektif.' },
      { id: 'B', text: 'Perbesaran linear lensa objektif adalah 5 kali.' },
      { id: 'C', text: 'Perbesaran sudut lensa okuler saat mata tidak berakomodasi adalah 6 kali.' },
      { id: 'D', text: 'Perbesaran total mikroskop pada pengamatan tersebut adalah 25 kali.' },
      { id: 'E', text: 'Jarak antara lensa objektif dan lensa okuler (panjang tabung mikroskop) adalah 11,0 cm.' }
    ],
    correctOptions: ['A', 'B', 'D', 'E'],
    discussion: {
      known: [
        'Jarak fokus objektif (f_ob) = 1,0 cm',
        'Jarak fokus okuler (f_ok) = 5,0 cm',
        'Jarak benda objektif (s_ob) = 1,2 cm',
        'Titik dekat pengamat (Sn) = 25 cm',
        'Kondisi: mata tanpa akomodasi (bayangan akhir di ∞, sehingga s_ok = f_ok = 5,0 cm)'
      ],
      asked: 'Validasi pernyataan mengenai s\'_ob, M_ob, M_ok, M_total, dan panjang tabung d',
      physicsConcept: 'Mikroskop terdiri dari dua lensa cembung. Objektif membentuk bayangan nyata, terbalik, dan diperbesar (I₁). Bayangan I₁ menjadi benda bagi lensa okuler. Karena mata tidak berakomodasi, I₁ harus jatuh tepat di fokus okuler (s_ok = f_ok). Panjang tabung adalah d = s\'_ob + f_ok, dan perbesaran total adalah M_tot = |M_ob| × M_ok.',
      solutionSteps: [
        'Langkah 1: Tentukan jarak bayangan objektif (s\'_ob):',
        '1/s\'_ob = 1/f_ob - 1/s_ob = 1/1,0 - 1/1,2 = 1 - 5/6 = 1/6 cm⁻¹',
        's\'_ob = +6,0 cm (Pernyataan A BENAR)',
        'Langkah 2: Tentukan perbesaran lensa objektif (M_ob):',
        'M_ob = |s\'_ob / s_ob| = 6,0 / 1,2 = 5 kali (Pernyataan B BENAR)',
        'Langkah 3: Tentukan perbesaran lensa okuler tanpa akomodasi (M_ok):',
        'M_ok = Sn / f_ok = 25 / 5,0 = 5 kali (Bukan 6 kali; 6 kali adalah jika berakomodasi maksimum). (Pernyataan C SALAH)',
        'Langkah 4: Tentukan perbesaran total mikroskop (M_tot):',
        'M_tot = M_ob × M_ok = 5 × 5 = 25 kali (Pernyataan D BENAR)',
        'Langkah 5: Tentukan panjang tabung mikroskop (d):',
        'd = s\'_ob + f_ok = 6,0 cm + 5,0 cm = 11,0 cm (Pernyataan E BENAR)'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: s\'_ob = 6,0 cm sesuai rumus Gauss lensa tipis.',
        'Opsi B BENAR: M_ob = 6 / 1,2 = 5 kali.',
        'Opsi C SALAH: Untuk mata tak berakomodasi, M_ok = Sn/f_ok = 25/5 = 5 kali (rumus Sn/f + 1 hanya untuk akomodasi maksimum).',
        'Opsi D BENAR: M_tot = 5 × 5 = 25 kali.',
        'Opsi E BENAR: d = s\'_ob + f_ok = 6,0 + 5,0 = 11,0 cm.'
      ],
      conclusion: 'Pernyataan yang tepat adalah A, B, D, dan E.'
    },
    quickTrick: {
      title: 'Trik Cepat Mikroskop Mister Jo',
      formulaOrMethod: 's\'_ob = (s_ob · f_ob) / (s_ob - f_ob); d = s\'_ob + f_ok; M = M_ob × (Sn / f_ok)',
      explanation: 's\'_ob = (1,2 × 1) / (1,2 - 1) = 1,2 / 0,2 = 6 cm. M_ob = 6 / 1,2 = 5×. M_ok = 25 / 5 = 5×. Maka M_tot = 5 × 5 = 25×, dan d = 6 + 5 = 11 cm.',
      limitation: 'Khusus pengamatan tanpa akomodasi pada mikroskop standar.'
    },
    keyTakeaway: {
      coreConcept: 'Pada mikroskop, lensa objektif bekerja seperti proyektor (menghasilkan bayangan nyata diperbesar), sedangkan lensa okuler bekerja seperti lup (memperbesar bayangan tersebut secara sudut).',
      commonPitfall: 'Tertukar menggunakan rumus M_ok = Sn/f + 1 pada pengamatan tanpa akomodasi.',
      quote: 'Dua lensa bekerja sama: yang satu mendekatkan realitas renik, yang satu membuka pandangan mata!'
    },
    animationConfig: {
      type: 'mikroskop',
      fob: 1.0,
      fok: 5.0,
      sob: 1.2,
      sn: 25,
      isAccommodating: false,
      description: 'Animasi dua lensa mikroskop memperlihatkan pembentukan bayangan nyata I1 oleh objektif tepat pada fokus okuler sehingga berkas keluar sejajar menuju mata rileks.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita telaah stimulus soal nomor lima. Sebuah mikroskop memiliki jarak fokus objektif 1 sentimeter dan okuler 5 sentimeter. Preparat berada 1,2 sentimeter di depan objektif, diamati oleh mata normal tanpa berakomodasi.',
      question: 'Pilihlah semua pernyataan fisika yang benar mengenai perbesaran dan panjang tabung mikroskop.',
      options: 'Opsi A, jarak bayangan objektif 6 sentimeter. Opsi B, perbesaran objektif 5 kali. Opsi C, perbesaran okuler 6 kali. Opsi D, perbesaran total 25 kali. Opsi E, panjang tabung 11 sentimeter.',
      clue: 'Bimbingan Mister Jo: Hitung s aksen objektif terlebih dahulu. Karena mata tidak berakomodasi, s okuler sama dengan f okuler, dan perbesaran okuler sama dengan Sn dibagi fok, bukan ditambah satu.',
      normalDiscussion: 'Mari kita buktikan. Dari rumus lensa objektif, s aksen objektif adalah 1,2 dikali 1 dibagi 0,2 sama dengan 6 sentimeter. Maka perbesaran objektif adalah 6 dibagi 1,2 sama dengan 5 kali. Karena mata tak berakomodasi, perbesaran okuler adalah 25 dibagi 5 sama dengan 5 kali. Sehingga perbesaran total adalah 5 dikali 5 sama dengan 25 kali. Panjang tabung d adalah 6 ditambah 5 sama dengan 11 sentimeter. Opsi C salah karena nilainya 5 kali, bukan 6 kali.',
      quickTrick: 'Cara cepat Mister Jo: Hitung cepat s aksen sama dengan 6 sentimeter. M objektif 5, M okuler 5, perbesaran total langsung 25 kali dan tabung 11 sentimeter. Sangat cepat!',
      conclusion: 'Opsi yang benar adalah A, B, D, dan E.'
    }
  },

  // SOAL 6: BS - Teropong Bintang (Astronomis) (Menengah)
  {
    id: 6,
    type: 'bs',
    difficulty: 'Menengah',
    topic: 'Teropong Bintang',
    topicGroup: 'Teropong',
    competency: 'Menilai prinsip pembentukan bayangan, perbesaran sudut, dan panjang tabung teropong bintang',
    stimulus: {
      title: 'Observasi Kawah Bulan dengan Teropong Bintang',
      context: 'Klub Astronomi sekolah menggunakan teleskop refraktor (teropong bintang) sederhana untuk mengamati kawah bulan. Teropong tersebut tersusun atas dua lensa cembung. Lensa objektif memiliki jarak fokus 100 cm dan lensa okuler memiliki jarak fokus 5 cm. Seorang siswa bermata normal mengamati bulan di langit malam tanpa berakomodasi.',
      table: {
        headers: ['Parameter Teleskop', 'Lensa Objektif', 'Lensa Okuler', 'Hubungan Desain'],
        rows: [
          ['Jarak Fokus (f)', 'f_ob = 100 cm', 'f_ok = 5 cm', 'f_ob >> f_ok'],
          ['Tipe Lensa', 'Cembung (konvergen)', 'Cembung (konvergen)', 'Kedua lensa positif'],
          ['Posisi Bayangan', 'Jatuh tepat di titik fokus f_ob', 'Berimpit dengan titik fokus f_ok', 'd = f_ob + f_ok']
        ]
      },
      diagramDescription: 'Diagram sinar teropong bintang: berkas sejajar dari benda langit difokuskan di f_ob yang berimpit dengan f_ok, lalu keluar sejajar dari okuler.'
    },
    misterJoClue: 'Halo pecinta angkasa! Pada teropong bintang, berkas sinar dari bintang atau bulan yang sangat jauh dianggap sejajar (s = ∞). Pada mata tak berakomodasi, bayangan akhir berada di tak terhingga. Cek rumus M = f_ob / f_ok dan d = f_ob + f_ok!',
    questionText: 'Tentukan apakah masing-masing pernyataan berikut BENAR (B) atau SALAH (S) berdasarkan konsep fisika teropong bintang!',
    statements: [
      {
        id: 1,
        statement: 'Perbesaran sudut bayangan kawah bulan saat diamati dengan mata tanpa akomodasi adalah 20 kali.',
        isCorrect: true
      },
      {
        id: 2,
        statement: 'Jarak antara lensa objektif dan lensa okuler (panjang tabung teropong) saat mata rileks adalah 105 cm.',
        isCorrect: true
      },
      {
        id: 3,
        statement: 'Bayangan akhir kawah bulan yang dilihat oleh mata siswa bersifat nyata, tegak, dan berada di titik dekat mata.',
        isCorrect: false
      }
    ],
    discussion: {
      known: [
        'Jarak fokus objektif (f_ob) = 100 cm',
        'Jarak fokus okuler (f_ok) = 5 cm',
        'Kondisi: mata tanpa akomodasi (rileks)'
      ],
      asked: 'Evaluasi kebenaran nilai perbesaran sudut, panjang tabung, dan sifat bayangan akhir teropong bintang',
      physicsConcept: 'Teropong bintang tersusun atas dua lensa cembung dengan f_ob > f_ok. Berkas cahaya dari benda langit yang sangat jauh (s_ob ≈ ∞) membentuk bayangan nyata, terbalik, dan diperkecil tepat di titik fokus lensa objektif (s\'_ob = f_ob). Untuk pengamatan tanpa akomodasi, titik fokus okuler dihimpitkan dengan titik fokus objektif, sehingga berkas keluar sejajar (s\'_ok = ∞). Bayangan akhir bersifat maya, terbalik, dan diperbesar di tak terhingga.',
      solutionSteps: [
        'Analisis Pernyataan 1: Perbesaran sudut teropong bintang untuk mata tak berakomodasi dihitung dengan rumus M = f_ob / f_ok = 100 / 5 = 20 kali. Maka Pernyataan 1 BENAR.',
        'Analisis Pernyataan 2: Panjang tabung teropong bintang untuk mata tak berakomodasi adalah d = f_ob + f_ok = 100 cm + 5 cm = 105 cm. Maka Pernyataan 2 BENAR.',
        'Analisis Pernyataan 3: Bayangan akhir yang dilihat mata adalah MAYA, TERBALIK terhadap benda asli, dan berada di TAK HINGGA (karena mata tak berakomodasi). Pernyataan menyebut nyata, tegak, di titik dekat sehingga Pernyataan 3 SALAH.'
      ],
      optionsAnalysis: [
        'Pernyataan 1: BENAR (M = 100 / 5 = 20×).',
        'Pernyataan 2: BENAR (d = 100 + 5 = 105 cm).',
        'Pernyataan 3: SALAH (Bayangan akhir teropong astronomis adalah maya, terbalik, dan di tak hingga).'
      ],
      conclusion: 'Kombinasi jawaban yang tepat adalah BENAR - BENAR - SALAH.'
    },
    quickTrick: {
      title: 'Trik Cepat Teropong Bintang Mister Jo',
      formulaOrMethod: 'M = f_ob / f_ok; d = f_ob + f_ok',
      explanation: 'Untuk mata tak berakomodasi, perbesaran selalu f_ob dibagi f_ok (100 / 5 = 20×), dan panjang tabung selalu penjumlahannya (100 + 5 = 105 cm). Ingat bayangan astronomis terbalik karena tidak membutuhkan lensa pembalik!',
      limitation: 'Hanya berlaku untuk teropong bintang dua lensa cembung dengan mata rileks.'
    },
    keyTakeaway: {
      coreConcept: 'Pada teropong bintang, bayangan terbalik tidak menjadi masalah karena di luar angkasa tidak ada patokan orientasi atas atau bawah.',
      commonPitfall: 'Mengira bayangan akhir teropong bintang tegak seperti teropong bumi.',
      quote: 'Di alam semesta yang maha luas, terbalik atau tegak tak mengurangi keindahan ciptaan-Nya!'
    },
    animationConfig: {
      type: 'teropong-bintang',
      fob: 100,
      fok: 5,
      isAccommodating: false,
      description: 'Animasi teropong bintang menunjukkan sinar sejajar difokuskan di titik fokus bersama fob dan fok lalu keluar sejajar membentuk bayangan maya terbalik di tak hingga.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita periksa soal nomor enam tipe Benar atau Salah. Teropong bintang di klub astronomi memiliki fokus objektif 100 sentimeter dan fokus okuler 5 sentimeter untuk pengamatan tanpa akomodasi.',
      question: 'Tentukan apakah masing-masing dari ketiga pernyataan berikut Benar atau Salah.',
      options: 'Pernyataan satu, perbesaran sudut kawah bulan 20 kali. Pernyataan dua, panjang tabung teropong 105 sentimeter. Pernyataan tiga, bayangan akhir bersifat nyata dan tegak.',
      clue: 'Petunjuk Mister Jo: Rumus teropong bintang santai sangat sederhana, M sama dengan f objektif dibagi f okuler, dan d sama dengan f objektif ditambah f okuler. Ingat sifat bayangan teropong bintang selalu terbalik!',
      normalDiscussion: 'Mari kita buktikan. Pernyataan satu benar karena perbesaran M adalah 100 dibagi 5 sama dengan 20 kali. Pernyataan dua benar karena panjang tabung d adalah 100 ditambah 5 sama dengan 105 sentimeter. Pernyataan tiga salah karena bayangan akhir teropong bintang bersifat maya, terbalik, dan berada di tak hingga.',
      quickTrick: 'Cara cepat Mister Jo: Langsung bagi untuk perbesaran: 100 dibagi 5 dapat 20 kali. Langsung jumlahkan untuk panjang tabung: 100 ditambah 5 dapat 105 sentimeter.',
      conclusion: 'Hasilnya: Pernyataan 1 Benar, Pernyataan 2 Benar, Pernyataan 3 Salah.'
    }
  },

  // SOAL 7: PG - Teropong Bumi dengan Lensa Pembalik (Sangat Sulit)
  {
    id: 7,
    type: 'pg',
    difficulty: 'Sangat Sulit',
    topic: 'Teropong Bumi',
    topicGroup: 'Teropong',
    competency: 'Menganalisis peran lensa pembalik dan menghitung panjang tabung teropong bumi',
    stimulus: {
      title: 'Uji Teropong Bumi Pasukan Penjaga Pantai',
      context: 'Pasukan penjaga pantai menggunakan teropong bumi (terestrial) untuk memantau kapal di perairan lepas. Teropong bumi harus menghasilkan bayangan akhir yang tegak agar posisi kapal dan navigasi tidak membingungkan pengamat. Untuk menegakkan bayangan, di antara lensa objektif (f_ob = 60 cm) dan lensa okuler (f_ok = 6 cm) dipasang sebuah lensa pembalik cembung dengan jarak fokus f_p = 4 cm. Pengamatan dilakukan oleh petugas dengan mata normal tanpa berakomodasi.',
      table: {
        headers: ['Komponen Lensa', 'Jarak Fokus', 'Sifat Bayangan yang Dihasilkan', 'Perbesaran Linear Lensa'],
        rows: [
          ['Lensa Objektif', 'f_ob = 60 cm', 'Nyata, terbalik, diperkecil', 'M_ob'],
          ['Lensa Pembalik', 'f_p = 4 cm', 'Nyata, tegak terhadap benda asli (terbalik terhadap I₁)', 'M_p = 1 kali (ukuran tetap)'],
          ['Lensa Okuler', 'f_ok = 6 cm', 'Maya, tegak terhadap benda asli di kejauhan', 'M_ok (sebagai lup)']
        ]
      },
      diagramDescription: 'Susunan tiga lensa teropong bumi: lensa objektif, lensa pembalik di tengah berjarak 2fp dari I1 dan I2, serta lensa okuler.'
    },
    misterJoClue: 'Halo sahabat tangguh! Lensa pembalik diletakkan sedemikian rupa sehingga bayangan objektif jatuh tepat pada jarak 2f_p di depan lensa pembalik. Akibatnya, lensa pembalik membentuk bayangan baru berjarak 2f_p di belakangnya tanpa mengubah ukuran (M_p = 1). Hitung panjang tabung d = f_ob + 4f_p + f_ok dan perbesarannya!',
    questionText: 'Berdasarkan konfigurasi optik di atas, perbesaran sudut teropong bumi (M) dan panjang total tabung teropong (d) saat mata petugas mengamati tanpa berakomodasi adalah...',
    options: [
      { id: 'A', text: 'Perbesaran 10 kali dan panjang tabung 82 cm' },
      { id: 'B', text: 'Perbesaran 10 kali dan panjang tabung 70 cm' },
      { id: 'C', text: 'Perbesaran 15 kali dan panjang tabung 82 cm' },
      { id: 'D', text: 'Perbesaran 2,5 kali dan panjang tabung 74 cm' },
      { id: 'E', text: 'Perbesaran 10 kali dan panjang tabung 66 cm' }
    ],
    correctOption: 'A',
    discussion: {
      known: [
        'Jarak fokus objektif (f_ob) = 60 cm',
        'Jarak fokus pembalik (f_p) = 4 cm',
        'Jarak fokus okuler (f_ok) = 6 cm',
        'Kondisi pengamatan: mata tanpa akomodasi'
      ],
      asked: 'Perbesaran sudut teropong bumi (M) dan panjang tabung teropong (d)',
      physicsConcept: 'Teropong bumi menggunakan lensa pembalik di antara objektif dan okuler agar bayangan akhir tegak. Bayangan dari objektif diletakkan pada titik 2f_p lensa pembalik, sehingga dibentuk bayangan baru yang nyata, terbalik kembali (menjadi tegak relatif terhadap objek asli), berjarak 2f_p di belakang lensa pembalik dengan perbesaran 1 kali. Panjang tabung teropong bumi untuk mata rileks adalah d = f_ob + 4f_p + f_ok, dan perbesarannya tetap M = f_ob / f_ok karena lensa pembalik tidak menyumbang perbesaran sudut.',
      solutionSteps: [
        'Langkah 1: Hitung perbesaran sudut (M):',
        'M = f_ob / f_ok = 60 / 6 = 10 kali',
        'Langkah 2: Hitung jarak antar-komponen untuk panjang tabung (d):',
        'Jarak dari objektif ke bayangan pertama I₁: s\'_ob = f_ob = 60 cm',
        'Jarak dari I₁ ke lensa pembalik: s_p = 2f_p = 2(4) = 8 cm',
        'Jarak dari lensa pembalik ke bayangan kedua I₂: s\'_p = 2f_p = 2(4) = 8 cm',
        'Jarak dari I₂ ke lensa okuler (mata rileks): s_ok = f_ok = 6 cm',
        'Total panjang tabung: d = f_ob + 2f_p + 2f_p + f_ok = f_ob + 4f_p + f_ok',
        'd = 60 + 4(4) + 6 = 60 + 16 + 6 = 82 cm'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: M = 10 kali dan d = 82 cm.',
        'Opsi B SALAH: Panjang tabung 70 cm diperoleh jika lupa mengalikan 4 pada fokus pembalik (hanya menambah 1f_p = 4 cm).',
        'Opsi C SALAH: Perbesaran 15 kali keliru.',
        'Opsi D SALAH: Perbesaran 2,5 kali didapat dari membagi f_ob dengan 4f_p.',
        'Opsi E SALAH: 66 cm adalah panjang jika lensa pembalik diabaikan sama sekali (seperti teropong bintang).'
      ],
      conclusion: 'Teropong bumi memiliki perbesaran 10 kali dan panjang tabung 82 cm.'
    },
    quickTrick: {
      title: 'Trik Cepat Teropong Bumi Mister Jo',
      formulaOrMethod: 'M = f_ob / f_ok; d = f_ob + 4f_p + f_ok',
      explanation: 'Lensa pembalik hanya menambah panjang tabung sebesar 4 kali fokusnya (4 × 4 = 16 cm) tanpa mengubah perbesaran: M = 60 / 6 = 10×; d = 60 + 16 + 6 = 82 cm.',
      limitation: 'Berlaku jika lensa pembalik membentuk bayangan sama besar di 2f_p dan mata rileks.'
    },
    keyTakeaway: {
      coreConcept: 'Lensa pembalik berfungsi menegakkan orientasi bayangan, namun memiliki konsekuensi tabung instrumen menjadi lebih panjang sebesar 4f_p.',
      commonPitfall: 'Lupa menambahkan 4f_p pada perhitungan panjang tabung teropong bumi.',
      quote: 'Setiap keuntungan optik selalu memiliki harga kompromi fisis yang harus diperhitungkan!'
    },
    animationConfig: {
      type: 'teropong-bumi',
      fob: 60,
      fp: 4,
      fok: 6,
      isAccommodating: false,
      description: 'Animasi tiga lensa teropong bumi memperlihatkan sinar dibalikkan oleh lensa tengah berjarak 4fp sehingga bayangan akhir tegak dan diperbesar.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita simak soal nomor tujuh tentang teropong bumi penjaga pantai. Teropong menggunakan objektif 60 sentimeter, lensa pembalik 4 sentimeter, dan okuler 6 sentimeter.',
      question: 'Berapakah perbesaran sudut teropong dan panjang total tabungnya saat mata petugas mengamati tanpa berakomodasi?',
      options: 'Pilihan A, 10 kali dan 82 sentimeter. Pilihan B, 10 kali dan 70 sentimeter. Pilihan C, 15 kali dan 82 sentimeter. Pilihan D, 2,5 kali dan 74 sentimeter. Pilihan E, 10 kali dan 66 sentimeter.',
      clue: 'Petunjuk Mister Jo: Lensa pembalik tidak mengubah perbesaran sudut, jadi M tetap f objektif dibagi f okuler. Namun pada panjang tabung, ingat bahwa lensa pembalik menyumbang tambahan panjang 4 kali f pembalik!',
      normalDiscussion: 'Mari kita hitung secara runut. Perbesaran sudut M adalah 60 dibagi 6 sama dengan 10 kali. Panjang tabung d adalah f objektif ditambah 4 kali f pembalik ditambah f okuler. Yaitu 60 ditambah 4 dikali 4 ditambah 6. Hasilnya adalah 60 ditambah 16 ditambah 6 sama dengan 82 sentimeter.',
      quickTrick: 'Cara cepat Mister Jo: Lensa pembalik menyumbang 4 kali 4 sama dengan 16 sentimeter. Jumlahkan 60 ditambah 16 ditambah 6 sama dengan 82 sentimeter. Perbesarannya langsung 60 dibagi 6 sama dengan 10 kali.',
      conclusion: 'Jawaban yang tepat adalah opsi A.'
    }
  },

  // SOAL 8: PGK - Teropong Panggung / Teropong Galileo (Sangat Sulit)
  {
    id: 8,
    type: 'pgk',
    difficulty: 'Sangat Sulit',
    topic: 'Teropong Panggung',
    topicGroup: 'Teropong',
    competency: 'Menganalisis prinsip teropong Galileo dengan okuler lensa cekung dan panjang tabung ringkas',
    stimulus: {
      title: 'Teropong Opera (Galilean / Teropong Panggung)',
      context: 'Penonton gedung teater pertunjukan seni opera menggunakan teropong panggung (teropong Galileo). Keunggulan teropong ini adalah tabungnya jauh lebih pendek dan ringan dibandingkan teropong bumi, serta langsung menghasilkan bayangan tegak tanpa membutuhkan lensa pembalik. Teropong ini menggunakan lensa objektif cembung dengan jarak fokus f_ob = +30 cm dan lensa okuler CEKUNG dengan jarak fokus f_ok = -5 cm. Penonton mengamati aksi panggung dengan mata rileks (tanpa akomodasi).',
      table: {
        headers: ['Parameter Optik', 'Objektif (Lensa 1)', 'Okuler (Lensa 2)', 'Konfigurasi Galileo'],
        rows: [
          ['Jenis Lensa', 'Cembung (Konvergen)', 'Cekung (Divergen)', 'Lensa okuler bernilai negatif'],
          ['Jarak Fokus', 'f_ob = +30 cm', 'f_ok = -5 cm', '|f_ok| = 5 cm'],
          ['Posisi Bayangan Objektif', 'Di belakang okuler', 'Bertindak sebagai benda maya', 'Sinar keluar sejajar ke mata']
        ]
      },
      diagramDescription: 'Diagram sinar teropong Galileo: berkas konvergen dari objektif dicegat oleh okuler cekung sebelum titik fokus objektif sehingga keluar sejajar.'
    },
    misterJoClue: 'Perhatian! Ini soal HOTS penalaran mendalam. Teropong Galileo menggunakan okuler lensa cekung. Bayangan objektif belum sempat terbentuk nyata karena dicegat oleh lensa okuler. Cermati tanda fokus okuler negatif dan rumus panjang tabung d = f_ob - |f_ok| serta bayangan akhirnya!',
    questionText: 'Berdasarkan prinsip kerja teropong panggung (Galileo) di atas, pilihlah SEMUA pernyataan fisika berikut yang BENAR! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Perbesaran sudut teropong panggung saat mata tidak berakomodasi adalah 6 kali.' },
      { id: 'B', text: 'Panjang tabung teropong panggung adalah 25 cm (lebih pendek daripada jarak fokus objektifnya).' },
      { id: 'C', text: 'Bayangan akhir yang dilihat penonton bersifat maya dan tegak terhadap aktor di panggung.' },
      { id: 'D', text: 'Panjang tabung teropong panggung dihitung dengan menjumlahkan kedua fokus sehingga bernilai 35 cm.' },
      { id: 'E', text: 'Okuler lensa cekung berfungsi membiaskan berkas sinar konvergen dari objektif menjadi berkas sinar sejajar.' }
    ],
    correctOptions: ['A', 'B', 'C', 'E'],
    discussion: {
      known: [
        'Jarak fokus objektif (f_ob) = +30 cm (lensa cembung)',
        'Jarak fokus okuler (f_ok) = -5 cm (lensa cekung, divergen)',
        'Kondisi: mata tanpa akomodasi'
      ],
      asked: 'Evaluasi kebenaran M, d, sifat bayangan, dan mekanisme optik teropong Galileo',
      physicsConcept: 'Teropong panggung (Galileo) menggunakan lensa objektif cembung dan okuler cekung. Sinar sejajar dari objek jauh difokuskan menuju titik fokus objektif f_ob. Namun sebelum sinar berpotongan membentuk bayangan nyata, berkas tersebut dicegat oleh lensa cekung yang diletakkan pada jarak |f_ok| di depan fokus objektif tersebut. Karena lensa okuler bersifat divergen, berkas konvergen dibiaskan kembali menjadi berkas sejajar menuju mata rileks, menghasilkan bayangan akhir yang maya, tegak, dan diperbesar.',
      solutionSteps: [
        'Langkah 1: Perbesaran sudut (M):',
        'M = f_ob / |f_ok| = 30 / |-5| = 30 / 5 = 6 kali (Pernyataan A BENAR)',
        'Langkah 2: Panjang tabung teropong (d):',
        'Karena okuler diletakkan sebelum fokus objektif, d = f_ob + f_ok (dengan f_ok negatif)',
        'd = f_ob - |f_ok| = 30 cm - 5 cm = 25 cm (Pernyataan B BENAR, Pernyataan D SALAH)',
        'Langkah 3: Sifat bayangan akhir:',
        'Lensa cekung membiaskan berkas sinar sehingga bayangan akhir tetap tegak terhadap objek asli, maya, dan diperbesar. (Pernyataan C BENAR)',
        'Langkah 4: Peran okuler cekung:',
        'Okuler mengubah berkas yang semula mengumpul (konvergen) menjadi berkas sejajar yang nyaman ditangkap mata rileks. (Pernyataan E BENAR)'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: M = 30 / 5 = 6 kali.',
        'Opsi B BENAR: d = 30 - 5 = 25 cm (sangat kompak dan ringkas).',
        'Opsi C BENAR: Menghasilkan bayangan tegak tanpa membutuhkan lensa pembalik.',
        'Opsi D SALAH: Menjumlahkan 30 + 5 = 35 cm adalah kesalahan fatal yang mengabaikan tanda negatif lensa cekung.',
        'Opsi E BENAR: Prinsip kerja pembiasan lensa divergen pada berkas konvergen.'
      ],
      conclusion: 'Pernyataan yang tepat adalah A, B, C, dan E.'
    },
    quickTrick: {
      title: 'Trik Cepat Teropong Galileo Mister Jo',
      formulaOrMethod: 'd = f_ob - |f_ok|; M = f_ob / |f_ok|',
      explanation: 'Ingat kuncinya: "Galileo itu dikurang!". Tabungnya selalu selisih fokus objektif dan okuler: d = 30 - 5 = 25 cm, perbesaran 30 / 5 = 6×.',
      limitation: 'Hanya berlaku untuk teropong panggung dengan okuler lensa cekung dan mata tanpa akomodasi.'
    },
    keyTakeaway: {
      coreConcept: 'Teropong Galileo mencapai sifat bayangan tegak dengan menggunakan lensa divergen sebagai okuler, sehingga panjang tabungnya lebih pendek daripada jarak fokus lensa objektifnya sendiri!',
      commonPitfall: 'Menghitung panjang tabung dengan tanda tambah (d = f_ob + f_ok) sehingga menghasilkan 35 cm.',
      quote: 'Kecerdasan desain Galileo: memperpendek tabung sekaligus menegakkan pandangan!'
    },
    animationConfig: {
      type: 'teropong-panggung',
      fob: 30,
      fok: -5,
      isAccommodating: false,
      description: 'Animasi teropong Galileo memperlihatkan berkas konvergen dari objektif dicegat oleh okuler cekung sehingga berkas keluar sejajar dan menghasilkan bayangan tegak diperbesar.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita perhatikan soal nomor delapan tipe pilihan ganda kompleks tentang teropong panggung atau teropong Galileo. Teropong ini menggunakan objektif cembung 30 sentimeter dan okuler cekung minus 5 sentimeter.',
      question: 'Pilihlah semua pernyataan fisika yang benar mengenai karakteristik teropong panggung tersebut.',
      options: 'Opsi A, perbesaran sudut 6 kali. Opsi B, panjang tabung 25 sentimeter. Opsi C, bayangan akhir bersifat maya dan tegak. Opsi D, panjang tabung bernilai 35 sentimeter. Opsi E, okuler cekung membiaskan berkas konvergen menjadi sejajar.',
      clue: 'Bimbingan Mister Jo: Hati-hati! Karena okuler adalah lensa cekung, fokus okulernya bernilai negatif. Panjang tabungnya bukan ditambah, melainkan dikurangkan!',
      normalDiscussion: 'Mari kita buktikan. Perbesaran sudut adalah f objektif dibagi harga mutlak f okuler, yaitu 30 dibagi 5 sama dengan 6 kali. Panjang tabung d adalah f objektif dikurang harga mutlak f okuler, yaitu 30 dikurang 5 sama dengan 25 sentimeter. Karena menggunakan okuler cekung, bayangan akhir langsung tegak tanpa perlu lensa pembalik. Berkas konvergen dibiaskan menjadi sejajar untuk mata rileks. Opsi D salah karena menjumlahkan 30 ditambah 5.',
      quickTrick: 'Cara cepat Mister Jo: Ingat kata kunci "Galileo dikurang". d sama dengan 30 dikurang 5 sama dengan 25 sentimeter. M sama dengan 30 dibagi 5 sama dengan 6 kali.',
      conclusion: 'Opsi yang benar adalah A, B, C, dan E.'
    }
  },

  // SOAL 9: BS - Analisis Koreksi Kacamata dan Pergeseran Titik Pandang (Sulit)
  {
    id: 9,
    type: 'bs',
    difficulty: 'Sulit',
    topic: 'Cacat Mata (Miopi & Hipermetropi)',
    topicGroup: 'Miopi',
    competency: 'Menganalisis dampak pemakaian kacamata terhadap titik dekat dan titik jauh pemakai',
    stimulus: {
      title: 'Uji Tukar Kacamata Dua Sahabat',
      context: 'Dua orang sahabat, Budi dan Andi, sama-sama memiliki gangguan penglihatan. Budi adalah penderita miopi dengan titik jauh PR = 100 cm dan titik dekat PP = 20 cm. Andi adalah penderita hipermetropi dengan titik dekat PP = 50 cm dan titik jauh tak hingga. Suatu hari, Budi mencoba kacamata Andi, dan sebaliknya Andi mencoba kacamata Budi.',
      table: {
        headers: ['Nama', 'Jenis Gangguan', 'Titik Dekat (PP)', 'Titik Jauh (PR)', 'Kacamata yang Digunakan Seharusnya'],
        rows: [
          ['Budi', 'Miopi', '20 cm', '100 cm', 'Lensa Cekung (P_Budi)'],
          ['Andi', 'Hipermetropi', '50 cm', 'Tak hingga (∞)', 'Lensa Cembung (P_Andi)']
        ]
      },
      diagramDescription: 'Perbandingan pembiasan berkas cahaya saat penderita miopi memakai lensa cembung dan penderita hipermetropi memakai lensa cekung.'
    },
    misterJoClue: 'Halo sobat analis! Hitung dulu kekuatan kacamata Budi P_Budi = -100/PR = -1,0 D dan kacamata Andi P_Andi = 4 - 100/PP = +2,0 D. Kemudian hitung apa yang terjadi jika salah satu dari mereka memakai kacamata milik temannya menggunakan rumus 1/f = 1/s + 1/s\'!',
    questionText: 'Tentukan apakah masing-masing pernyataan berikut BENAR (B) atau SALAH (S) berdasarkan konsep fisika optik kacamata!',
    statements: [
      {
        id: 1,
        statement: 'Kacamata yang seharusnya digunakan oleh Budi adalah lensa cekung berdaya -1,00 Dioptri.',
        isCorrect: true
      },
      {
        id: 2,
        statement: 'Ketika Budi memakai kacamata Andi (+2,00 Dioptri), titik jauh penglihatan Budi justru bertambah jauh melebihi 100 cm.',
        isCorrect: false
      },
      {
        id: 3,
        statement: 'Ketika Budi memakai kacamata miliknya sendiri (-1,00 Dioptri), titik dekat penglihatannya yang semula 20 cm bergeser menjauh menjadi 25 cm.',
        isCorrect: true
      }
    ],
    discussion: {
      known: [
        'Budi (Miopi): PR_B = 100 cm = 1 m; PP_B = 20 cm',
        'Andi (Hipermetropi): PP_A = 50 cm; PR_A = ∞',
        'Jarak baca standar Sn = 25 cm'
      ],
      asked: 'Evaluasi kebenaran daya kacamata Budi, dampak pemakaian kacamata positif oleh Budi, dan pergeseran titik dekat Budi saat memakai kacamata minus',
      physicsConcept: '1. Kacamata miopi: P = -100 / PR = -100 / 100 = -1,00 D.\n2. Jika penderita miopi memakai lensa cembung (+), daya bias matanya semakin kuat sehingga titik jauhnya justru semakin mendekat, bukan menjauh!\n3. Saat penderita miopi memakai kacamata minus, lensa tersebut menyebarkan sinar sehingga titik dekatnya ikut bergeser menjauh: 1/f = 1/s_baru + 1/(-PP_asli).',
      solutionSteps: [
        'Analisis Pernyataan 1: Kacamata Budi P_Budi = -100 / PR = -100 / 100 = -1,00 Dioptri. Maka Pernyataan 1 BENAR.',
        'Analisis Pernyataan 2: Kacamata Andi berdaya P_Andi = 100/25 - 100/50 = +2,00 D (f = +50 cm). Jika dipakai Budi, batas terjauh yang dapat dilihat dengan jelas (s) dihitung saat bayangannya berada di titik jauh Budi (s\' = -PR = -100 cm): 1/s = 1/f - 1/s\' = 1/50 - 1/(-100) = 2/100 + 1/100 = 3/100 ⇒ s = 100/3 ≈ 33,3 cm. Artinya, Budi hanya bisa melihat paling jauh 33,3 cm (bukan bertambah jauh melebihi 100 cm). Maka Pernyataan 2 SALAH.',
        'Analisis Pernyataan 3: Budi memakai kacamata -1,00 D (f = -100 cm). Titik dekat baru (s) saat bayangan berada di titik dekat aslinya (s\' = -PP = -20 cm): 1/s = 1/f - 1/s\' = 1/(-100) - 1/(-20) = -1/100 + 5/100 = 4/100 ⇒ s = 100/4 = 25 cm. Titik dekatnya bergeser dari 20 cm menjadi 25 cm. Maka Pernyataan 3 BENAR.'
      ],
      optionsAnalysis: [
        'Pernyataan 1: BENAR (P = -100/100 = -1,00 D).',
        'Pernyataan 2: SALAH (Titik jauh menyusut drastis menjadi 33,3 cm akibat daya konvergen lensa cembung).',
        'Pernyataan 3: BENAR (1/s = -1/100 + 1/20 = 4/100 ⇒ s = 25 cm).'
      ],
      conclusion: 'Hasil evaluasi adalah BENAR - SALAH - BENAR.'
    },
    quickTrick: {
      title: 'Trik Cepat Efek Kacamata Mister Jo',
      formulaOrMethod: '1/s_baru = 1/f + 1/PP_asli',
      explanation: 'Untuk Pernyataan 3: 1/s = -1/100 + 1/20 = 4/100 ⇒ s = 25 cm. Kacamata minus selalu "mendorong" titik dekat menjauh!',
      limitation: 'Gunakan tanda f negatif untuk lensa cekung.'
    },
    keyTakeaway: {
      coreConcept: 'Kacamata minus menolong melihat jauh dengan konsekuensi titik dekat ikut bergeser menjauh. Kacamata plus membuat penglihatan jauh semakin rabun.',
      commonPitfall: 'Mengira kacamata minus hanya berpengaruh pada titik jauh tanpa mengubah jarak pandang dekat.',
      quote: 'Fisika membuka mata kita bahwa setiap pilihan optik memiliki konsekuensi matematis yang pasti!'
    },
    animationConfig: {
      type: 'mata-miopi',
      focalLength: -100,
      pr: 100,
      sn: 20,
      description: 'Animasi memperlihatkan pergeseran titik pandang dekat dan jauh saat lensa negatif dipasang di depan mata miopi.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita simak stimulus soal nomor sembilan tipe Benar atau Salah. Budi menderita miopi dengan titik jauh 100 sentimeter dan titik dekat 20 sentimeter. Andi menderita hipermetropi dengan titik dekat 50 sentimeter.',
      question: 'Tentukan apakah masing-masing pernyataan berikut Benar atau Salah.',
      options: 'Pernyataan satu, kacamata Budi berdaya minus 1 Dioptri. Pernyataan dua, saat Budi memakai kacamata Andi plus 2 Dioptri titik jauhnya bertambah melebihi 100 sentimeter. Pernyataan tiga, kacamata minus 1 Dioptri menggeser titik dekat Budi dari 20 sentimeter menjadi 25 sentimeter.',
      clue: 'Bimbingan Mister Jo: Hitung dulu daya kacamata masing-masing. Ingat bahwa lensa cembung justru mengumpulkan cahaya sehingga titik pandang jauh penderita miopi semakin dekat!',
      normalDiscussion: 'Mari kita analisis. Pernyataan satu benar karena daya lensa Budi adalah minus 100 dibagi 100 sama dengan minus 1 Dioptri. Pernyataan dua salah karena saat memakai kacamata plus 2 Dioptri, titik jauh Budi justru menyusut menjadi 33,3 sentimeter. Pernyataan tiga benar karena dengan kacamata minus 1 Dioptri, satu per s sama dengan minus satu per 100 ditambah satu per 20, menghasilkan s sama dengan 25 sentimeter.',
      quickTrick: 'Cara cepat Mister Jo: Lensa minus selalu mendorong titik dekat menjauh. Minus 1 ditambah 5 sama dengan 4 Dioptri, 100 dibagi 4 adalah 25 sentimeter!',
      conclusion: 'Urutan yang benar adalah Benar, Salah, Benar.'
    }
  },

  // SOAL 10: PG - Lup untuk Pengamat Hipermetropi (Sulit)
  {
    id: 10,
    type: 'pg',
    difficulty: 'Sulit',
    topic: 'Lup',
    topicGroup: 'Lup',
    competency: 'Menganalisis perbesaran lup ketika digunakan oleh pengamat cacat mata hipermetropi',
    stimulus: {
      title: 'Pengamatan Batu Permata oleh Ahli Geologi Hipermetropi',
      context: 'Pak Danu, seorang ahli geologi yang memiliki cacat mata hipermetropi dengan titik dekat PP = 40 cm, sedang mengamati struktur kristal pada batu permata. Ia menggunakan sebuah lup yang memiliki jarak fokus f = 8 cm. Pak Danu mengamati batu permata tersebut dengan mata berakomodasi maksimum agar dapat melihat detail terkecil.',
      table: {
        headers: ['Kondisi Pengamat', 'Titik Dekat (PP)', 'Fokus Lup (f)', 'Syarat Akomodasi Maksimum'],
        rows: [
          ['Pengamat Normal', 'Sn = 25 cm', '8 cm', 'Bayangan di s\' = -25 cm'],
          ['Pak Danu (Hipermetropi)', 'PP = 40 cm', '8 cm', 'Bayangan di s\' = -40 cm']
        ]
      },
      diagramDescription: 'Diagram pembentukan bayangan maya oleh lup pada jarak 40 cm di depan mata hipermetropi.'
    },
    misterJoClue: 'Halo pembelajar hebat! Perhatikan bahwa pengamat BUKAN orang bermata normal, melainkan penderita hipermetropi dengan PP = 40 cm. Pada akomodasi maksimum, bayangan lup harus terbentuk tepat di titik dekat matanya (s\' = -PP = -40 cm). Perbesaran sudut dihitung dengan rasio sudut bayangan terhadap sudut benda tanpa lup M = (PP/s)!',
    questionText: 'Berdasarkan kondisi tersebut, perbesaran sudut lup (M) yang dialami Pak Danu dan letak batu permata di depan lup (s) adalah...',
    options: [
      { id: 'A', text: 'Perbesaran 6 kali dan jarak batu permata 6,67 cm di depan lup' },
      { id: 'B', text: 'Perbesaran 5 kali dan jarak batu permata 8,00 cm di depan lup' },
      { id: 'C', text: 'Perbesaran 4,125 kali dan jarak batu permata 6,00 cm di depan lup' },
      { id: 'D', text: 'Perbesaran 6 kali dan jarak batu permata 8,00 cm di depan lup' },
      { id: 'E', text: 'Perbesaran 5 kali dan jarak batu permata 6,67 cm di depan lup' }
    ],
    correctOption: 'A',
    discussion: {
      known: [
        'Titik dekat Pak Danu (PP) = 40 cm',
        'Jarak fokus lup (f) = 8 cm',
        'Kondisi: mata berakomodasi maksimum (s\' = -PP = -40 cm)'
      ],
      asked: 'Perbesaran sudut lup (M) dan posisi benda (s)',
      physicsConcept: 'Untuk pengamat dengan titik dekat tertentu (PP), definisi perbesaran sudut lup pada mata berakomodasi maksimum diturunkan dari perbandingan ukuran sudut dengan alat optik terhadap tanpa alat optik pada jarak baca terdekatnya: M = (PP / f) + 1. Posisi benda dicari dengan persamaan lensa tipis: 1/s = 1/f - 1/s\'.',
      solutionSteps: [
        'Langkah 1: Hitung perbesaran sudut (M):',
        'M = (PP / f) + 1 = (40 / 8) + 1 = 5 + 1 = 6 kali',
        'Langkah 2: Hitung letak batu permata (s):',
        '1/s = 1/f - 1/s\'',
        'Karena bayangan maya berada di titik dekat Pak Danu, s\' = -40 cm:',
        '1/s = 1/8 - 1/(-40) = 1/8 + 1/40 = 5/40 + 1/40 = 6/40 cm⁻¹',
        's = 40 / 6 = 20 / 3 ≈ 6,67 cm di depan lup.'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: M = 6 kali dan s = 6,67 cm (20/3 cm).',
        'Opsi B SALAH: s = 8 cm adalah posisi untuk mata tidak berakomodasi.',
        'Opsi C SALAH: Menggunakan Sn normal 25 cm (25/8 + 1 = 4,125 kali).',
        'Opsi D SALAH: Nilai s keliru.',
        'Opsi E SALAH: 5 kali adalah perbesaran untuk mata tanpa akomodasi (40/8 = 5).'
      ],
      conclusion: 'Perbesaran sudut yang diperoleh Pak Danu adalah 6 kali dan batu permata diletakkan pada jarak 6,67 cm di depan lup.'
    },
    quickTrick: {
      title: 'Trik Cepat Lup Cacat Mata Mister Jo',
      formulaOrMethod: 'M = (PP / f) + 1; s = (f · PP) / (f + PP)',
      explanation: 'M = (40 / 8) + 1 = 5 + 1 = 6 kali. s = (8 × 40) / (8 + 40) = 320 / 48 = 20 / 3 ≈ 6,67 cm. Selesai seketika!',
      limitation: 'Gunakan PP penderita saat pengamat bukan bermata normal.'
    },
    keyTakeaway: {
      coreConcept: 'Rumus perbesaran lup M = Sn/f + 1 sejatinya menggunakan titik dekat pengamat itu sendiri. Bagi penderita hipermetropi (PP > 25 cm), perbesaran yang dirasakan justru lebih besar daripada orang normal!',
      commonPitfall: 'Memaksakan menggunakan angka 25 cm padahal pengamat memiliki titik dekat 40 cm.',
      quote: 'Konsep fisika yang sejati berpijak pada kondisi pengamat nyata, bukan hafalan angka semata!'
    },
    animationConfig: {
      type: 'lup',
      focalLength: 8,
      objectDistance: 6.67,
      sn: 40,
      isAccommodating: true,
      description: 'Animasi lup dengan titik dekat pengamat 40 cm: benda di 6,67 cm membentuk bayangan maya di titik dekat 40 cm dengan perbesaran 6 kali.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita perhatikan soal nomor sepuluh. Pak Danu seorang ahli geologi hipermetropi dengan titik dekat 40 sentimeter mengamati batu permata dengan lup berfokus 8 sentimeter pada akomodasi maksimum.',
      question: 'Berapakah perbesaran sudut lup dan jarak peletakan batu permata di depan lup?',
      options: 'Pilihan A, perbesaran 6 kali dan jarak 6,67 sentimeter. Pilihan B, 5 kali dan 8 sentimeter. Pilihan C, 4,125 kali dan 6 sentimeter. Pilihan D, 6 kali dan 8 sentimeter. Pilihan E, 5 kali dan 6,67 sentimeter.',
      clue: 'Petunjuk Mister Jo: Ingat karena Pak Danu hipermetropi, ganti Sn dengan titik dekatnya yaitu 40 sentimeter. Gunakan M sama dengan PP per f ditambah satu, lalu cari s dari rumus lensa.',
      normalDiscussion: 'Mari kita hitung. Perbesaran sudut M adalah titik dekat 40 dibagi fokus 8 ditambah satu, yaitu 5 ditambah satu sama dengan 6 kali. Untuk mencari jarak benda, satu per s sama dengan satu per 8 ditambah satu per 40, yaitu 6 per 40. Maka s adalah 40 dibagi 6 sama dengan 6,67 sentimeter.',
      quickTrick: 'Cara cepat Mister Jo: M sama dengan 40 dibagi 8 ditambah satu sama dengan 6 kali. Jarak s adalah 8 dikali 40 dibagi 48 sama dengan 20 per 3 atau 6,67 sentimeter!',
      conclusion: 'Jawaban yang tepat adalah opsi A.'
    }
  }
];
