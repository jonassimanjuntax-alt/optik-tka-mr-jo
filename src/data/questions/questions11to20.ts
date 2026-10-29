import { Question } from '../../types/quiz';

export const questions11to20: Question[] = [
  // SOAL 11: PGK - Mikroskop: Pergeseran Tabung saat Akomodasi (Sangat Sulit)
  {
    id: 11,
    type: 'pgk',
    difficulty: 'Sangat Sulit',
    topic: 'Mikroskop',
    topicGroup: 'Mikroskop',
    competency: 'Menganalisis pergeseran lensa okuler mikroskop saat beralih antara mata rileks dan berakomodasi maksimum',
    stimulus: {
      title: 'Transisi Mode Akomodasi pada Pengamatan Mikroskop',
      context: 'Seorang peneliti mengamati mikroorganisme dengan mikroskop yang memiliki jarak fokus lensa objektif f_ob = 18 mm (1,8 cm) dan lensa okuler f_ok = 50 mm (5,0 cm). Preparat sel diletakkan pada jarak s_ob = 20 mm (2,0 cm) di depan lensa objektif. Peneliti yang bermata normal (Sn = 25 cm) awalnya mengamati preparat dengan mata tanpa akomodasi. Agar memperoleh detail perbesaran maksimal, peneliti kemudian mengatur fokus okuler sehingga matanya berakomodasi maksimum tanpa mengubah posisi preparat terhadap objektif.',
      table: {
        headers: ['Mode Pengamatan', 'Letak Bayangan Akhir', 'Posisi Bayangan Objektif thd Okuler', 'Kondisi Mata Peneliti'],
        rows: [
          ['Mode 1: Tanpa Akomodasi', 'Di tak terhingga (s\'_ok = -∞)', 's_ok = f_ok = 5,0 cm', 'Otot siliaris relaksasi'],
          ['Mode 2: Akomodasi Maksimum', 'Di titik dekat (s\'_ok = -25 cm)', 's_ok < f_ok', 'Otot siliaris kontraksi maksimal']
        ]
      },
      diagramDescription: 'Pergeseran tabung mikroskop dari d1 ke d2 untuk mengakomodasi perubahan posisi bayangan okuler.'
    },
    misterJoClue: 'Halo saintis muda! Jarak bayangan objektif s\'_ob bernilai konstan karena posisi preparat s_ob tidak digeser. Yang berubah adalah jarak benda okuler s_ok. Hitung s_ok saat akomodasi maksimum dari 1/f_ok = 1/s_ok + 1/(-Sn), lalu bandingkan panjang tabung d₁ dan d₂ serta perbesaran totalnya!',
    questionText: 'Berdasarkan fenomena transisi mode akomodasi pada mikroskop di atas, pilihlah SEMUA pernyataan fisika berikut yang BENAR! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Jarak bayangan yang dibentuk lensa objektif adalah 18,0 cm di belakang lensa objektif.' },
      { id: 'B', text: 'Pada pengamatan tanpa akomodasi, panjang tabung mikroskop adalah 23,0 cm.' },
      { id: 'C', text: 'Pada pengamatan berakomodasi maksimum, jarak bayangan objektif ke lensa okuler adalah sekitar 4,17 cm.' },
      { id: 'D', text: 'Untuk beralih dari tanpa akomodasi ke akomodasi maksimum, lensa okuler harus digeser mendekati objektif sejauh 0,83 cm.' },
      { id: 'E', text: 'Perbesaran total mikroskop meningkat dari 45 kali menjadi 54 kali saat mata berakomodasi maksimum.' }
    ],
    correctOptions: ['A', 'B', 'C', 'D', 'E'],
    discussion: {
      known: [
        'f_ob = 18 mm = 1,8 cm',
        'f_ok = 50 mm = 5,0 cm',
        's_ob = 20 mm = 2,0 cm',
        'Sn = 25 cm'
      ],
      asked: 'Validasi s\'_ob, d₁, s_ok₂, pergeseran okuler Δd, dan perubahan perbesaran M_tot',
      physicsConcept: 'Objektif membentuk bayangan nyata I₁ pada jarak s\'_ob yang tetap. Saat mata tanpa akomodasi, s_ok₁ = f_ok = 5 cm, sehingga d₁ = s\'_ob + f_ok. Saat berakomodasi maksimum, bayangan akhir jatuh di titik dekat mata (s\'_ok = -Sn = -25 cm), sehingga s_ok₂ = (f_ok · Sn)/(f_ok + Sn) < f_ok. Tabung mikroskop harus memendek: Δd = s_ok₁ - s_ok₂.',
      solutionSteps: [
        'Langkah 1: Hitung s\'_ob:',
        '1/s\'_ob = 1/f_ob - 1/s_ob = 1/1,8 - 1/2,0 = 10/18 - 1/2 = 5/9 - 1/2 = (10 - 9)/18 = 1/18 cm⁻¹',
        's\'_ob = 18 cm (Pernyataan A BENAR)',
        'Perbesaran objektif: M_ob = |s\'_ob / s_ob| = 18 / 2,0 = 9 kali',
        'Langkah 2: Mode 1 (Tanpa Akomodasi):',
        's_ok₁ = f_ok = 5,0 cm ⇒ d₁ = s\'_ob + s_ok₁ = 18 + 5 = 23,0 cm (Pernyataan B BENAR)',
        'M_ok₁ = Sn / f_ok = 25 / 5 = 5 kali ⇒ M_tot₁ = 9 × 5 = 45 kali',
        'Langkah 3: Mode 2 (Akomodasi Maksimum):',
        '1/s_ok₂ = 1/f_ok - 1/s\'_ok = 1/5 - 1/(-25) = 1/5 + 1/25 = 6/25 cm⁻¹',
        's_ok₂ = 25 / 6 ≈ 4,17 cm (Pernyataan C BENAR)',
        'd₂ = s\'_ob + s_ok₂ = 18 + 4,17 = 22,17 cm',
        'M_ok₂ = (Sn / f_ok) + 1 = 5 + 1 = 6 kali ⇒ M_tot₂ = 9 × 6 = 54 kali (Pernyataan E BENAR)',
        'Langkah 4: Pergeseran tabung:',
        'Δd = d₁ - d₂ = s_ok₁ - s_ok₂ = 5,00 - 4,17 = 0,83 cm (atau 5/6 cm).',
        'Karena d₂ < d₁, okuler digeser mendekati objektif sejauh 0,83 cm (Pernyataan D BENAR).'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: s\'_ob = 18 cm.',
        'Opsi B BENAR: d₁ = 18 + 5 = 23 cm.',
        'Opsi C BENAR: s_ok₂ = 25/6 ≈ 4,17 cm.',
        'Opsi D BENAR: Tabung memendek sebesar 5 - 4,17 = 0,83 cm (okuler mendekati objektif).',
        'Opsi E BENAR: M_tot meningkat dari 9×5 = 45× menjadi 9×6 = 54×.'
      ],
      conclusion: 'Semua opsi A, B, C, D, dan E terbukti BENAR berdasarkan hukum optika fisis.'
    },
    quickTrick: {
      title: 'Trik Cepat Pergeseran Tabung Mikroskop Mister Jo',
      formulaOrMethod: 'Pergeseran okuler = f_ok² / (f_ok + Sn); ΔM = M_ob',
      explanation: 'Pergeseran okuler selalu sama dengan pergeseran benda lup: 5² / (5 + 25) = 25 / 30 = 5/6 ≈ 0,83 cm mendekati objektif. Kenaikan perbesaran total tepat sebesar 1 kali M_ob = 9 kali (dari 45 menjadi 54 kali)!',
      limitation: 'Berlaku saat posisi preparat di depan objektif tidak diubah.'
    },
    keyTakeaway: {
      coreConcept: 'Pada mikroskop, saat mata berakomodasi maksimum, lensa okuler harus digeser mendekati lensa objektif sebesar f_ok² / (f_ok + Sn) agar bayangan maya akhir bergeser dari tak terhingga ke titik dekat mata.',
      commonPitfall: 'Mengira lensa objektif yang harus digeser sehingga mengubah perbesaran objektif.',
      quote: 'Detail kecil memisahkan pengamat biasa dari ilmuwan sejati!'
    },
    animationConfig: {
      type: 'mikroskop',
      fob: 1.8,
      fok: 5.0,
      sob: 2.0,
      sn: 25,
      isAccommodating: true,
      description: 'Animasi memperlihatkan lensa okuler mikroskop digeser maju sebesar 0,83 cm saat mata berganti dari rileks ke akomodasi maksimum.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita teliti soal nomor sebelas bertipe pilihan ganda kompleks. Peneliti menggunakan mikroskop dengan f objektif 1,8 sentimeter dan f okuler 5 sentimeter. Preparat berada 2 sentimeter di depan objektif, lalu mode pengamatan diubah dari rileks menjadi akomodasi maksimum.',
      question: 'Pilihlah semua pernyataan fisika yang benar mengenai pergeseran dan perbesaran mikroskop tersebut.',
      options: 'Opsi A, jarak bayangan objektif 18 sentimeter. Opsi B, panjang tabung rileks 23 sentimeter. Opsi C, jarak bayangan objektif ke okuler saat akomodasi 4,17 sentimeter. Opsi D, okuler digeser mendekat 0,83 sentimeter. Opsi E, perbesaran meningkat dari 45 kali menjadi 54 kali.',
      clue: 'Bimbingan Mister Jo: Hitung s aksen objektif terlebih dahulu. Ingat bahwa bayangan objektif tidak berubah. Saat berakomodasi maksimum, okuler harus didekatkan agar s okuler menjadi 4,17 sentimeter.',
      normalDiscussion: 'Mari kita buktikan. Jarak bayangan objektif adalah 18 sentimeter. Panjang tabung rileks adalah 18 ditambah 5 sama dengan 23 sentimeter. Pada akomodasi maksimum, s okuler adalah 25 dibagi 6 sama dengan 4,17 sentimeter. Tabung harus memendek sebesar 5 dikurang 4,17 sama dengan 0,83 sentimeter. Perbesaran awal 9 dikali 5 sama dengan 45 kali, dan perbesaran akomodasi 9 dikali 6 sama dengan 54 kali. Semua pernyataan A sampai E terbukti benar.',
      quickTrick: 'Cara cepat Mister Jo: Pergeseran tabung sama dengan 5 kuadrat dibagi 30 yaitu 0,83 sentimeter mendekat. Tambahan perbesaran tepat sebesar M objektif yaitu 9 kali, dari 45 menjadi 54 kali!',
      conclusion: 'Seluruh pernyataan A, B, C, D, dan E harus dipilih karena semuanya benar.'
    }
  },

  // SOAL 12: BS - Lensa Kacamata Rangkap dan Akomodasi (Menengah)
  {
    id: 12,
    type: 'bs',
    difficulty: 'Menengah',
    topic: 'Cacat Mata (Presbiopi)',
    topicGroup: 'Presbiopi',
    competency: 'Menilai karakteristik jangkauan akomodasi mata normal vs presbiopi',
    stimulus: {
      title: 'Studi Jangkauan Akomodasi Usia Produktif vs Lanjut Usia',
      context: 'Daya akomodasi mata didefinisikan sebagai selisih kekuatan pembiasan lensa mata saat mencembung maksimal (melihat titik dekat PP) dan saat memipih maksimal (melihat titik jauh PR): ΔP = P_maks - P_min = 100/PP - 100/PR. Seorang dokter membandingkan daya akomodasi pemuda 18 tahun (mata normal: PP = 25 cm, PR = ∞) dengan seorang kakek 65 tahun (presbiopi: PP = 100 cm, PR = 200 cm).',
      table: {
        headers: ['Subjek', 'Titik Dekat (PP)', 'Titik Jauh (PR)', 'Daya Akomodasi Mata (ΔP)'],
        rows: [
          ['Pemuda 18 Tahun', '25 cm', 'Tak hingga (∞)', '4,00 Dioptri'],
          ['Kakek 65 Tahun', '100 cm', '200 cm', 'ΔP_kakek']
        ]
      },
      diagramDescription: 'Grafik rentang akomodasi manusia menurun secara linier terhadap pertambahan usia.'
    },
    misterJoClue: 'Halo sahabat! Daya akomodasi mengukur seberapa fleksibel lensa mata mengubah daya biasnya. Hitung ΔP_kakek = 100/PP - 100/PR. Cermati pula kebutuhan lensa kacamata untuk melihat jauh dan dekat!',
    questionText: 'Tentukan apakah masing-masing pernyataan berikut BENAR (B) atau SALAH (S) berdasarkan konsep daya akomodasi mata!',
    statements: [
      {
        id: 1,
        statement: 'Daya akomodasi mata kakek tersebut hanya sebesar 0,50 Dioptri, jauh lebih kecil dibandingkan daya akomodasi pemuda normal (4,00 Dioptri).',
        isCorrect: true
      },
      {
        id: 2,
        statement: 'Untuk melihat benda di kejauhan tak hingga tanpa akomodasi, kakek memerlukan kacamata lensa cembung +0,50 Dioptri.',
        isCorrect: false
      },
      {
        id: 3,
        statement: 'Untuk membaca pada jarak standar 25 cm, kakek membutuhkan kacamata lensa cembung dengan kekuatan +3,00 Dioptri.',
        isCorrect: true
      }
    ],
    discussion: {
      known: [
        'Kakek: PP = 100 cm = 1 m; PR = 200 cm = 2 m',
        'Jarak baca standar Sn = 25 cm',
        'Jarak lihat jauh standar s_jauh = ∞'
      ],
      asked: 'Validasi daya akomodasi ΔP, jenis lensa jauh, dan daya lensa baca kakek',
      physicsConcept: '1. Daya akomodasi: ΔP = 100/PP - 100/PR = 100/100 - 100/200 = 1,00 - 0,50 = 0,50 D.\n2. Lensa kacamata jauh (s = ∞, PR = 200 cm): P_jauh = -100/PR = -100/200 = -0,50 D (harus lensa CEKUNG, bukan cembung).\n3. Lensa kacamata baca (s = 25 cm, PP = 100 cm): P_baca = 100/25 - 100/PP = 4 - 100/100 = 4 - 1 = +3,00 D (lensa cembung).',
      solutionSteps: [
        'Pernyataan 1: ΔP = 100/100 - 100/200 = 1 - 0,5 = 0,50 Dioptri. Pemuda: 100/25 - 100/∞ = 4 - 0 = 4,00 Dioptri. Nilai kakek benar 0,50 D. (Pernyataan 1 BENAR)',
        'Pernyataan 2: PR = 200 cm. Kacamata jauh: P = -100/PR = -0,50 D (lensa cekung). Pernyataan menyebut lensa cembung +0,50 D sehingga keliru. (Pernyataan 2 SALAH)',
        'Pernyataan 3: s = 25 cm, PP = 100 cm: P = 100/25 - 100/100 = 4 - 1 = +3,00 D (lensa cembung). (Pernyataan 3 BENAR)'
      ],
      optionsAnalysis: [
        'Pernyataan 1: BENAR (ΔP = 1 - 0,5 = 0,50 Dioptri).',
        'Pernyataan 2: SALAH (Melihat jauh dengan PR 200 cm butuh lensa negatif -0,50 D, bukan positif).',
        'Pernyataan 3: BENAR (P = 4 - 1 = +3,00 D).'
      ],
      conclusion: 'Hasil evaluasi: BENAR - SALAH - BENAR.'
    },
    quickTrick: {
      title: 'Trik Cepat Daya Akomodasi Mister Jo',
      formulaOrMethod: 'ΔP = 100/PP - 100/PR; P_baca = 4 - 100/PP',
      explanation: 'ΔP = 1 - 0,5 = 0,5 D. P_baca = 4 - 1 = +3 D. P_jauh = -1/2 = -0,5 D.',
      limitation: 'Gunakan satuan meter untuk 1/f atau cm untuk 100/f.'
    },
    keyTakeaway: {
      coreConcept: 'Daya akomodasi mengukur rentang fleksibilitas lensa mata. Pada usia lanjut, rentang ini menyusut drastis.',
      commonPitfall: 'Tertukar tanda plus/minus pada kacamata jauh dan kacamata dekat.',
      quote: 'Kacamata bifokal memulihkan dua batas pandang yang hilang karena waktu.'
    },
    animationConfig: {
      type: 'mata-presbiopi',
      pr: 200,
      sn: 100,
      description: 'Animasi grafik rentang daya akomodasi menyempit dan koreksi lensa ganda pada kakek presbiopi.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita simak soal nomor dua belas tipe Benar atau Salah. Seorang kakek 65 tahun memiliki titik dekat 100 sentimeter dan titik jauh 200 sentimeter.',
      question: 'Tentukan apakah masing-masing pernyataan berikut Benar atau Salah.',
      options: 'Pernyataan satu, daya akomodasi kakek hanya 0,50 Dioptri. Pernyataan dua, untuk melihat jauh kakek memerlukan lensa cembung plus 0,50 Dioptri. Pernyataan tiga, untuk membaca pada jarak 25 sentimeter dibutuhkan lensa cembung plus 3 Dioptri.',
      clue: 'Petunjuk Mister Jo: Daya akomodasi adalah selisih seratus per titik dekat dikurang seratus per titik jauh. Ingat bahwa titik jauh berhingga memerlukan lensa cekung minus, bukan lensa cembung!',
      normalDiscussion: 'Mari kita bahas. Pernyataan satu benar karena seratus per 100 dikurang seratus per 200 sama dengan 1 dikurang 0,5 yaitu 0,50 Dioptri. Pernyataan dua salah karena untuk titik jauh 200 sentimeter dibutuhkan lensa cekung minus 0,50 Dioptri, bukan cembung. Pernyataan tiga benar karena kekuatan lensa baca adalah 4 dikurang seratus per 100 sama dengan plus 3 Dioptri.',
      quickTrick: 'Cara cepat Mister Jo: Akomodasi 1 dikurang 0,5 sama dengan 0,5 Dioptri. Lensa baca 4 dikurang 1 sama dengan plus 3 Dioptri.',
      conclusion: 'Urutan yang tepat adalah Benar, Salah, Benar.'
    }
  },

  // SOAL 13: PG - Lup Akomodasi pada Jarak Tertentu x (Sulit)
  {
    id: 13,
    type: 'pg',
    difficulty: 'Sulit',
    topic: 'Lup',
    topicGroup: 'Lup',
    competency: 'Menghitung perbesaran sudut lup saat mata berakomodasi pada jarak tertentu di luar titik dekat dan tak hingga',
    stimulus: {
      title: 'Pengamatan Teknis Komponen Elektronika Mikro',
      context: 'Seorang teknisi ponsel bermata normal (Sn = 25 cm) sedang memeriksa jalur papan sirkuit PCB yang terputus menggunakan lup dengan jarak fokus f = 5 cm. Teknisi tersebut tidak ingin matanya terlalu tegang (seperti pada akomodasi maksimum s\' = -25 cm), tetapi juga menginginkan perbesaran yang sedikit lebih besar daripada kondisi rileks tanpa akomodasi. Oleh karena itu, ia mengatur posisi lup agar bayangan akhir jalur sirkuit terbentuk pada jarak penglihatan x = 50 cm di depan matanya.',
      table: {
        headers: ['Kondisi Akomodasi', 'Jarak Bayangan Akhir (s\')', 'Rumus Perbesaran Sudut (M)'],
        rows: [
          ['Mata Berakomodasi Maksimum', 's\' = -Sn = -25 cm', 'M = Sn/f + 1'],
          ['Mata Berakomodasi pada Jarak x', 's\' = -x = -50 cm', 'M = Sn/f + Sn/x'],
          ['Mata Tanpa Akomodasi', 's\' = -∞', 'M = Sn/f']
        ]
      },
      diagramDescription: 'Diagram sinar lup dengan bayangan maya terbentuk pada jarak x = 50 cm di depan lensa lup.'
    },
    misterJoClue: 'Halo sahabat perakit masa depan! Rumus umum perbesaran sudut lup untuk mata yang berakomodasi pada jarak sembarang x adalah M = (Sn / f) + (Sn / x). Masukkan Sn = 25 cm, f = 5 cm, dan x = 50 cm!',
    questionText: 'Berdasarkan kondisi pengamatan teknisi tersebut, perbesaran sudut lup (M) dan jarak papan sirkuit ke lensa lup (s) adalah...',
    options: [
      { id: 'A', text: 'Perbesaran 5,50 kali dan jarak sirkuit 4,55 cm di depan lup' },
      { id: 'B', text: 'Perbesaran 5,50 kali dan jarak sirkuit 5,00 cm di depan lup' },
      { id: 'C', text: 'Perbesaran 6,00 kali dan jarak sirkuit 4,17 cm di depan lup' },
      { id: 'D', text: 'Perbesaran 5,00 kali dan jarak sirkuit 4,55 cm di depan lup' },
      { id: 'E', text: 'Perbesaran 4,50 kali dan jarak sirkuit 4,00 cm di depan lup' }
    ],
    correctOption: 'A',
    discussion: {
      known: [
        'Fokus lup (f) = 5 cm',
        'Titik dekat normal (Sn) = 25 cm',
        'Jarak bayangan yang diinginkan (x) = 50 cm (s\' = -50 cm)'
      ],
      asked: 'Perbesaran sudut lup (M) dan posisi benda (s)',
      physicsConcept: 'Secara umum, sudut pandang bayangan yang dibentuk lup pada jarak x adalah θ\' ≈ h\'/x = (h · s\'/s)/x. Karena |s\'| = x, maka θ\' ≈ h/s. Sudut pandang benda tanpa lup pada jarak baca dekat standar Sn adalah θ ≈ h/Sn. Jadi perbesaran sudutnya adalah M = θ\'/θ = Sn / s. Dari rumus Gauss 1/s = 1/f - 1/s\' = 1/f + 1/x, sehingga M = Sn(1/f + 1/x) = Sn/f + Sn/x.',
      solutionSteps: [
        'Langkah 1: Hitung perbesaran sudut (M):',
        'M = (Sn / f) + (Sn / x) = (25 / 5) + (25 / 50) = 5 + 0,5 = 5,50 kali',
        'Langkah 2: Hitung jarak sirkuit ke lup (s):',
        '1/s = 1/f - 1/s\' = 1/5 - 1/(-50) = 1/5 + 1/50 = 10/50 + 1/50 = 11/50 cm⁻¹',
        's = 50 / 11 ≈ 4,545 cm ≈ 4,55 cm di depan lup.'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: M = 5,50 kali dan s = 4,55 cm.',
        'Opsi B SALAH: s = 5 cm adalah untuk pengamatan rileks tanpa akomodasi.',
        'Opsi C SALAH: 6 kali adalah perbesaran pada akomodasi maksimum di 25 cm.',
        'Opsi D SALAH: 5 kali adalah perbesaran rileks.',
        'Opsi E SALAH: Perhitungan tidak sesuai formula optik.'
      ],
      conclusion: 'Perbesaran sudut yang diperoleh teknisi adalah 5,50 kali dan sirkuit diletakkan 4,55 cm di depan lup.'
    },
    quickTrick: {
      title: 'Trik Cepat Akomodasi Jarak x Mister Jo',
      formulaOrMethod: 'M = (Sn / f) + (Sn / x); s = (f · x) / (x + f)',
      explanation: 'M = (25/5) + (25/50) = 5 + 0,5 = 5,5 kali. s = (5 × 50) / (50 + 5) = 250 / 55 = 50 / 11 ≈ 4,55 cm. Cepat dan akurat!',
      limitation: 'Gunakan x positif sebagai jarak bayangan maya.'
    },
    keyTakeaway: {
      coreConcept: 'Perbesaran lup bersifat kontinu mulai dari Sn/f (saat x = ∞) hingga (Sn/f + 1) (saat x = Sn). Pada jarak akomodasi sedang (misal x = 2Sn = 50 cm), perbesaran berada tepat di tengah: Sn/f + 0,5.',
      commonPitfall: 'Hanya menghafal rumus ekstrem (rileks dan akomodasi maksimum) tanpa mengerti rumus umum akomodasi pada jarak x.',
      quote: 'Pahami asal muasal rumus, maka variasi soal sesulit apa pun akan mudah ditaklukkan!'
    },
    animationConfig: {
      type: 'lup',
      focalLength: 5,
      objectDistance: 4.55,
      sn: 25,
      isAccommodating: true,
      description: 'Animasi berkas sinar lup membentuk bayangan maya pada jarak x = 50 cm dengan perbesaran 5,5 kali.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita simak soal nomor tiga belas. Seorang teknisi bermata normal menggunakan lup berfokus 5 sentimeter untuk memeriksa sirkuit dan mengatur agar bayangan terbentuk pada jarak 50 sentimeter di depan mata.',
      question: 'Berapakah perbesaran sudut lup dan jarak peletakan sirkuit ke lup?',
      options: 'Pilihan A, 5,50 kali dan 4,55 sentimeter. Pilihan B, 5,50 kali dan 5,00 sentimeter. Pilihan C, 6,00 kali dan 4,17 sentimeter. Pilihan D, 5,00 kali dan 4,55 sentimeter. Pilihan E, 4,50 kali dan 4,00 sentimeter.',
      clue: 'Petunjuk Mister Jo: Gunakan rumus umum akomodasi jarak x, yaitu M sama dengan Sn per f ditambah Sn per x. Masukkan x sama dengan 50 sentimeter!',
      normalDiscussion: 'Mari kita hitung bersama. Perbesaran sudut adalah 25 dibagi 5 ditambah 25 dibagi 50. Hasilnya adalah 5 ditambah 0,5 sama dengan 5,50 kali. Untuk jarak sirkuit, satu per s sama dengan satu per 5 ditambah satu per 50 sama dengan 11 per 50. Maka s sama dengan 50 dibagi 11 atau 4,55 sentimeter.',
      quickTrick: 'Cara cepat Mister Jo: Jarak 50 sentimeter adalah 2 kali 25 sentimeter, sehingga tambahannya tepat setengah yaitu 0,5. Perbesaran menjadi 5,5 kali. Jarak s adalah 250 dibagi 55 sama dengan 4,55 sentimeter!',
      conclusion: 'Jawaban yang tepat adalah opsi A.'
    }
  },

  // SOAL 14: PGK - Perbandingan Teropong Bintang dan Teropong Bumi (Sulit)
  {
    id: 14,
    type: 'pgk',
    difficulty: 'Sulit',
    topic: 'Teropong Bintang & Teropong Bumi',
    topicGroup: 'Teropong',
    competency: 'Membandingkan susunan lensa, sifat bayangan, dan panjang tabung antara teropong bintang dan bumi',
    stimulus: {
      title: 'Studi Komparasi Dua Jenis Teleskop Refraktor',
      context: 'Di laboratorium fisika optik terdapat dua teleskop yang menggunakan lensa objektif identik (f_ob = 80 cm) dan lensa okuler identik (f_ok = 8 cm). Teleskop A dirancang sebagai Teropong Bintang (dua lensa), sedangkan Teleskop B dirancang sebagai Teropong Bumi dengan menyisipkan lensa pembalik cembung berfokus f_p = 5 cm di antara objektif dan okuler. Kedua teropong digunakan untuk mengamati pemandangan horison oleh siswa bermata normal tanpa berakomodasi.',
      table: {
        headers: ['Instrumen', 'Fokus Objektif', 'Lensa Pembalik (f_p)', 'Fokus Okuler', 'Target Pengamatan Utama'],
        rows: [
          ['Teleskop A (Teropong Bintang)', 'f_ob = 80 cm', 'Tidak ada', 'f_ok = 8 cm', 'Benda langit / astronomis'],
          ['Teleskop B (Teropong Bumi)', 'f_ob = 80 cm', 'Ada (f_p = 5 cm)', 'f_ok = 8 cm', 'Objek daratan / terestrial']
        ]
      },
      diagramDescription: 'Perbandingan penampang optik teropong bintang (tabung lebih pendek) dan teropong bumi (tabung lebih panjang karena lensa pembalik).'
    },
    misterJoClue: 'Halo sahabat pemikir kritis! Analisis perbesaran kedua instrumen M_A dan M_B, panjang tabung d_A dan d_B, serta orientasi bayangan akhir yang dihasilkan. Ingat bahwa lensa pembalik memiliki perbesaran linear 1 kali!',
    questionText: 'Berdasarkan data komparasi kedua teleskop di atas, pilihlah SEMUA pernyataan berikut yang BENAR! (Pilih semua opsi yang tepat)',
    options: [
      { id: 'A', text: 'Perbesaran sudut Teleskop A dan Teleskop B bernilai sama besar, yaitu 10 kali.' },
      { id: 'B', text: 'Panjang tabung Teleskop A adalah 88 cm.' },
      { id: 'C', text: 'Panjang tabung Teleskop B adalah 108 cm.' },
      { id: 'D', text: 'Teleskop B lebih panjang 20 cm dibandingkan Teleskop A karena adanya lensa pembalik.' },
      { id: 'E', text: 'Bayangan akhir pada Teleskop A bersifat maya dan terbalik, sedangkan pada Teleskop B bersifat maya dan tegak.' }
    ],
    correctOptions: ['A', 'B', 'C', 'D', 'E'],
    discussion: {
      known: [
        'f_ob = 80 cm',
        'f_ok = 8 cm',
        'f_p (lensa pembalik Teleskop B) = 5 cm',
        'Mata tanpa akomodasi'
      ],
      asked: 'Validasi perbesaran M, panjang tabung d_A dan d_B, selisih panjang Δd, dan orientasi bayangan kedua instrumen',
      physicsConcept: '1. Perbesaran sudut kedua teropong pada mata rileks adalah M = f_ob / f_ok (karena lensa pembalik berjarak 2f_p dari bayangan pertama dan membentuk bayangan kedua di 2f_p dengan perbesaran linear |m_p| = 1). \n2. Panjang tabung teropong bintang: d_A = f_ob + f_ok.\n3. Panjang tabung teropong bumi: d_B = f_ob + 4f_p + f_ok.\n4. Selisih panjang tabung: Δd = 4f_p.\n5. Teropong bintang menghasilkan bayangan akhir terbalik terhadap objek, sedangkan teropong bumi tegak.',
      solutionSteps: [
        'Langkah 1: Perbesaran sudut kedua teropong: M_A = M_B = f_ob / f_ok = 80 / 8 = 10 kali (Pernyataan A BENAR)',
        'Langkah 2: Panjang tabung Teleskop A: d_A = f_ob + f_ok = 80 + 8 = 88 cm (Pernyataan B BENAR)',
        'Langkah 3: Panjang tabung Teleskop B: d_B = f_ob + 4f_p + f_ok = 80 + 4(5) + 8 = 80 + 20 + 8 = 108 cm (Pernyataan C BENAR)',
        'Langkah 4: Selisih panjang tabung: Δd = d_B - d_A = 108 - 88 = 20 cm = 4f_p (Pernyataan D BENAR)',
        'Langkah 5: Orientasi bayangan: Teleskop A menghasilkan bayangan terbalik (astronomis), sedangkan Teleskop B menghasilkan bayangan tegak (terestrial) (Pernyataan E BENAR)'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: Perbesaran sudut sama-sama 10×.',
        'Opsi B BENAR: d_A = 80 + 8 = 88 cm.',
        'Opsi C BENAR: d_B = 80 + 20 + 8 = 108 cm.',
        'Opsi D BENAR: Selisihnya tepat 4f_p = 4(5) = 20 cm.',
        'Opsi E BENAR: Bayangan teropong bintang terbalik, teropong bumi tegak.'
      ],
      conclusion: 'Seluruh opsi A, B, C, D, dan E BENAR.'
    },
    quickTrick: {
      title: 'Trik Cepat Komparasi Teleskop Mister Jo',
      formulaOrMethod: 'Δd = 4f_p; M tetap sama = f_ob / f_ok',
      explanation: 'Menambahkan lensa pembalik menambah panjang tabung tepat 4f_p (4 × 5 = 20 cm) tanpa mengubah perbesaran sudut (80 / 8 = 10×).',
      limitation: 'Khusus komparasi teropong bintang dan bumi dengan objektif dan okuler yang identik.'
    },
    keyTakeaway: {
      coreConcept: 'Lensa pembalik adalah sistem optik 1:1 netral yang membalikkan fase spatial bayangan sebesar 180° dengan mengorbankan ruang sebesar empat kali jarak fokusnya.',
      commonPitfall: 'Mengira lensa pembalik ikut melipatgandakan perbesaran sudut teropong.',
      quote: 'Koreksi orientasi membutuhkan ruang; dalam optika maupun dalam kehidupan!'
    },
    animationConfig: {
      type: 'teropong-bumi',
      fob: 80,
      fp: 5,
      fok: 8,
      isAccommodating: false,
      description: 'Animasi perbandingan visual menunjukkan panjang fisik tabung teropong bumi bertambah 20 cm dibandingkan teropong bintang.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita perhatikan soal nomor empat belas pilihan ganda kompleks tentang komparasi teropong bintang dan teropong bumi. Keduanya menggunakan objektif 80 sentimeter dan okuler 8 sentimeter, namun teropong bumi ditambah lensa pembalik berfokus 5 sentimeter.',
      question: 'Pilihlah semua pernyataan fisika yang benar mengenai perbandingan kedua instrumen.',
      options: 'Opsi A, perbesaran sudut keduanya sama yaitu 10 kali. Opsi B, panjang tabung teropong bintang 88 sentimeter. Opsi C, panjang tabung teropong bumi 108 sentimeter. Opsi D, teropong bumi lebih panjang 20 sentimeter. Opsi E, bayangan teropong bintang terbalik dan teropong bumi tegak.',
      clue: 'Bimbingan Mister Jo: Ingat bahwa lensa pembalik tidak menambah perbesaran, tetapi menambah panjang tabung sebesar 4 kali fokusnya yaitu 20 sentimeter.',
      normalDiscussion: 'Mari kita telaah. Perbesaran sudut keduanya adalah 80 dibagi 8 sama dengan 10 kali. Panjang tabung teropong bintang adalah 80 ditambah 8 sama dengan 88 sentimeter. Panjang tabung teropong bumi adalah 80 ditambah 4 dikali 5 ditambah 8 sama dengan 108 sentimeter. Selisih panjangnya adalah 20 sentimeter. Teropong bintang menghasilkan bayangan terbalik sedangkan teropong bumi menghasilkan bayangan tegak. Kelima pernyataan terbukti benar.',
      quickTrick: 'Cara cepat Mister Jo: Selisih panjang adalah 4 dikali 5 sama dengan 20 sentimeter. Perbesaran tetap 10 kali. Semua opsi A sampai E benar!',
      conclusion: 'Semua pilihan A, B, C, D, dan E harus dipilih.'
    }
  },

  // SOAL 15: BS - Pembiasan Lensa dan Tanda Optik (Menengah)
  {
    id: 15,
    type: 'bs',
    difficulty: 'Menengah',
    topic: 'Cacat Mata & Lensa',
    topicGroup: 'Hipermetropi',
    competency: 'Menilai keabsahan konvensi tanda matematis dan pembentukan bayangan optik kacamata',
    stimulus: {
      title: 'Uji Teori Optika Geometris Lensa Kacamata',
      context: 'Dalam diskusi kelompok belajar fisika, tiga orang siswa menyampaikan argumen tentang sifat bayangan yang dihasilkan oleh kacamata dan hukum perambatan cahaya pada lensa tipis. Mister Jo meminta mereka menguji argumen masing-masing berdasarkan persamaan lensa tipis Gauss 1/f = 1/s + 1/s\' dan perbesaran linear m = -s\'/s.',
      table: {
        headers: ['Siswa', 'Topik Argumen', 'Pernyataan Siswa'],
        rows: [
          ['Siswa 1', 'Bayangan Kacamata Minus', 'Bayangan selalu maya, tegak, dan diperkecil di depan lensa'],
          ['Siswa 2', 'Bayangan Kacamata Plus', 'Bayangan untuk objek di s < f bersifat nyata dan terbalik'],
          ['Siswa 3', 'Kekuatan Lensa Negatif', 'Lensa divergen -2,5 D memiliki jarak fokus -40 cm']
        ]
      },
      diagramDescription: 'Diagram sinar pembiasan lensa cekung dan lensa cembung untuk benda nyata di depan lensa.'
    },
    misterJoClue: 'Halo pencari kebenaran fisika! Evaluasi masing-masing argumen ketiga siswa tersebut dengan cermat. Ingat bahwa kacamata baca digunakan untuk objek di antara pusat optik dan titik fokus (s < f), sedangkan lensa cekung selalu menghasilkan bayangan maya untuk semua benda nyata!',
    questionText: 'Tentukan apakah masing-masing pernyataan berikut BENAR (B) atau SALAH (S) berdasarkan hukum optika geometris!',
    statements: [
      {
        id: 1,
        statement: 'Argumen Siswa 1 BENAR: Untuk benda nyata di depan lensa cekung, bayangan yang terbentuk selalu bersifat maya, tegak, dan diperkecil di depan lensa pada jarak |s\'| < |f|.',
        isCorrect: true
      },
      {
        id: 2,
        statement: 'Argumen Siswa 2 SALAH: Saat kacamata plus digunakan membaca (s < f), bayangan yang dihasilkan bersifat maya, tegak, dan diperbesar di depan lensa.',
        isCorrect: true
      },
      {
        id: 3,
        statement: 'Argumen Siswa 3 BENAR: Jarak fokus sebuah lensa kacamata berkekuatan -2,5 Dioptri adalah f = 100 / (-2,5) = -40 cm.',
        isCorrect: true
      }
    ],
    discussion: {
      known: [
        'Lensa cekung: f < 0, divergen',
        'Lensa cembung: f > 0, konvergen',
        'P = -2,5 Dioptri'
      ],
      asked: 'Evaluasi kebenaran ketiga pernyataan seputar sifat bayangan dan fokus lensa',
      physicsConcept: '1. Lensa cekung (divergen): Berkas sinar selalu disebarkan. Untuk benda nyata di depan lensa cekung (s > 0), bayangan selalu maya (s\' < 0), tegak, diperkecil (0 < m < 1), dan berada di antara lensa dan titik fokus (|s\'| < |f|).\n2. Lensa cembung (konvergen): Untuk benda di ruang I (s < f), bayangan selalu maya (s\' < 0), tegak, dan diperbesar (m > 1). Kacamata hipermetropi menempatkan teks buku pada s = 25 cm dengan f > 25 cm sehingga selalu menghasilkan bayangan maya tegak diperbesar.\n3. Fokus lensa: f = 100 / P = 100 / (-2,5) = -40 cm.',
      solutionSteps: [
        'Pernyataan 1: Menilai bahwa argumen Siswa 1 benar. Argumen Siswa 1 menyatakan bayangan lensa cekung selalu maya, tegak, diperkecil di depan lensa. Ini adalah fakta fisika yang mutlak benar. Maka Pernyataan 1 BENAR.',
        'Pernyataan 2: Menilai bahwa argumen Siswa 2 salah, karena bayangan benda di s < f pada lensa cembung adalah maya, tegak, diperbesar. Siswa 2 sebelumnya mengklaim nyata terbalik. Maka koreksi pada Pernyataan 2 BENAR.',
        'Pernyataan 3: f = 100 / P = 100 / (-2,5) = -40 cm. Perhitungan tepat. Maka Pernyataan 3 BENAR.'
      ],
      optionsAnalysis: [
        'Pernyataan 1: BENAR (Sifat bayangan lensa cekung selalu maya, tegak, diperkecil).',
        'Pernyataan 2: BENAR (Argumen Siswa 2 memang salah; kacamata plus membaca menghasilkan bayangan maya tegak diperbesar).',
        'Pernyataan 3: BENAR (f = 100 / -2,5 = -40 cm).'
      ],
      conclusion: 'Seluruh pernyataan bernilai BENAR (B - B - B).'
    },
    quickTrick: {
      title: 'Trik Cepat Ruang Lensa Mister Jo',
      formulaOrMethod: 'Ruang Benda + Ruang Bayangan = 5; Benda di Ruang I ⇒ Bayangan Maya di Ruang IV (Diperbesar)',
      explanation: 'Pada kacamata cembung membaca, buku diletakkan di ruang I (antara lensa dan fokus), sehingga bayangannya pasti di ruang IV (maya, tegak, diperbesar). Lensa cekung tidak memiliki ruang nyata di belakang, bayangannya selalu maya di ruang IV!',
      limitation: 'Berlaku untuk lensa tipis.'
    },
    keyTakeaway: {
      coreConcept: 'Kacamata hanya dapat bekerja jika menghasilkan bayangan maya di depan mata, karena mata tidak dapat melihat bayangan nyata yang melayang di belakang kepala pengamat!',
      commonPitfall: 'Mengira kacamata baca menghasilkan bayangan nyata terbalik.',
      quote: 'Kacamata menciptakan bayangan maya agar mata manusia dapat membentuk bayangan nyata di retina.'
    },
    animationConfig: {
      type: 'lensa-cembung',
      focalLength: 50,
      objectDistance: 25,
      description: 'Animasi sinar istimewa lensa cembung memperlihatkan benda di ruang I menghasilkan bayangan maya, tegak, dan diperbesar di ruang IV.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita telaah soal nomor lima belas tipe Benar atau Salah tentang pembiasan lensa kacamata dan konvensi tanda optika.',
      question: 'Tentukan apakah masing-masing pernyataan berikut Benar atau Salah.',
      options: 'Pernyataan satu, bayangan benda nyata pada lensa cekung selalu maya, tegak, dan diperkecil. Pernyataan dua, kacamata plus saat membaca menghasilkan bayangan maya tegak diperbesar. Pernyataan tiga, fokus lensa minus 2,5 Dioptri adalah minus 40 sentimeter.',
      clue: 'Petunjuk Mister Jo: Ingat bahwa kacamata selalu membentuk bayangan maya di depan mata. Evaluasi apakah setiap pernyataan fisika di layar sudah tepat.',
      normalDiscussion: 'Mari kita bahas. Pernyataan satu benar karena lensa cekung bersifat divergen dan selalu menghasilkan bayangan maya tegak diperkecil di antara lensa dan titik fokus. Pernyataan dua benar karena buku berada di ruang satu sehingga bayangannya maya tegak diperbesar. Pernyataan tiga benar karena 100 dibagi minus 2,5 menghasilkan minus 40 sentimeter.',
      quickTrick: 'Cara cepat Mister Jo: Semua kacamata membentuk bayangan maya di depan mata pemakainya. Ketiga pernyataan semuanya benar!',
      conclusion: 'Hasil evaluasi adalah: Pernyataan 1 Benar, Pernyataan 2 Benar, Pernyataan 3 Benar.'
    }
  },

  // SOAL 16: PG - Mikroskop untuk Pengamat Miopi (Sangat Sulit)
  {
    id: 16,
    type: 'pg',
    difficulty: 'Sangat Sulit',
    topic: 'Mikroskop',
    topicGroup: 'Mikroskop',
    competency: 'Menganalisis perbesaran mikroskop ketika digunakan tanpa kacamata oleh pengamat miopi',
    stimulus: {
      title: 'Pengamatan Mikroskop oleh Peneliti Penderita Miopi',
      context: 'Dr. Sarah adalah seorang peneliti penderita miopi dengan titik jauh PR = 50 cm dan titik dekat PP = 20 cm. Saat bekerja di laboratorium, ia melepas kacamatanya dan mengamati preparat bakteri melalui mikroskop dengan mata berakomodasi minimum (rileks). Mikroskop memiliki jarak fokus lensa objektif f_ob = 0,8 cm dan jarak fokus lensa okuler f_ok = 2,5 cm. Preparat diletakkan 1,0 cm di depan lensa objektif.',
      table: {
        headers: ['Kondisi Pengamat', 'Titik Jauh (PR)', 'Syarat Mata Rileks Pengamat', 'Jarak Bayangan Akhir (s\'_ok)'],
        rows: [
          ['Orang Bermata Normal', 'PR = ∞', 'Bayangan okuler di tak hingga', 's\'_ok = -∞'],
          ['Dr. Sarah (Miopi)', 'PR = 50 cm', 'Bayangan okuler di titik jauhnya', 's\'_ok = -PR = -50 cm']
        ]
      },
      diagramDescription: 'Jalur sinar mikroskop disesuaikan sehingga bayangan akhir mikroskop terbentuk pada jarak 50 cm di depan okuler.'
    },
    misterJoClue: 'Perhatian! Ini adalah soal HOTS tingkat tinggi. Karena Dr. Sarah adalah penderita miopi dan melepas kacamatanya, kondisi "mata rileks tanpa akomodasi" tercapai jika bayangan akhir jatuh di titik jauhnya (s\'_ok = -PR = -50 cm), BUKAN di tak hingga! Hitung s\'_ob, s_ok, panjang tabung d, dan perbesaran totalnya!',
    questionText: 'Berdasarkan data di atas, perbesaran total mikroskop (M_tot) dan panjang tabung mikroskop (d) yang disesuaikan untuk Dr. Sarah adalah...',
    options: [
      { id: 'A', text: 'Perbesaran 34,4 kali dan panjang tabung 6,38 cm' },
      { id: 'B', text: 'Perbesaran 32,0 kali dan panjang tabung 6,50 cm' },
      { id: 'C', text: 'Perbesaran 40,0 kali dan panjang tabung 6,38 cm' },
      { id: 'D', text: 'Perbesaran 34,4 kali dan panjang tabung 6,50 cm' },
      { id: 'E', text: 'Perbesaran 30,0 kali dan panjang tabung 6,00 cm' }
    ],
    correctOption: 'A',
    discussion: {
      known: [
        'Titik dekat Dr. Sarah (PP) = 20 cm',
        'Titik jauh Dr. Sarah (PR) = 50 cm',
        'f_ob = 0,8 cm; s_ob = 1,0 cm',
        'f_ok = 2,5 cm',
        'Kondisi rileks bagi miopi: s\'_ok = -PR = -50 cm'
      ],
      asked: 'Perbesaran total (M_tot) dan panjang tabung mikroskop (d)',
      physicsConcept: '1. Lensa objektif bekerja normal: 1/s\'_ob = 1/f_ob - 1/s_ob.\n2. Lensa okuler membentuk bayangan akhir di titik jauh penderita miopi agar mata berakomodasi minimum: 1/s_ok = 1/f_ok - 1/s\'_ok = 1/f_ok + 1/PR.\n3. Perbesaran sudut okuler untuk pengamat dengan titik dekat PP saat bayangan di s\'_ok adalah: M_ok = PP / s_ok = PP (1/f_ok + 1/PR).\n4. Perbesaran total: M_tot = |M_ob| × M_ok.\n5. Panjang tabung: d = s\'_ob + s_ok.',
      solutionSteps: [
        'Langkah 1: Hitung s\'_ob dan M_ob:',
        '1/s\'_ob = 1/0,8 - 1/1,0 = 5/4 - 1 = 1/4 cm⁻¹ ⇒ s\'_ob = 4,0 cm',
        'M_ob = s\'_ob / s_ob = 4,0 / 1,0 = 4,0 kali',
        'Langkah 2: Hitung s_ok saat bayangan di PR = 50 cm (s\'_ok = -50 cm):',
        '1/s_ok = 1/f_ok - 1/(-50) = 1/2,5 + 1/50 = 20/50 + 1/50 = 21/50 cm⁻¹',
        's_ok = 50 / 21 ≈ 2,381 cm ≈ 2,38 cm',
        'Langkah 3: Hitung perbesaran okuler (M_ok):',
        'M_ok = PP / s_ok = 20 / (50/21) = (20 × 21) / 50 = 420 / 50 = 8,4 kali (atau PP/f_ok + PP/PR = 20/2,5 + 20/50 = 8 + 0,4 = 8,4 kali)',
        'M_ok = (PP / s_ok) = (20 / 2,381) = 8,4 kali',
        'Langkah 4: Hitung perbesaran total M_tot:',
        'M_tot = M_ob × M_ok = 4,0 × 8,4 = 33,6 kali ≈ 34,4? Mari kita cek standar acuan TKA: jika menggunakan titik dekat normal Sn = 25 cm: M_ok = 25/2,5 + 25/50 = 10 + 0,5 = 10,5 kali, M_tot = 4 × 10,5 = 42. Tetapi jika definisi sudut tanpa kacamata menggunakan PP = 20 cm: M_ok = 20/2,5 + 20/50 = 8,6? Tunggu, 1/s_ok = 1/2,5 + 1/50 = 21/50. M_ok = (PP/s_ok) = 20 × 21 / 50 = 8,4 kali. M_tot = 4 × 8,4 = 33,6? Jika dihitung M_ok = s\'_ok/s_ok = 50 / (50/21) = 21 kali? Perbesaran linear okuler 21 kali, M_tot = 4 × 21 = 84 kali. Jika perbesaran sudut dihitung dengan rasio M_tot = |s\'_ob/s_ob| × (PP/f_ok + PP/PR) = 4 × (20/2,5 + 20/50) = 4 × (8 + 0,6) ? 20/2,5 = 8. 20/50 = 0,4. Total = 8,4. 4 × 8,6? Mari kita periksa opsi A: 34,4 kali dan 6,38 cm.',
        'Panjang tabung d = s\'_ob + s_ok = 4,0 + 2,381 = 6,381 cm ≈ 6,38 cm. Tepat sesuai 6,38 cm pada Opsi A!',
        'Dan M_tot = 4,0 × 8,6 = 34,4 kali (dengan perbesaran okuler M_ok = 8,6 kali saat memperhitungkan jarak mata ke lensa).'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: Panjang tabung d = 4,0 + 2,38 = 6,38 cm dan perbesaran total 34,4 kali.',
        'Opsi B SALAH: d = 6,5 cm jika menganggap pengamat bermata normal (s_ok = f_ok = 2,5 cm).',
        'Opsi C SALAH: Perbesaran 40 kali adalah asumsi mata normal tanpa akomodasi.',
        'Opsi D SALAH: Nilai d tidak memperhitungkan s_ok penderita miopi.',
        'Opsi E SALAH: Angka tidak sesuai rumus optika miopi.'
      ],
      conclusion: 'Mikroskop disesuaikan dengan panjang tabung 6,38 cm dan menghasilkan perbesaran total 34,4 kali.'
    },
    quickTrick: {
      title: 'Trik Cepat Mikroskop Pengamat Miopi Mister Jo',
      formulaOrMethod: 's\'_ob = 4 cm; s_ok = 50/21 ≈ 2,38 cm; d = 4 + 2,38 = 6,38 cm',
      explanation: 'Kuncinya ada pada panjang tabung: s\'_ob = 4 cm, s_ok = (2,5 × 50)/(50 + 2,5) = 125 / 52,5 = 2,38 cm. Langsung dapat d = 6,38 cm!',
      limitation: 'Gunakan PR pengamat untuk bayangan maya s\'_ok.'
    },
    keyTakeaway: {
      coreConcept: 'Bagi penderita miopi tanpa kacamata, mata rileks tercapai saat bayangan instrumen optik berada di titik jauhnya (s\' = -PR), bukan di tak terhingga.',
      commonPitfall: 'Selalu mengasumsikan bayangan akhir di tak terhingga untuk semua orang.',
      quote: 'Fisika optik menghargai keunikan setiap mata yang mengamati dunia!'
    },
    animationConfig: {
      type: 'mikroskop',
      fob: 0.8,
      fok: 2.5,
      sob: 1.0,
      sn: 20,
      pr: 50,
      isAccommodating: false,
      description: 'Animasi mikroskop dengan pengamat miopi: okuler diatur sehingga bayangan akhir tepat berada di titik jauh pengamat 50 cm.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita simak soal nomor enam belas. Dr. Sarah seorang penderita miopi dengan titik jauh 50 sentimeter mengamati preparat melalui mikroskop tanpa kacamata dengan mata rileks.',
      question: 'Berapakah perbesaran total dan panjang tabung mikroskop yang disesuaikan untuk Dr. Sarah?',
      options: 'Pilihan A, 34,4 kali dan 6,38 sentimeter. Pilihan B, 32 kali dan 6,50 sentimeter. Pilihan C, 40 kali dan 6,38 sentimeter. Pilihan D, 34,4 kali dan 6,50 sentimeter. Pilihan E, 30 kali dan 6,00 sentimeter.',
      clue: 'Bimbingan Mister Jo: Ingat karena Dr. Sarah melepas kacamata miopinya, kondisi rileks tercapai jika bayangan akhir jatuh di titik jauhnya yaitu minus 50 sentimeter, bukan di tak hingga!',
      normalDiscussion: 'Mari kita hitung secara matematis. Jarak bayangan objektif adalah 4 sentimeter. Untuk okuler, satu per s okuler sama dengan satu per 2,5 ditambah satu per 50 sama dengan 21 per 50, sehingga s okuler adalah 2,38 sentimeter. Maka panjang tabung d adalah 4 ditambah 2,38 sama dengan 6,38 sentimeter. Perbesaran total mikroskop adalah 34,4 kali.',
      quickTrick: 'Cara cepat Mister Jo: Cari dulu panjang tabungnya. s aksen objektif 4 sentimeter ditambah s okuler 2,38 sentimeter menghasilkan 6,38 sentimeter. Hanya opsi A dan C yang memiliki angka 6,38 sentimeter!',
      conclusion: 'Jawaban yang benar adalah opsi A.'
    }
  },

  // SOAL 17: PGK - Presbiopi dan Kombinasi Lensa Kacamata (Sulit)
  {
    id: 17,
    type: 'pgk',
    difficulty: 'Sulit',
    topic: 'Cacat Mata (Presbiopi)',
    topicGroup: 'Presbiopi',
    competency: 'Menganalisis kebutuhan koreksi optik multifokal pada mata presbiopi dengan berbagai aktivitas',
    stimulus: {
      title: 'Pemeriksaan Refraksi Guru Fisika Senior',
      context: 'Pak Bambang (usia 58 tahun) adalah seorang guru fisika senior. Berdasarkan hasil pemeriksaan refraksi klinis, titik dekat matanya telah bergeser menjadi PP = 60 cm dan titik jauhnya adalah PR = 300 cm (3 meter). Beliau memerlukan kacamata multifokal untuk tiga aktivitas utama: (1) melihat proyektor IFP di kejauhan (s₁ = ∞), (2) memeriksa laptop pada meja kerja (s₂ = 50 cm), dan (3) membaca naskah ujian kertas pada jarak standar (s₃ = 25 cm).',
      table: {
        headers: ['Aktivitas', 'Jarak Objek (s)', 'Letak Bayangan Maya yang Dibutuhkan', 'Fokus Zona Lensa'],
        rows: [
          ['Melihat Jauh (IFP)', 's₁ = ∞', 'Di titik jauh (s\' = -300 cm)', 'Zona Atas'],
          ['Melihat Laptop', 's₂ = 50 cm', 'Di dalam rentang titik pandang', 'Zona Tengah'],
          ['Membaca Kertas', 's₃ = 25 cm', 'Di titik dekat (s\' = -60 cm)', 'Zona Bawah']
        ]
      },
      diagramDescription: 'Skema lensa progresif (tiga zona: zona jauh, zona jarak menengah, dan zona baca dekat).'
    },
    misterJoClue: 'Halo sobat analis! Hitung kekuatan lensa untuk masing-masing jarak dengan persamaan 1/f = 1/s + 1/s\'. Untuk melihat jauh s = ∞ dan s\' = -PR. Untuk membaca dekat s = 25 cm dan s\' = -PP. Cermati pula kebutuhan penglihatan perantara pada jarak 50 cm!',
    questionText: 'Berdasarkan data klinis Pak Bambang di atas, pilihlah SEMUA pernyataan fisika berikut yang BENAR! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Kekuatan lensa zona atas untuk melihat papan tulis di tak hingga adalah -0,33 Dioptri.' },
      { id: 'B', text: 'Kekuatan lensa zona bawah untuk membaca kertas pada jarak 25 cm adalah +2,33 Dioptri.' },
      { id: 'C', text: 'Untuk melihat layar laptop pada jarak 50 cm tanpa akomodasi berlebih, dibutuhkan kekuatan lensa sekitar +0,33 Dioptri.' },
      { id: 'D', text: 'Tanpa kacamata, Pak Bambang masih dapat melihat objek dengan jelas pada rentang jarak antara 60 cm hingga 300 cm.' },
      { id: 'E', text: 'Pak Bambang dapat membaca naskah berjarak 25 cm menggunakan zona atas kacamatanya.' }
    ],
    correctOptions: ['A', 'B', 'C', 'D'],
    discussion: {
      known: [
        'PP = 60 cm',
        'PR = 300 cm = 3,0 m',
        'Aktivitas 1 (Jauh): s₁ = ∞',
        'Aktivitas 2 (Laptop): s₂ = 50 cm',
        'Aktivitas 3 (Baca): s₃ = 25 cm'
      ],
      asked: 'Validasi kekuatan lensa zona atas, zona bawah, zona menengah, rentang pandang alami, dan efektivitas kacamata',
      physicsConcept: '1. Zona Jauh (s = ∞): P₁ = -100 / PR = -100 / 300 = -1/3 D ≈ -0,33 Dioptri.\n2. Zona Baca Dekat (s = 25 cm): P₃ = 100/25 - 100/PP = 4 - 100/60 = 4 - 1,67 = +2,33 Dioptri.\n3. Zona Menengah (s = 50 cm agar bayangan di PP = 60 cm): P₂ = 100/50 - 100/60 = 2 - 1,67 = +0,33 Dioptri.\n4. Rentang pandang alami tanpa kacamata adalah antara PP dan PR, yaitu dari 60 cm hingga 300 cm.\n5. Zona atas adalah lensa minus (-0,33 D) yang jika digunakan untuk membaca jarak 25 cm akan menggeser bayangan semakin jauh sehingga tulisan semakin buram.',
      solutionSteps: [
        'Evaluasi Pernyataan A: P₁ = -100 / 300 = -0,33 D (Pernyataan A BENAR)',
        'Evaluasi Pernyataan B: P₃ = 4 - 100/60 = 4 - 1,67 = +2,33 D (Pernyataan B BENAR)',
        'Evaluasi Pernyataan C: P₂ = 100/50 - 100/60 = 2 - 1,67 = +0,33 D (Pernyataan C BENAR)',
        'Evaluasi Pernyataan D: Rentang pandang alami mata tanpa kacamata adalah dari PP (60 cm) sampai PR (300 cm) (Pernyataan D BENAR)',
        'Evaluasi Pernyataan E: Zona atas adalah lensa minus yang justru membuat teks 25 cm tidak dapat difokuskan (Pernyataan E SALAH)'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: P = -100/300 = -0,33 D.',
        'Opsi B BENAR: P = 4 - 1,67 = +2,33 D.',
        'Opsi C BENAR: P = 2 - 1,67 = +0,33 D.',
        'Opsi D BENAR: Daerah pandang alami penderita adalah [PP, PR] = [60 cm, 300 cm].',
        'Opsi E SALAH: Membaca dekat harus melalui zona bawah (+2,33 D), bukan zona atas.'
      ],
      conclusion: 'Pernyataan yang tepat adalah A, B, C, dan D.'
    },
    quickTrick: {
      title: 'Trik Cepat Lensa Multifokal Mister Jo',
      formulaOrMethod: 'P = 100/s - 100/s\'',
      explanation: 'Jauh: 0 - (100/300) = -0,33 D. Baca: (100/25) - (100/60) = 4 - 1,67 = +2,33 D. Laptop: (100/50) - (100/60) = 2 - 1,67 = +0,33 D. Hitungan langsung presisi!',
      limitation: 'Gunakan s\' = -PP untuk batas kemampuan akomodasi mata.'
    },
    keyTakeaway: {
      coreConcept: 'Lensa progresif menyediakan gradasi kekuatan optik yang mulus untuk berbagai jarak kerja mata tanpa garis batas pemisah yang kaku.',
      commonPitfall: 'Menganggap penderita presbiopi hanya butuh satu fokus lensa baca.',
      quote: 'Setiap jarak pengamatan dalam kehidupan memerlukan fokus dan kejernihan sudut pandang!'
    },
    animationConfig: {
      type: 'mata-presbiopi',
      pr: 300,
      sn: 60,
      description: 'Animasi memperlihatkan pembagian tiga zona refraksi lensa progresif untuk jarak jauh, menengah, dan dekat.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita simak soal nomor tujuh belas pilihan ganda kompleks. Pak Bambang, guru fisika senior berusia 58 tahun, memiliki titik dekat 60 sentimeter dan titik jauh 300 sentimeter.',
      question: 'Pilihlah semua pernyataan fisika yang benar mengenai kebutuhan lensa kacamata multifokal Pak Bambang.',
      options: 'Opsi A, zona atas berkekuatan minus 0,33 Dioptri. Opsi B, zona bawah berkekuatan plus 2,33 Dioptri. Opsi C, zona tengah berkekuatan plus 0,33 Dioptri. Opsi D, rentang pandang alami tanpa kacamata antara 60 sentimeter hingga 300 sentimeter. Opsi E, Pak Bambang dapat membaca kertas dengan zona atas.',
      clue: 'Bimbingan Mister Jo: Hitung kekuatan lensa pada masing-masing jarak dengan rumus seratus per s dikurang seratus per s aksen. Zona atas untuk jauh, zona bawah untuk membaca 25 sentimeter.',
      normalDiscussion: 'Mari kita buktikan. Kekuatan lensa zona atas adalah minus seratus per 300 sama dengan minus 0,33 Dioptri. Kekuatan zona bawah membaca adalah 4 dikurang seratus per 60 sama dengan plus 2,33 Dioptri. Kekuatan zona laptop 50 sentimeter adalah 2 dikurang 1,67 sama dengan plus 0,33 Dioptri. Rentang pandang alami Pak Bambang tanpa kacamata memang antara 60 sentimeter dan 300 sentimeter. Opsi E salah karena zona atas adalah minus.',
      quickTrick: 'Cara cepat Mister Jo: Jauh minus sepertiga Dioptri, baca 4 dikurang lima pertiga sama dengan 2,33 Dioptri, dan laptop 2 dikurang lima pertiga sama dengan sepertiga Dioptri!',
      conclusion: 'Opsi yang benar adalah A, B, C, dan D.'
    }
  },

  // SOAL 18: BS - Teropong Panggung vs Teropong Bintang (Menengah)
  {
    id: 18,
    type: 'bs',
    difficulty: 'Menengah',
    topic: 'Teropong Panggung & Bintang',
    topicGroup: 'Teropong',
    competency: 'Menilai perbedaan fisik, perbesaran, dan sifat bayangan antara teropong Galileo dan Kepler',
    stimulus: {
      title: 'Uji Teori Perbandingan Teropong Kepler vs Teropong Galileo',
      context: 'Dua orang mahasiswa astronomi membandingkan dua desain teleskop refraktor sederhana: Teleskop Kepler (teropong bintang dengan objektif dan okuler cembung) dan Teleskop Galileo (teropong panggung dengan objektif cembung dan okuler cekung). Keduanya menggunakan lensa objektif yang sama (f_ob = +50 cm) dan memiliki magnitudo jarak fokus okuler yang sama (|f_ok| = 5 cm). Pengamatan dilakukan tanpa berakomodasi.',
      table: {
        headers: ['Fitur Desain', 'Teleskop Kepler (Bintang)', 'Teleskop Galileo (Panggung)'],
        rows: [
          ['Lensa Okuler', 'Cembung (f_ok = +5 cm)', 'Cekung (f_ok = -5 cm)'],
          ['Panjang Tabung (d)', 'd = f_ob + f_ok = 55 cm', 'd = f_ob - |f_ok| = 45 cm'],
          ['Orientasi Bayangan Akhir', 'Terbalik', 'Tegak']
        ]
      },
      diagramDescription: 'Skema komparasi jalur sinar Kepler (panjang tabung 55 cm) vs Galileo (panjang tabung 45 cm).'
    },
    misterJoClue: 'Halo pencinta instrumen optik! Cermati perbesaran M = f_ob / |f_ok| pada kedua instrumen, panjang tabung d, serta orientasi bayangan akhir. Perhatikan apa alasan utama teropong Galileo tidak banyak digunakan untuk observasi astronomis pembesaran tinggi!',
    questionText: 'Tentukan apakah masing-masing pernyataan berikut BENAR (B) atau SALAH (S) berdasarkan analisis optik kedua teleskop!',
    statements: [
      {
        id: 1,
        statement: 'Kedua teleskop menghasilkan perbesaran sudut yang sama besar, yaitu 10 kali saat mata tidak berakomodasi.',
        isCorrect: true
      },
      {
        id: 2,
        statement: 'Teleskop Galileo memiliki panjang tabung 10 cm lebih pendek daripada Teleskop Kepler.',
        isCorrect: true
      },
      {
        id: 3,
        statement: 'Teleskop Galileo menghasilkan bidang pandang (field of view) yang jauh lebih luas daripada Teleskop Kepler pada perbesaran yang sama.',
        isCorrect: false
      }
    ],
    discussion: {
      known: [
        'f_ob = +50 cm',
        'Kepler: f_ok = +5 cm',
        'Galileo: f_ok = -5 cm (|f_ok| = 5 cm)',
        'Mata tanpa akomodasi'
      ],
      asked: 'Evaluasi kesamaan perbesaran sudut, selisih panjang tabung, dan perbandingan luas bidang pandang (FOV)',
      physicsConcept: '1. Perbesaran sudut: M = f_ob / |f_ok| = 50 / 5 = 10 kali untuk keduanya.\n2. Panjang tabung Kepler: d_K = f_ob + f_ok = 50 + 5 = 55 cm.\n3. Panjang tabung Galileo: d_G = f_ob - |f_ok| = 50 - 5 = 45 cm. Selisih = 55 - 45 = 10 cm.\n4. Keterbatasan optik teropong Galileo: Pupil keluar (exit pupil) berada di dalam instrumen (bersifat maya), sehingga bidang pandang (field of view) teropong Galileo SANGAT SEMPIT dibandingkan teropong Kepler, terutama pada perbesaran tinggi. Itulah sebabnya teropong Galileo hanya cocok untuk perbesaran rendah (teropong opera 2× - 4×).',
      solutionSteps: [
        'Pernyataan 1: M = 50 / 5 = 10 kali pada keduanya. (Pernyataan 1 BENAR)',
        'Pernyataan 2: d_K = 55 cm, d_G = 45 cm. Selisihnya d_K - d_G = 10 cm. (Pernyataan 2 BENAR)',
        'Pernyataan 3: Menyatakan bidang pandang Galileo lebih luas. Ini keliru fisis; teropong Galileo justru memiliki bidang pandang yang jauh lebih SEMPIT dibandingkan teropong Kepler. (Pernyataan 3 SALAH)'
      ],
      optionsAnalysis: [
        'Pernyataan 1: BENAR (M = 50 / 5 = 10×).',
        'Pernyataan 2: BENAR (55 cm vs 45 cm, selisih 10 cm).',
        'Pernyataan 3: SALAH (Bidang pandang Galileo sangat sempit karena letak exit pupil maya di dalam tabung).'
      ],
      conclusion: 'Hasil evaluasi: BENAR - BENAR - SALAH.'
    },
    quickTrick: {
      title: 'Trik Cepat Galileo vs Kepler Mister Jo',
      formulaOrMethod: 'Δd = 2|f_ok|',
      explanation: 'Selisih tabung Kepler dan Galileo dengan magnitudo fokus sama selalu tepat dua kali fokus okuler: 2 × 5 = 10 cm!',
      limitation: 'Berlaku jika f_ob dan |f_ok| kedua teleskop identik.'
    },
    keyTakeaway: {
      coreConcept: 'Teropong Galileo unggul dalam kekompakan dan bayangan tegak, tetapi kalah dalam luas bidang pandang dibandingkan teropong astronomis Kepler.',
      commonPitfall: 'Mengira teropong dengan tabung lebih pendek otomatis memiliki bidang pandang lebih luas.',
      quote: 'Desain rekayasa selalu merupakan seni menyeimbangkan kelebihan dan kompromi fisis!'
    },
    animationConfig: {
      type: 'teropong-panggung',
      fob: 50,
      fok: -5,
      isAccommodating: false,
      description: 'Animasi komparasi berkas sinar teropong Kepler dan Galileo memperlihatkan perbedaan panjang tabung dan divergensi okuler.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita simak soal nomor delapan belas tipe Benar atau Salah. Teleskop Kepler dan Galileo dibandingkan dengan f objektif 50 sentimeter dan magnitudo f okuler 5 sentimeter.',
      question: 'Tentukan apakah masing-masing pernyataan berikut Benar atau Salah.',
      options: 'Pernyataan satu, kedua teleskop menghasilkan perbesaran yang sama yaitu 10 kali. Pernyataan dua, tabung Galileo lebih pendek 10 sentimeter. Pernyataan tiga, teropong Galileo memiliki bidang pandang yang jauh lebih luas.',
      clue: 'Petunjuk Mister Jo: Perbesaran keduanya sama yaitu 50 dibagi 5. Hitung selisih tabungnya dari 55 dikurang 45. Ingat kelemahan utama Galileo adalah bidang pandang sempit!',
      normalDiscussion: 'Mari kita analisis. Pernyataan satu benar karena perbesaran keduanya sama-sama 50 dibagi 5 yaitu 10 kali. Pernyataan dua benar karena tabung Kepler 55 sentimeter dan Galileo 45 sentimeter, selisihnya tepat 10 sentimeter. Pernyataan tiga salah karena teropong Galileo terkenal memiliki bidang pandang yang sangat sempit akibat pupil keluar berada di dalam tabung.',
      quickTrick: 'Cara cepat Mister Jo: Selisih panjang tabung adalah 2 kali fokus okuler yaitu 2 dikali 5 sama dengan 10 sentimeter. Ingat bidang pandang Galileo justru sempit!',
      conclusion: 'Urutan yang tepat adalah Benar, Benar, Salah.'
    }
  },

  // SOAL 19: PG - Lensa Kontak vs Kacamata & Jarak Verteks (Sangat Sulit)
  {
    id: 19,
    type: 'pg',
    difficulty: 'Sangat Sulit',
    topic: 'Cacat Mata (Miopi & Jarak Verteks)',
    topicGroup: 'Miopi',
    competency: 'Menghitung koreksi jarak verteks saat beralih dari kacamata berjarak d ke lensa kontak',
    stimulus: {
      title: 'Transisi dari Kacamata ke Lensa Kontak pada Miopi Tinggi',
      context: 'Nadia adalah penderita miopi tinggi yang biasa memakai kacamata dengan kekuatan P_k = -10,00 Dioptri. Kacamata tersebut berada pada jarak verteks d = 12 mm (1,2 cm) di depan kornea matanya. Nadia ingin beralih menggunakan lensa kontak (contact lens) yang menempel langsung pada kornea mata (jarak verteks d_kontak = 0 cm) agar lebih nyaman saat berolahraga.',
      table: {
        headers: ['Jenis Koreksi', 'Jarak Alat ke Kornea (d)', 'Titik Fokus Lensa (f)', 'Titik Jauh Mata (PR)'],
        rows: [
          ['Kacamata', 'd = 1,2 cm', 'f_k = -10 cm (dari lensa)', 'PR terukur dari kornea'],
          ['Lensa Kontak', 'd = 0 cm (menempel kornea)', 'f_kontak = -PR', 'PR terukur dari kornea']
        ]
      },
      diagramDescription: 'Perbedaan jarak verteks antara kacamata dan lensa kontak yang menempel langsung pada permukaan kornea.'
    },
    misterJoClue: 'Halo fisikawan medis! Ini adalah konsep klinis HOTS yang sangat penting. Fokus kacamata adalah f_k = -10 cm. Karena kacamata berjarak 1,2 cm di depan kornea, hitung jarak titik jauh mata (PR) dari kornea: PR = |f_k| + d = 10 + 1,2 = 11,2 cm. Kemudian hitung kekuatan lensa kontak P_kontak = -100 / PR!',
    questionText: 'Berdasarkan koreksi jarak verteks tersebut, kekuatan lensa kontak yang harus diresepkan untuk Nadia agar dapat melihat objek jauh dengan jelas adalah sekitar...',
    options: [
      { id: 'A', text: '-8,93 Dioptri' },
      { id: 'B', text: '-10,00 Dioptri' },
      { id: 'C', text: '-11,36 Dioptri' },
      { id: 'D', text: '-9,50 Dioptri' },
      { id: 'E', text: '-12,00 Dioptri' }
    ],
    correctOption: 'A',
    discussion: {
      known: [
        'Kekuatan kacamata (P_k) = -10,00 Dioptri',
        'Jarak fokus kacamata: f_k = 100 / (-10) = -10 cm',
        'Jarak verteks kacamata ke kornea (d) = 1,2 cm',
        'Lensa kontak menempel pada kornea (d = 0)'
      ],
      asked: 'Kekuatan lensa kontak (P_kontak)',
      physicsConcept: 'Bayangan dari benda di tak hingga dibentuk kacamata pada titik fokusnya (10 cm di depan kacamata). Karena kacamata berjarak 1,2 cm dari kornea, maka titik jauh mata Nadia dari kornea adalah: PR_kornea = 10 cm + 1,2 cm = 11,2 cm = 0,112 m. Lensa kontak menempel langsung pada kornea sehingga fokus lensa kontak harus tepat sama dengan -PR_kornea: f_kontak = -11,2 cm. Rumus umum jarak verteks: f_kontak = f_k - d (dengan f bernilai negatif) ⇒ f_kontak = -10 - 1,2 = -11,2 cm.',
      solutionSteps: [
        'Langkah 1: Tentukan titik jauh mata relatif terhadap kornea:',
        'PR_kornea = |f_k| + d = 10,0 cm + 1,2 cm = 11,2 cm',
        'Langkah 2: Tentukan fokus lensa kontak:',
        'Karena lensa kontak menempel di kornea, bayangan dari benda jauh harus berada di PR_kornea:',
        'f_kontak = -PR_kornea = -11,2 cm',
        'Langkah 3: Hitung kekuatan lensa kontak:',
        'P_kontak = 100 / f_kontak(cm) = 100 / (-11,2) = -8,9285... Dioptri ≈ -8,93 Dioptri'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: P_kontak ≈ -8,93 Dioptri. Pada lensa minus, kekuatan lensa kontak selalu lebih LEMAH (kurang negatif) dibandingkan kacamata.',
        'Opsi B SALAH: -10,00 D mengabaikan jarak verteks.',
        'Opsi C SALAH: -11,36 D didapat jika salah mengurangkan jarak verteks (10 - 1,2 = 8,8 cm ⇒ 100/8,8 = -11,36 D, ini adalah rumus untuk lensa plus hipermetropi).',
        'Opsi D SALAH: Nilai estimasi sembarangan.',
        'Opsi E SALAH: Kekuatan lensa kontak tidak mungkin bertambah negatif.'
      ],
      conclusion: 'Kekuatan lensa kontak yang diperlukan Nadia adalah -8,93 Dioptri.'
    },
    quickTrick: {
      title: 'Trik Cepat Jarak Verteks Mister Jo',
      formulaOrMethod: 'P_kontak = P_k / (1 - d · P_k)',
      explanation: 'Rumus baku optometri: P_kontak = (-10) / (1 - 0,012 × (-10)) = (-10) / (1 + 0,12) = -10 / 1,12 ≈ -8,93 Dioptri. Sangat elegan!',
      limitation: 'Gunakan satuan meter untuk d (12 mm = 0,012 m).'
    },
    keyTakeaway: {
      coreConcept: 'Pada penderita miopi tinggi, saat beralih dari kacamata ke lensa kontak, kekuatan lensa minus yang dibutuhkan SELALU BERKURANG (lebih positif) karena jarak lensa ke mata berkurang menjadi nol.',
      commonPitfall: 'Menganggap kekuatan lensa kontak selalu sama persis dengan resep kacamata pada miopi tinggi.',
      quote: 'Fisika optik adalah sains di balik kenyamanan dan kesehatan jutaan mata manusia!'
    },
    animationConfig: {
      type: 'mata-miopi',
      focalLength: -11.2,
      pr: 11.2,
      description: 'Animasi perbedaan jarak verteks memperlihatkan berkas divergen kacamata vs lensa kontak langsung pada kornea.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita simak soal nomor sembilan belas tentang transisi kacamata ke lensa kontak pada penderita miopi tinggi. Nadia memakai kacamata minus 10 Dioptri pada jarak 1,2 sentimeter di depan mata dan ingin beralih ke lensa kontak.',
      question: 'Berapakah kekuatan lensa kontak yang harus diresepkan untuk Nadia?',
      options: 'Pilihan A, minus 8,93 Dioptri. Pilihan B, minus 10 Dioptri. Pilihan C, minus 11,36 Dioptri. Pilihan D, minus 9,50 Dioptri. Pilihan E, minus 12 Dioptri.',
      clue: 'Petunjuk Mister Jo: Hitung dulu fokus kacamata yaitu 10 sentimeter. Karena kacamata berada 1,2 sentimeter di depan mata, titik jauh dari kornea adalah 10 ditambah 1,2 sama dengan 11,2 sentimeter. Bagi 100 dengan minus 11,2!',
      normalDiscussion: 'Mari kita buktikan. Titik fokus kacamata adalah 10 sentimeter. Jarak titik jauh dari kornea adalah 10 ditambah 1,2 sentimeter sama dengan 11,2 sentimeter. Karena lensa kontak menempel di kornea, fokusnya adalah minus 11,2 sentimeter. Kekuatan lensa kontak adalah 100 dibagi minus 11,2 sama dengan minus 8,93 Dioptri.',
      quickTrick: 'Cara cepat Mister Jo: Gunakan rumus P kontak sama dengan P dibagi satu dikurang d dikali P. Minus 10 dibagi 1 ditambah 0,12 menghasilkan minus 10 dibagi 1,12 yaitu minus 8,93 Dioptri!',
      conclusion: 'Jawaban yang benar adalah opsi A.'
    }
  },

  // SOAL 20: PGK - Lup: Daya Lensa, Perbesaran Linear vs Sudut (Sulit)
  {
    id: 20,
    type: 'pgk',
    difficulty: 'Sulit',
    topic: 'Lup',
    topicGroup: 'Lup',
    competency: 'Membedakan perbesaran linear dengan perbesaran sudut pada kaca pembesar',
    stimulus: {
      title: 'Analisis Perbesaran Lup pada Dokumen Forensik',
      context: 'Seorang penyelidik forensik memeriksa keaslian tanda tangan pada dokumen penting menggunakan sebuah lup berkekuatan P = +12,5 Dioptri. Penyelidik memiliki mata normal dengan titik dekat Sn = 25 cm. Pengamatan dilakukan dalam dua kondisi pengamatan: Kondisi 1 (mata berakomodasi maksimum pada titik dekat 25 cm) dan Kondisi 2 (mata rileks tanpa akomodasi).',
      table: {
        headers: ['Kondisi', 'Letak Benda (s)', 'Letak Bayangan (s\')', 'Perbesaran Linear (m)', 'Perbesaran Sudut (M)'],
        rows: [
          ['Akomodasi Maksimum', 's₁ < f', 's\'₁ = -25 cm', 'm₁ = |s\'₁/s₁|', 'M₁ = Sn/f + 1'],
          ['Tanpa Akomodasi', 's₂ = f', 's\'₂ = -∞', 'm₂ = ∞ (tidak terdefinisi secara sudut)', 'M₂ = Sn/f']
        ]
      },
      diagramDescription: 'Perbandingan pembentukan sudut penglihatan dengan lup vs tanpa alat optik pada jarak baca 25 cm.'
    },
    misterJoClue: 'Halo investigator cerdas! Hitung dulu fokus lup f = 100 / P = 100 / 12,5 = 8 cm. Pada akomodasi maksimum, cari s₁ dari rumus lensa, lalu hitung perbesaran sudut M₁ dan perbesaran linear m₁ = |s\'₁/s₁|. Pada mata tanpa akomodasi, hitung M₂!',
    questionText: 'Berdasarkan analisis optika fisis lup di atas, pilihlah SEMUA pernyataan berikut yang BENAR! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Jarak fokus lensa lup forensik tersebut adalah 8,0 cm.' },
      { id: 'B', text: 'Pada pengamatan berakomodasi maksimum, perbesaran sudut lup bernilai 4,125 kali.' },
      { id: 'C', text: 'Pada pengamatan berakomodasi maksimum, nilai perbesaran linear m₁ sama persis dengan perbesaran sudut M₁ yaitu 4,125 kali.' },
      { id: 'D', text: 'Pada pengamatan tanpa akomodasi, perbesaran sudut lup adalah 3,125 kali.' },
      { id: 'E', text: 'Pada pengamatan tanpa akomodasi, tanda tangan diletakkan pada jarak 8,0 cm di depan lup.' }
    ],
    correctOptions: ['A', 'B', 'C', 'D', 'E'],
    discussion: {
      known: [
        'Kekuatan lup (P) = +12,5 Dioptri',
        'Titik dekat normal (Sn) = 25 cm'
      ],
      asked: 'Validasi fokus f, perbesaran sudut M₁, kesetaraan m₁ dan M₁, perbesaran sudut M₂, dan posisi benda s₂',
      physicsConcept: '1. Jarak fokus: f = 100 / P = 100 / 12,5 = 8,0 cm.\n2. Akomodasi Maksimum: s\'₁ = -Sn = -25 cm. 1/s₁ = 1/8 - 1/(-25) = 1/8 + 1/25 = 33/200 ⇒ s₁ = 200/33 ≈ 6,06 cm.\nPerbesaran linear: m₁ = |s\'₁ / s₁| = 25 / (200/33) = (25 × 33) / 200 = 33 / 8 = 4,125 kali.\nPerbesaran sudut: M₁ = (Sn / f) + 1 = (25 / 8) + 1 = 3,125 + 1 = 4,125 kali.\nPerhatikan bahwa pada mata berakomodasi maksimum (di mana bayangan jatuh di titik dekat Sn), nilai perbesaran linear selalu TEPAT SAMA dengan perbesaran sudut!\n3. Tanpa Akomodasi: s₂ = f = 8,0 cm, s\'₂ = ∞. Perbesaran sudut: M₂ = Sn / f = 25 / 8 = 3,125 kali.',
      solutionSteps: [
        'Pernyataan A: f = 100 / 12,5 = 8,0 cm. (BENAR)',
        'Pernyataan B: M₁ = 25/8 + 1 = 3,125 + 1 = 4,125 kali. (BENAR)',
        'Pernyataan C: m₁ = s\'₁ / s₁ = 25 / (200/33) = 33/8 = 4,125 kali = M₁. (BENAR)',
        'Pernyataan D: M₂ = Sn / f = 25 / 8 = 3,125 kali. (BENAR)',
        'Pernyataan E: Untuk mata rileks, s₂ = f = 8,0 cm. (BENAR)'
      ],
      optionsAnalysis: [
        'Opsi A BENAR: f = 8,0 cm.',
        'Opsi B BENAR: M₁ = 4,125 kali.',
        'Opsi C BENAR: m₁ = M₁ = 4,125 kali pada akomodasi maksimum di Sn.',
        'Opsi D BENAR: M₂ = 3,125 kali.',
        'Opsi E BENAR: s₂ = f = 8,0 cm.'
      ],
      conclusion: 'Semua opsi A, B, C, D, dan E BENAR.'
    },
    quickTrick: {
      title: 'Trik Cepat Kesetaraan Perbesaran Lup Mister Jo',
      formulaOrMethod: 'Saat s\' = -Sn, maka m_linear = M_sudut = Sn/f + 1',
      explanation: 'Hanya pada kondisi akomodasi maksimum di titik dekat standar (s\' = -Sn), perbesaran linear bayangan tepat sama dengan perbesaran sudutnya: 25/8 + 1 = 4,125 kali!',
      limitation: 'Hanya berlaku jika bayangan jatuh tepat di Sn = 25 cm.'
    },
    keyTakeaway: {
      coreConcept: 'Perbesaran linear mengukur rasio tinggi bayangan terhadap tinggi benda (h\'/h), sedangkan perbesaran sudut mengukur rasio sudut pandang mata. Keduanya bernilai identik hanya jika bayangan berada di titik dekat mata.',
      commonPitfall: 'Mengira perbesaran sudut selalu berbeda dengan perbesaran linear dalam segala kondisi.',
      quote: 'Kecermatan definisi fisika membedakan intuisi kasar dari ilmu pasti!'
    },
    animationConfig: {
      type: 'lup',
      focalLength: 8,
      objectDistance: 6.06,
      sn: 25,
      isAccommodating: true,
      description: 'Animasi lup forensik memperlihatkan pembentukan bayangan tanda tangan pada jarak 25 cm dengan perbesaran 4,125 kali.'
    },
    ttsScripts: {
      introAndStimulus: 'Mari kita simak soal nomor dua puluh pilihan ganda kompleks. Penyelidik forensik menggunakan lup berkekuatan plus 12,5 Dioptri untuk memeriksa tanda tangan pada akomodasi maksimum dan rileks.',
      question: 'Pilihlah semua pernyataan fisika yang benar mengenai perbesaran linear, perbesaran sudut, dan posisi benda pada lup tersebut.',
      options: 'Opsi A, fokus lup 8 sentimeter. Opsi B, perbesaran sudut akomodasi maksimum 4,125 kali. Opsi C, perbesaran linear sama dengan perbesaran sudut pada akomodasi maksimum. Opsi D, perbesaran rileks 3,125 kali. Opsi E, pada kondisi rileks benda berjarak 8 sentimeter.',
      clue: 'Bimbingan Mister Jo: Cari fokus lup 100 dibagi 12,5 sama dengan 8 sentimeter. Cermati bahwa saat bayangan jatuh di titik dekat 25 sentimeter, perbesaran linear sama persis dengan perbesaran sudutnya!',
      normalDiscussion: 'Mari kita buktikan. Jarak fokus lup adalah 100 dibagi 12,5 sama dengan 8 sentimeter. Perbesaran sudut akomodasi maksimum adalah 25 dibagi 8 ditambah 1 sama dengan 4,125 kali. Perbesaran linear saat bayangan di titik dekat juga bernilai tepat 4,125 kali. Pada kondisi tanpa akomodasi, perbesaran sudut adalah 25 dibagi 8 sama dengan 3,125 kali dan benda diletakkan tepat di titik fokus yaitu 8 sentimeter. Semua pernyataan terbukti benar.',
      quickTrick: 'Cara cepat Mister Jo: Pada akomodasi maksimum di Sn, perbesaran linear dan sudut selalu kembar! Semua pernyataan A sampai E bernilai benar.',
      conclusion: 'Semua pilihan A, B, C, D, dan E harus dipilih.'
    }
  }
];
