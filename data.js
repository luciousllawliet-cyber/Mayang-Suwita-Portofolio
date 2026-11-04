/* =====================================================
   DATA PORTOFOLIO
   Hanya file ini yang perlu kamu edit untuk menambah karya.
   Cara tambah: salin satu blok { ... }, tempel di bawahnya
   (jangan lupa koma di antara blok), lalu ganti isinya.
   ===================================================== */

const PORTFOLIO = {

  /* ---------- LINK CHANNEL YOUTUBE ---------- */
  channelYoutube: "https://www.youtube.com/@channelkamu",

  /* ---------- 1. BERITA YANG PERNAH TERBIT ----------
     media   : nama media tempat terbit
     tanggal : format TAHUN-BULAN-TANGGAL (contoh 2026-10-15)
     judul   : judul berita (boleh dikosongkan: judul: "")
     lead    : paragraf pembuka berita
     link    : alamat berita di media tersebut
     Urutan otomatis: yang terbaru tampil paling atas. */
  berita: [
    {
      media: "Kumparan",
      tanggal: "2026-09-03",
      judul: "Dapat Doorprize Senang, Menang Lomba Girang, Tapi Kok Bisa-Bisanya Jadi Judi?",
      lead: "Ketuk-ketuk terdengar dari pintu satu ke pintu lainnya. Ketika pintu dibuka, ternyata pihak karang taruna yang datang, mengabarkan bahwa perayaan Agustusan akan segera tiba. Setiap warga pun ditawarkan untuk menghibahkan sejumlah uangnya bagi acara yang akan digelar dalam rangka perayaan tersebut.",
      gambar: "berita1.jpg",
      link: "https://kumparan.com/mayang-suwita-1687776104546406161/285v0LprJZ8?utm_source=Desktop&utm_medium=copy-to-clipboard&shareID=HcA1398h3d77"
    },
    {
      media: "Kumparan",
      tanggal: "2025-02-15",
      judul: "Sebelum Ke Kampung Inggris Pare, Simak 9 Fakta Ini Dulu!",
      lead: "Menemukan cinta baru hanya bonus dalam perjalananmu. Penulis ingin menekankan bahwa untuk tinggal di Kampung Inggris, kamu tidak perlu khawatir ataupun ragu. Kamu akan merasakan kenyamanan tinggal di sini, bukan dari love story-nya namun dari segi yang lain. Penulis merangkum beberapa hal yang akan membuatmu geleng kepala dan betah di Kampung Inggris.",
      gambar: "berita2.jpg",
      link: "https://kumparan.com/mayang-suwita-1687776104546406161/24T5iceCZsB?utm_source=Desktop&utm_medium=copy-to-clipboard&shareID=CRr9GymEdxYN"
    },
    {
      media: "Kumparan",
      tanggal: "2024-09-08",
      judul: "Arahkan Perhatian pada Mereka yang Tak Terlihat",
      lead: "Sosin, caisim  begitu banyak penyebutan untuk sayuran yang sering dijadikan makanan seblak menjadi lebih berwarna. Sosin yang hampir mirip dengan pokcoy memiliki badan yang lebih ramping dan rasanya pun tidak seperti pokcoy yang terkadang sedikit pahit di lidah. ",
      gambar: "berita3.jpg",
      link: "https://kumparan.com/mayang-suwita-1687776104546406161/23R0Wcs0Mfj?utm_source=Desktop&utm_medium=copy-to-clipboard&shareID=BfyXypw6tYBH"
    },
     {
      media: "Kumparan",
      tanggal: "2024-07-31",
      judul: "Kewer: Tanaman Multiguna Khas Sukalaksana, Kini Jadi Motif Batik Unik Nan Cantik",
      lead: "Garut selama ini terkenal dengan Batik Garutan yang memiliki motif dan warna-warna khasnya. Tentu hal ini, turut memperkaya keragaman batik Indonesia yang saat ini sudah mendunia, sejajar dengan Batik Mega Mendung Cirebon, Batik Pekalongan, Batik Kawung, dan lain sebagainya.",
      gambar: "berita4.jpg",
      link: "https://kumparan.com/mayang-suwita-1687776104546406161/23EFy0aTGQj?utm_source=Desktop&utm_medium=copy-to-clipboard&shareID=yg71lvOJsCzy"
    },
     {
      media: "Kumparan",
      tanggal: "2026-07-04",
      judul: "Masa Depan Hijau: Implementasi Ekonomi Sirkular di Indonesia",
      lead: "Ini fakta. Sebanyak 7,2 ton sampah di Indonesia belum terkelola dengan baik. Hal ini disampaikan melalui laporan data Sistem Informasi Pengelolaan Sampah Nasional (SIPSN) Kementerian Lingkungan Hidup dan Kehutanan (KLHK) pada tahun 2022 yang merupakan hasil input dari 202 kab/kota se-Indonesia.",
      gambar: "berita5.jpg",
      link: "https://kumparan.com/mayang-suwita-1687776104546406161/233gifb0hQn?utm_source=Desktop&utm_medium=copy-to-clipboard&shareID=kajZ1N51Fj8v"
    },
     {
      media: "Kumparan",
      tanggal: "2024-07-03",
      judul: "Seni dari Limbah: Langkah Menuju Ekonomi Sirkular",
      lead: "Berangkat dari limbah kaleng, salah satu warga Balonggede, Kota Bandung bernama Ade Syarifudin menciptakan miniatur yang memukau. Berbekal hobi dan alat sederhana seperti gunting dan lem, Ade mampu membuat berbagai miniatur seperti vespa, robot, pesawat terbang, hingga motor moge.",
      gambar: "berita6.jpg",
      link: "https://kumparan.com/mayang-suwita-1687776104546406161/232n8JDRdQt?utm_source=Desktop&utm_medium=copy-to-clipboard&shareID=eBzHRxYv0cMs"
    },
     {
      media: "Kumparan",
      tanggal: "2024-05-05",
      judul: "Rute Murah dari Bandung Ke Jakarta Ala Mahasiswa Unpad, Cuma Rp 20 Ribu",
      lead: "Lagu Naik Kereta Api yang diciptakan Ibu Sud memang biasa dinyanyikan anak kecil, tapi untuk ajakan Ibu Sud naik kereta kita harus mau. Apalagi kereta api membuat perjalanan kita terbebas dari kemacetan lalu lintas. ",
      gambar: "berita7.jpg",
      link: "https://kumparan.com/mayang-suwita-1687776104546406161/20g2144T1a1?utm_source=Desktop&utm_medium=copy-to-clipboard&shareID=bge1euJR4NZW"
    },
    {
      media: "Kumparan",
      tanggal: "2024-04-15",
      judul: "Melongok Kisah Buruh Garmen yang Sempat Dikerubungi Warga Jelang Lebaran Kemarin",
      lead: "Jelang lebaran, di saat emak-emak gelisah karena kebesaran baju, disisi lain ada orang tersenyum simpul, mencium bau-bau hasilkan uang. Siapa lagi kalau bukan sang tailor.",
      gambar: "berita8.jpg",
      link: "https://kumparan.com/mayang-suwita-1687776104546406161/22YDpfi122z?utm_source=Desktop&utm_medium=copy-to-clipboard&shareID=gRGACBeciXT6"
    }
  ],

  /* ---------- 2. DESAIN GRAFIS (infografis / konten IG) ----------
     jenis  : label kecil, misal "Infografis" atau "Carousel IG"
     slides : daftar gambar. Satu gambar = tampil biasa,
              lebih dari satu = otomatis jadi carousel (geser).
              Ukuran terbaik 1080x1350 (rasio 4:5 seperti IG).
     link   : (opsional) alamat postingan aslinya, kosongkan "" kalau tidak ada */
  desain: [
    {
      judul: "Carousel: Selaknat Apa Sih Zionis?",
      jenis: "Konten Instagram @Aww_Unpad",
      deskripsi: "Konten Instagram ini merupakan hasil kepanitiaan saya dalam AAW (Al-Aqsa Awareness Week) x P3 (Pekan Peduli Palestina) 2026. Saya berperan sebagai anggota tim media dengan tanggung jawab pada pembuatan konten desain grafis. Konten ini diunggah pada 2 November 2026.",
      slides: [
        "selaknatapasihsionis1.png",
        "selaknatapasihsionis2.png",
        "selaknatapasihsionis3.png",
        "selaknatapasihsionis4.png",
        "selaknatapasihsionis5.png"
      ],
      link: "https://www.instagram.com/p/DfOb5q7DwbS/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
    },
    {
      judul: "Carousel: 5 Rekomendasi Perpustakaan Umum di Kota Bandung",
      jenis: "Konten Instagram @alalaradio",
      deskripsi: "Konten Instagram ini  merupakan konten minggu ketiga dari tugas mata kuliah Jurnalisme Digital, diupload pada 25 November 2024. Dalam pengerjaannya, saya bertugas sebagai editor dan berkolaborasi dengan tim yang terdiri dari enam anggota.",
      slides: [
        "5rekomendasiperpustakaanumumdikotabandung1.jpg",
        "5rekomendasiperpustakaanumumdikotabandung2.jpg",
        "5rekomendasiperpustakaanumumdikotabandung3.jpg",
        "5rekomendasiperpustakaanumumdikotabandung4.jpg",
        "5rekomendasiperpustakaanumumdikotabandung5.jpg",
        "5rekomendasiperpustakaanumumdikotabandung6.jpg"
      ],
      link: "https://www.instagram.com/p/DCx2eTqzLp4/?cplk=MXR6b3NvY2R1MTV6eQ=="
    },
    {
      judul: "Carousel: Apa Itu Kota Inklusi",
      jenis: "Konten Instagram @alalaradio",
      deskripsi: "Konten Instagram ini merupakan konten minggu kedua dari tugas mata kuliah Jurnalisme Digital, diunggah pada 18 November 2024. Dalam pengerjaannya, saya bertugas sebagai editor dan berkolaborasi dengan tim yang terdiri dari enam anggota",
      slides: [
        "apaitukotainklusi1.jpg",
        "apaitukotainklusi2.jpg",
        "apaitukotainklusi3.jpg",
        "apaitukotainklusi4.jpg",
        "apaitukotainklusi5.jpg",
        "apaitukotainklusi6.jpg",
        "apaitukotainklusi7.jpg"
      ],
      link: "https://www.instagram.com/p/DCfsit3zC9J/?igsh=MXdzZzUwbXdnMWxvZw=="
    },
    {
      judul: "Carousel: Kenalan Sama Teluk Bus",
      jenis: "Konten Instagram @alalaradio",
      deskripsi: "Konten Instagram ini merupakan konten minggu pertama dari tugas mata kuliah Jurnalisme Digital, diunggah pada 11 November 2024. Dalam pengerjaannya, saya bertugas sebagai editor dan berkolaborasi dengan tim yang terdiri dari enam anggota",
      slides: [
        "kenalansamatelukbus1.jpg",
        "kenalansamatelukbus2.jpg",
        "kenalansamatelukbus3.jpg",
        "kenalansamatelukbus4.jpg",
        "kenalansamatelukbus5.jpg",
        "kenalansamatelukbus6.jpg"
      ],
      link: "https://www.instagram.com/p/DCNsEEwTFFA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      judul: "Ayo Kenal Lebih Dekat dengan Perpustakaan Digital!",
      jenis: "Infografis",
      deskripsi: "Konten Facebook @alalaradio ini merupakan konten minggu ketiga dari tugas mata kuliah Jurnalisme Digital, diunggah pada 23 November 2024. Dalam pengerjaannya, saya bertugas sebagai editor dan berkolaborasi dengan tim yang terdiri dari enam anggota",
      slides: [
        "Ayo Kenal Lebih Dekat dengan Perpustakaan Digital!.jpg"
      ],
      link: "https://www.facebook.com/share/p/15C8HYs1hw/"
    },
     {
      judul: "Apa Itu Skrining Pra Nikah?",
      jenis: "Infografis",
      deskripsi: "Konten Facebook @alalaradio ini merupakan konten minggu keempat dari tugas mata kuliah Jurnalisme Digital, diunggah pada 30 November 2024. Dalam pengerjaannya, saya bertugas sebagai editor dan berkolaborasi dengan tim yang terdiri dari enam anggota",
      slides: [
        "Apa Itu Skrining Pra Nikah.png"
      ],
      link: "https://www.facebook.com/share/p/15C8HYs1hw/"
    },
     {
      judul: "Mengenal Ayam Pelung, Warisan Genetik Unggul Indonesia",
      jenis: "Infografis - Konten Navigasi.co",
      deskripsi: "Konten infografis ini merupakan bagian dari proyek magang saya bersama Divia TV pada periode Juli–September untuk pengembangan website navigasi.co. Dalam tim yang terdiri dari tiga orang, saya bertanggung jawab pada bidang UI/UX, pembuatan infografis, serta perancangan grand design dan logo.",
      slides: [
        "Mengenal Ayam Pelung, Warisan Genetik Unggul Indonesia.png"
      ],
      link: "https://navigasi.co/infografik/mengenal-ayam-pelung%2C-warisan-genetik-unggul-indonesia-30"
    },
    {
      judul: "Analisis Relavansi Media The Trueman Show Film",
      jenis: "Infografis - Konten Navigasi.co",
      deskripsi: "Infografis ini merupakan bagian dari tugas mata kuliah Logika Media dan Bahasa Jurnalistik.",
      slides: [
        "Jurnalistik-B_Kelompok 12_Analisis Logika Media_The Truman Show1.jpg"
      ],
    },
    {
      judul: "Ayo Kenal Lebih Dekat dengan Perpustakaan Digital!",
      jenis: "Infografis - Konten Navigasi.co",
      deskripsi: "Konten infografis ini merupakan bagian dari proyek magang saya bersama Divia TV pada periode Juli–September untuk pengembangan website navigasi.co. Dalam tim yang terdiri dari tiga orang, saya bertanggung jawab pada bidang UI/UX, pembuatan infografis, serta perancangan grand design dan logo.",
      slides: [
        "Infografis Ayo Kenal Lebih Dekat dengan Perpustakaan Digital!.png"
      ],
      link: "https://navigasi.co/kanal-infografik.php"
    },
    {
      judul: "Green Campus: Upaya Menuju Kampus Ramah Lingkungan dan Bekerlanjutan",
      jenis: "Infografis - Projek Kerjasama Dosen Fakultas Ilmu Komunikasi",
      deskripsi: "Infografis ini merupakan proyek kolaborasi bersama dosen di Fakultas Ilmu Komunikasi Universitas Padjadjaran dalam mendukung program Green Campus di Fikom Unpad.",
      slides: [
        "File Asli Infografis 1.jpg"
      ],
    },
    {
      judul: "Apa itu Skrining Pranikah?",
      jenis: "Infografis - Konten Navigasi.co",
      deskripsi: "Konten infografis ini merupakan bagian dari proyek magang saya bersama Divia TV pada periode Juli–September untuk pengembangan website navigasi.co. Dalam tim yang terdiri dari tiga orang, saya bertanggung jawab pada bidang UI/UX, pembuatan infografis, serta perancangan grand design dan logo.",
      slides: [
        "Infografis Apa itu Skrining Pranikah_.png"
      ],
      link: "https://navigasi.co/kanal-infografik.php"
    },
    {
      judul: "Perjalanan Dosen Jurnalistik Unpad Ikut Misi Menembus Blokade Gaza",
      jenis: "Infografis - Konten Navigasi.co",
      deskripsi: "Konten infografis ini merupakan bagian dari proyek magang saya bersama Divia TV pada periode Juli–September untuk pengembangan website navigasi.co. Dalam tim yang terdiri dari tiga orang, saya bertanggung jawab pada bidang UI/UX, pembuatan infografis, serta perancangan grand design dan logo.",
      slides: [
        "infografis Perjalanan Dosen Jurnalistik Unpad Ikut Misi Menembus Blokade Gaza.png"
      ],
      link: "https://navigasi.co/kanal-infografik.php"
    },
    {
      judul: "Green Campus: Upaya Menuju Kampus Ramah Lingkungan dan Bekerlanjutan",
      jenis: "Infografis - Projek Kerjasama Dosen Fakultas Ilmu Komunikasi",
      deskripsi: "Infografis ini merupakan proyek kolaborasi bersama dosen di Fakultas Ilmu Komunikasi Universitas Padjadjaran dalam mendukung program Green Campus di Fikom Unpad.",
      slides: [
        "File Asli Infografis 2.jpg"
      ],
    },
    {
      judul: "Pimpinan Fikom Unpad dari Masa ke Masa",
      jenis: "Infografis - Konten Navigasi.co",
      deskripsi: "Konten infografis ini merupakan bagian dari proyek magang saya bersama Divia TV pada periode Juli–September untuk pengembangan website navigasi.co. Dalam tim yang terdiri dari tiga orang, saya bertanggung jawab pada bidang UI/UX, pembuatan infografis, serta perancangan grand design dan logo.",
      slides: [
        "Infografis pimpinan fikom Unpad dari masa ke masa.png"
      ],
      link: "https://navigasi.co/kanal-infografik.php"
    },
    {
      judul: "Fakta Menarik tentang Guru Besar Fikom",
      jenis: "Infografis - Konten Navigasi.co",
      deskripsi: "Konten infografis ini merupakan bagian dari proyek magang saya bersama Divia TV pada periode Juli–September untuk pengembangan website navigasi.co. Dalam tim yang terdiri dari tiga orang, saya bertanggung jawab pada bidang UI/UX, pembuatan infografis, serta perancangan grand design dan logo.",
      slides: [
        "Infografis Fakta Menarik tentang Guru Besar Fikom.png"
      ],
      link: "https://navigasi.co/kanal-infografik.php"
    }
  ],

  /* ---------- 3. VIDEO (embed dari YouTube) ----------
     youtubeId : kode di akhir link video.
     Contoh: https://www.youtube.com/watch?v=M7lc1UVf-VE
             -> youtubeId adalah  M7lc1UVf-VE
     Link pendek youtu.be/ABC123 -> kodenya  ABC123 */
  video: [
    {
      judul: "Sepak Bola Pererat Hubungan UB dan Pemkab Lamongan",
      deskripsi: "Konten ini saya produksi selama magang di DiviaTV, dalam rangka memproduksi konten untuk TV Kampus Network. Tanggung jawab saya mencakup pengeditan audio untuk voice over hingga tahap quality control sebelum konten tayang. Beberapa karya juga saya kerjakan secara mandiri, mulai dari pengisi suara hingga proses penyuntingan akhir. Selain itu, saya turut terlibat dalam penggarapan sejumlah konten untuk program Berita21",
      youtubeId: "GTxDPQ4u48s"
    },
    {
      judul: "Mahasiswa KKN Usm Gelar Penyuluhan Bahaya Phishing, Scamlink, Dan Pinjol Di Kelurahan Beji",
      youtubeId: "UuGIoKmee3w"
    },
     {
      judul: "Kpk Harap Korupsi Di Dunia Pendidikan Hilang",
      youtubeId: "r422vr8aZA8"
    },
     {
      judul: "Kesan dan Harapan Mahasiswa Baru Di Acara Pamuka 2025 Day 1",
      youtubeId: "s22U_Xsf1_g"
    },
     {
      judul: "Fikom Unpad Turut Serta Dalam Unpad International Summer Program 2025",
      youtubeId: "7tpH0WEIo58"
    },
     {
      judul: "Hak Cipta Jadi Sorotan, Musisi dan Pengusaha Terjerat Polemik Royalti",
      youtubeId: "c7YjNzIUMSk"
    },
     {
      judul: "Sambutan Rektor Unpad Dalam Upacara Penerimaan Mahasiswa Baru 2025",
      youtubeId: "dlNcjOH6ykE"
    },
    {
      judul: "Rektor Unpad Beri Apresiasi Untuk Mahasiswa Dan Ukm Berprestasi Di Prabu 2025",
      youtubeId: "qf8VLojTJSc"
    },
    {
      judul: "Kapolda Sulsel Dan Wakil Ketua Kpk, Tanamkan Integritas Di Pkkmb Unhas 2025",
      youtubeId: "oRHzIuaLBwk"
    },
    {
      judul: "Kenali Budaya Semarang, The Summer Space Day 2 Digelar Meriah",
      youtubeId: "XhxO4aAijQE"
    },
    {
      judul: "Student Day Meriahkan Hari Terakhir Prabu 2025",
      youtubeId: "dlNcjOH6ykE"
    },
    {
      judul: "Student Day Meriahkan Hari Terakhir Prabu 2025",
      youtubeId: "8ZIam5rKTdw"
    },
    {
      judul: "Student Day Meriahkan Hari Terakhir Prabu 2025",
      youtubeId: "dlNcjOH6ykE"
    },
    {
      judul: "Student Day Meriahkan Hari Terakhir Prabu 2025",
      youtubeId: "dlNcjOH6ykE"
    }
  ],

  /* ---------- 4. WEBSITE YANG SUDAH PERNAH DIBUAT ----------
     gambar : screenshot halaman depan website (disarankan).
              Kalau dikosongkan "", otomatis dibuatkan preview
              dari alamat websitenya (kadang tidak muncul). */
  website: [
    {
      nama: "Navigasi.co",
      deskripsi: "Selama magang di Divia TV Unpad, saya menawarkan, menginisiasi dan mengembangkan Navigasi.co, sebagai platform berita berbasis web yang dibangun dari nol bersama tim beranggotakan tiga orang. Dalam proyek ini, saya mengambil peran sebagai UI/UX Designer dengan tanggung jawab merancang pengalaman pengguna, mulai dari menyusun struktur informasi, merancang antarmuka dan navigasi, hingga mengembangkan prototipe interaktif menggunakan Figma. Saya berupaya menghadirkan pengalaman membaca berita yang fresh, nyaman, dan mudah diakses melalui desain visual yang terstruktur serta animasi yang mendukung interaksi pengguna. Selain itu, saya turut memproduksi infografis sebagai alternatif penyajian informasi jurnalistik yang lebih komunikatif dan menarik secara visual.",
      url: "https://navigasi.co",
      gambar: "TV - 1.png",
    }
  ],

  /* ---------- 5. DESAIN WEBSITE (DUMMY FIGMA) ----------
     figmaUrl : link file Figma-mu. Di Figma klik Share, lalu atur
                "Anyone with the link can view", dan salin link-nya. */
  figma: [
    {
      judul: "Desain Projek Website Portal Berita 24 Hoegeng ",
      deskripsi: "Prototipe website 24 Hoegeng merupakan hasil tugas mata kuliah Media Proyek yang menggabungkan pengembangan media berita dengan produksi konten jurnalistik, termasuk berita mendalam. Berita tersebut kemudian diintegrasikan ke dalam prototipe website. Proyek ini dikerjakan secara kolaboratif oleh tim beranggotakan tujuh orang, dengan saya bertugas sebagai editor.",
      figmaUrl: "https://www.figma.com/proto/CkWeuT1b9lKfmgn7u4JfzQ/Kewirus?node-id=482-499&t=aaJ2NIuePe2ALNuD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
    },
    {
      judul: "Desain Konten Konvergensi Berita Mendalam tentang Polemik Tol Cisumdawu Belum Usai: Warga Telantar, Amdal Terlupakan",
      deskripsi: "Desain konten berita mendalam ini dikemas dalam bentuk konvergensi, yang menggabungkan teks, audio, gambar, visual, serta elemen interaktif untuk menciptakan pengalaman membaca yang lebih hidup dan melibatkan pembaca. Proyek ini merupakan tugas mata kuliah Media Proyek pada semester 6, dikerjakan secara kolaboratif oleh tim beranggotakan tujuh orang dengan saya sebagai editor dan merangkap sebagai reporter. Seluruh desain dan alur interaktifnya dikembangkan menggunakan Figma.",
      figmaUrl: "https://www.figma.com/proto/MlthCjbIboJUtPePYeROev/Untitled?node-id=29-1262&t=jV89IuQierYJTciP-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=181%3A469"
    }
  ],

  /* ---------- 6. SERTIFIKAT LOMBA ----------
     gambar : foto/scan sertifikat (JPG atau PNG), bisa diklik untuk diperbesar */
  sertifikat: [
    {
      judul: "Juara 3 Lomba Penulisan Jurnalisme",
      penyelenggara: "Comminfest 2024 Artriwara Universitas Atma Jaya Yogjakarta",
      tahun: "2024",
      gambar: "Mayang Suwita (Atriwara Juara 3).png"
    },
    {
      judul: "Pemenang Nominasi Mahasiswa Terbaik pada Penulisan Jurnalisme",
      penyelenggara: "Kabiner Sejiwa Himpunan Mahasiswa Jurnalistik Fikom Unpad",
      tahun: "2024",
      gambar: "Mayang Suwita Penulisan Jurnalisme_page-0001.jpg"
    },
    {
      judul: "Pemenang Nominasi Kelompok Terbaik pada Jurnalisme Audio Visual",
      penyelenggara: "Kabiner Sejiwa Himpunan Mahasiswa Jurnalistik Fikom Unpad",
      tahun: "2024",
      gambar: "Mayang Suwita JAV_page-0001.jpg"
    }
  ]
};
