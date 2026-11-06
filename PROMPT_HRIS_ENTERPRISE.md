# PROMPT MASTER: SLIDE DECK HRIS ENTERPRISE

> **Status Sistem:** LIVE per 5 November 2026 di `portal.kolibrinektara.com`  
> **Folder Screenshot Web (13 Modul):** `./screenshots/hris/*.png`  
> **Folder Screenshot Mobile Asli (Aplikasi Karyawan):** `./screenshots/hris/mobile/*.jpeg`  
> **Petunjuk Penggunaan:** Salin (*copy-paste*) blok teks prompt di bawah ini ke platform AI (seperti **ChatGPT**, **Claude**, **Gamma App**, **Canva Magic Design**, atau **Pitch**) untuk menghasilkan slide presentasi tingkat enterprise.

---

```markdown
# Role & Instruction
Bertindaklah sebagai Senior HR Technology Consultant dan Enterprise Presentation Specialist. Buatkan materi presentasi (Slide Deck Pitch) yang persuasif, berbasis data, profesional, dan berorientasi solusi korporat untuk **Sistem HRIS Enterprise (Human Resource Information System)**.

---

## 🎯 Target Audiens & Nilai Tambah
- **Target Audiens**: Board of Directors (CEO, CHRO, CFO), General Manager HR/Operasional, Kepala Regional/Area, dan Pimpinan IT.
- **Nilai Tambah Utama**:
  1. **Zero Fraud & Kehadiran Akurat**: Anti Fake GPS (sensor scoring) + Face Recognition Liveness + Mesin Fingerprint ADMS.
  2. **Kepatuhan Pajak & Regulasi 100%**: PPh 21 TER (PMK 168/2023), BPJS Ketenagakerjaan/Kesehatan, UMK alert, dan lembur Kepmenaker 102/2004.
  3. **Efisiensi Skala Nasional**: Mengelola hierarki HO → Regional → Area → Cabang dengan kuota Manpower Planning (MPP).
  4. **Otomasi Terintegrasi**: Menghemat 80% waktu administrasi melalui Employee Self-Service (ESS), approval berjenjang, dan kalkulasi payroll massal.

---

## 🏢 Rincian 13 Modul HRIS Enterprise (Data Faktual Sistem)

### Modul 1: Core HR & Organisasi
- **Data Karyawan Lengkap**: Biodata pribadi, NIK/KK, keluarga, riwayat pendidikan, kontak darurat, repositori dokumen digital terenkripsi.
- **Kontrak PKWT/PKWTT**: Pengingat otomatis masa habis kontrak pada H-30, H-14, dan H-7.
- **Riwayat Karier**: Surat Peringatan (SP), mutasi cabang, promosi, dan riwayat jabatan terdokumentasi.
- **Struktur Organisasi Bertingkat**: HO → Regional → Area → Cabang, lengkap dengan penunjukan kepala unit masing-masing.
- **Grade Jabatan**: Standardisasi rentang gaji (*salary grade range*).
- **Kuota MPP (Manpower Planning)**: Formasi ideal vs aktual per cabang × jabatan beserta laporan pemenuhannya.

### Modul 2: Absensi (Time & Attendance) & Anti-Fraud Engine
- **Absen Mobile**: Verifikasi biometrik wajah (*Face Recognition + Liveness Detection*), geofence multi-lokasi, dan device lock (HP terdaftar).
- **Anti Fake GPS Engine**: Sistem penilaian fraud berbasis sensor (deteksi *mock provider*, *impossible travel*, sensor akselerometer, *stale GPS*, dan *signal jitter*).
- **Mesin Fingerprint Terpadu (ADMS)**: Data mesin fingerprint fisik langsung masuk ke absensi yang sama dengan aplikasi mobile secara real-time.
- **Multi Zona Waktu**: Sinkronisasi otomatis WIB, WITA, dan WIT dengan kalkulasi telat dan pulang cepat dalam satuan menit.
- **Kunjungan Kerja & Fleksibilitas**: Check-in tugas dinas dengan foto selfie + GPS, serta dukungan mode offline dan absen via HP rekan.
- **Keamanan Absensi**: Approval pergantian HP baru, daftar ulang wajah, dan log keamanan presensi.

### Modul 3: Shift & Jadwal Kerja
- **Shift Dinamis**: Pengaturan shift fleksibel, rotasi, hingga shift malam lintas hari (*cross-day*).
- **Roster Bulanan Per Cabang**: Dilengkapi generator pola jadwal otomatis per cabang.
- **Tukar Shift Peer-to-Peer**: Rekan kerja menyetujui terlebih dahulu, dilanjutkan dengan persetujuan atasan.
- **Kalender Hari Libur**: Kalender libur nasional resmi, cuti bersama pemerintah, dan libur khusus perusahaan.

### Modul 4: Cuti, Izin & Lembur (SPL)
- **Cuti Terstruktur**: Saldo aktual, kebijakan spesifik per jenis cuti, carry-over tahunan, dan kewajiban lampiran bukti.
- **Izin Jam Kerja**: Form permohonan izin datang terlambat, pulang lebih awal, dan keluar kantor sementara.
- **SPL Lembur Otomatis**: Tarif lembur dihitung otomatis sesuai regulasi **Kepmenaker 102/2004** yang diverifikasi silang dengan data jam absensi riil.

### Modul 5: Persetujuan Berjenjang (Multi-Tier Approval) & Delegasi
- **Alur Persetujuan Fleksibel**: Dapat disesuaikan per jenis pengajuan & cabang (Approver: Atasan langsung, Kepala Cabang/Area/Regional, atau HR).
- **Syarat Nominal**: Validasi limit nominal (mis. klaim reimburse > Rp 1.000.000 wajib persetujuan HR Head).
- **Delegasi Wewenang**: Pengalihan hak approval otomatis saat atasan sedang cuti atau dinas luar.
- **Mobile Approval Box**: Kotak persetujuan terpusat di mobile dengan push notification instan (FCM) pada setiap tahapan.

### Modul 6: Payroll Otomatis & Kepatuhan Regulasi
- **Sinkronisasi Presensi Riil**: Kalkulasi gaji otomatis menyerap data kehadiran, alpha, menit telat, jam lembur, saldo cuti, klaim, dan cicilan kasbon.
- **PPh 21 TER (PMK 168/2023)**: Perhitungan pajak TER bulanan, penyesuaian masa Desember, dan pembuatan rekap form 1721-A1.
- **BPJS Komprehensif**: Kalkulasi otomatis porsi karyawan dan perusahaan untuk BPJS Ketenagakerjaan (JKK, JKM, JHT, JP) & BPJS Kesehatan.
- **UMK Alert Guard**: Peringatan otomatis apabila gaji pokok yang di-generate berada di bawah ketentuan UMK cabang bersangkutan.
- **Generate Massal**: Pemrosesan gaji ribuan karyawan dalam hitungan detik melalui antrean sistem (*background queue worker*).
- **Distribusi Aman**: Slip gaji PDF berpassword langsung di HP karyawan, ekspor CSV transfer antar-bank resmi, dan jurnal akuntansi otomatis.

### Modul 7: Klaim, Kasbon & Layanan Mandiri (ESS)
- **Klaim Reimbursement**: Foto nota struk langsung dari smartphone dengan validasi plafon per grade jabatan.
- **Kasbon & Pinjaman Karyawan**: Simulasi tenor cicilan dengan pemotongan otomatis langsung pada periode slip gaji berikutnya.
- **Broadcast Pengumuman**: Distribusi pengumuman resmi nasional atau per cabang via push notification ke ponsel karyawan.

### Modul 8: Kinerja (Performance Management / KPI 360°)
- **KPI Berbobot**: Penilaian indikator kinerja individual dengan pembobotan, serta rekap skor rata-rata kinerja per cabang.
- **Evaluasi 360 Derajat**: Penilaian multi-sudut (penilaian mandiri/self, atasan langsung, dan rekan kerja sejawat).
- **Distribusi Hasil Kinerja**: Pemeringkatan kurva rating A–E sebagai rujukan objektif perpanjangan kontrak, promosi jabatan, atau pembagian bonus.

### Modul 9: Rekrutmen & Onboarding Cepat
- **Job Vacancy Berbasis MPP**: Pembukaan lowongan kerja baru dipicu otomatis oleh adanya kekosongan kuota formasi MPP per cabang.
- **Tahapan Seleksi Pelamar**: Pelacakan status kandidat (Seleksi Berkas → Wawancara → Tes Teknis → Offering Letter).
- **One-Click Onboarding**: Konversi pelamar diterima menjadi data karyawan, pembuatan akun login, plot jadwal shift, dan penerbitan kontrak PKWT dalam 1 klik.

### Modul 10: Aset Karyawan & Offboarding (Clearance Resign)
- **Serah-Terima Aset**: Pencatatan inventaris perusahaan yang diserahkan ke karyawan (laptop, kendaraan, seragam) beserta kondisi fisik dan nomor seri.
- **Resign Clearance Otomatis**: Lembar persetujuan keluar kerja digital yang memvalidasi checklist serah-terima aset, pelunasan sisa kasbon, klaim tertunda, dan transfer pekerjaan.

### Modul 11: Dashboard Eksekutif & Smart AI Copilot
- **People Analytics Nasional**: Pemantauan metrik makro (Headcount total, rasio turnover, tren keterlambatan, pemenuhan MPP, dan akumulasi biaya gaji).
- **Multi-Level Drill Down**: Filter analitik per Regional, Area, hingga Cabang spesifik.
- **AI Copilot Cerdas**: Tanya data HR dengan bahasa manusia sehari-hari. Dilindungi oleh arsitektur **SafeQueryService** (eksekusi kueri dibatasi hanya `SELECT`, blok DML/DDL) dan pembatasan hak akses berbasis peran (RBAC).

### Modul 12: Integrasi Sistem & Keamanan Data
- **Open API v1**: Antarmuka terstandarisasi untuk koneksi ke sistem eksternal (ERP Korporat, Data Warehouse, PowerBI) menggunakan API Key klien.
- **Webhook Otomatis**: Trigger realtime ke aplikasi lain saat terjadi event (karyawan baru, resign, cuti disetujui, payroll final).
- **Enkripsi Data Pribadi**: Enkripsi tingkat kolom untuk data sensitif (NIK, NPWP, Nomor Rekening Bank, nomor BPJS).
- **Audit Trail & RBAC**: Pencatatan log komprehensif atas setiap perubahan data sensitif serta hak akses per peran dan cabang.

### Modul 13: Aplikasi Mobile Karyawan (Unified ESS Portal)
- Satu aplikasi mobile terpadu di saku karyawan untuk: presensi selfie, pengajuan cuti/izin/lembur, melihat jadwal & tukar shift, unduh slip gaji berpassword, ajukan klaim/kasbon, pantau KPI, baca pengumuman, dan approval cepat bagi atasan.

---

## 🚀 Roadmap Pengembangan Berikutnya
1. **Penyimpanan Cloud & Backup Offsite**: Penyimpanan foto presensi/nota di cloud storage dengan backup berkala.
2. **Integrasi Format Bank Resmi**: Penyesuaian format file batch payroll spesifik untuk seluruh bank BUMN dan swasta utama.
3. **Modul Perjalanan Dinas (Official Travel)**: Pengelolaan pengajuan tugas luar kota, tiket, akomodasi, dan uang harian (per-diem).
4. **Stress-Test 5.000 Karyawan**: Uji beban konkurensi absensi dan payroll massal untuk skala enterprise multinasional.

---

## 📑 Struktur Slide Presentasi (16 Slide Tersusun Akurat 1:1)

Setiap slide modul di bawah dipasangkan secara akurat dengan file screenshot di folder `./screenshots/hris/`:

| No. Slide | Judul & Topik Slide | Konten Kunci & Metrik | File Screenshot Pendukung |
| :---: | :--- | :--- | :--- |
| **01** | **Cover**: HRIS Enterprise Ecosystem | Transformasi Human Capital: Terintegrasi, Patuh Regulasi, & Zero Fraud | *Mockup branding portal* |
| **02** | **Modul 1: Core HR & Organisasi** | Hierarki HO-Cabang, Manajemen PKWT/PKWTT, Kuota MPP vs Aktual | `screenshots/hris/01-core-hr-organisasi.png` |
| **03** | **Modul 2: Absensi & Kehadiran Riil** | Presensi mobile, multi-geofence, shift multi-zona, integrasi ADMS Fingerprint | `screenshots/hris/02-absensi-time-attendance.png`<br>📱 Mobile: `screenshots/hris/mobile/05-mobile-absensi-geofence.jpeg` |
| **04** | **Fitur Khusus: Keamanan Absensi Anti-Fraud** | Sensor Anti Fake GPS, Face Recognition + Liveness Detection, Device Lock | `screenshots/hris/02b-keamanan-absensi-antifraud.png`<br>📱 Mobile: `screenshots/hris/mobile/06-mobile-verifikasi-wajah-liveness.jpeg` |
| **05** | **Modul 3: Shift Dinamis & Penjadwalan Roster** | Shift malam lintas hari, auto pattern roster bulanan, alur tukar shift P2P | `screenshots/hris/03-shift-dan-jadwal.png` |
| **06** | **Modul 4: Cuti, Izin Jam Kerja & SPL Lembur** | Saldo cuti carry-over, izin jam kerja, kalkulasi lembur Kepmenaker 102/2004 | `screenshots/hris/04-cuti-izin-lembur.png` |
| **07** | **Modul 5: Alur Persetujuan & Delegasi Wewenang** | Multi-tier approval per cabang, batasan nominal, delegasi cuti, push FCM | `screenshots/hris/05-persetujuan-berjenjang-delegasi.png` |
| **08** | **Modul 6: Payroll Otomatis & Kepatuhan Regulasi** | PPh 21 TER (PMK 168/2023), BPJS lengkap, UMK Guard, Slip Gaji Password | `screenshots/hris/06-payroll-dan-kepatuhan.png` |
| **09** | **Modul 7: Klaim Reimbursement & Kasbon ESS** | Foto nota struk, limit plafon grade, kasbon cicilan potong gaji otomatis | `screenshots/hris/07-klaim-kasbon-layanan-mandiri.png` |
| **10** | **Modul 8: Kinerja & Penilaian KPI 360°** | Bobot KPI individu, rekap performa per cabang, evaluasi 360° kurva A–E | `screenshots/hris/08-kinerja-performance-management.png` |
| **11** | **Modul 9: Rekrutmen & Onboarding Satu Klik** | Lowongan berbasis gap MPP, pipeline tahapan pelamar, onboarding otomatis | `screenshots/hris/09-rekrutmen-dan-onboarding.png` |
| **12** | **Modul 10: Manajemen Aset & Clearance Resign** | Inventaris aset karyawan, checklist clearance resign (kasbon/klaim/aset) | `screenshots/hris/10-aset-dan-offboarding.png` |
| **13** | **Modul 11: Dashboard Eksekutif & Smart AI** | People analytics nasional, drill-down cabang, AI Copilot query aman | `screenshots/hris/11-dashboard-eksekutif-dan-ai.png` |
| **14** | **Modul 12: Open API v1, Webhook & Keamanan** | API Key klien, webhook event-driven, enkripsi data NIK/BPJS, audit log | `screenshots/hris/12-integrasi-dan-keamanan.png` |
| **15** | **Modul 13: Aplikasi Mobile Karyawan** | Unified ESS portal di smartphone: absen, slip, klaim, izin, & approval | `screenshots/hris/13-aplikasi-mobile-karyawan.png`<br>📱 Mobile Set:<br>• `screenshots/hris/mobile/01-mobile-beranda.jpeg`<br>• `screenshots/hris/mobile/02-mobile-menu-kepegawaian.jpeg`<br>• `screenshots/hris/mobile/03-mobile-menu-payroll-ess.jpeg` |
| **16** | **Roadmap, Kesiapan Skala & Penutup** | Target 5.000 karyawan, modul dinas luar, kesimpulan ROI, & sesi Q&A | *Executive Summary Card* |

---

## 🎨 Panduan Visual & Desain Slide
- **Layout Slide Standar (16:9 Widescreen)**:
  - Header: Kategori modul di kiri atas (badge kecil: mis. `MODUL 06 — PAYROLL & KEPATUHAN`) + Judul tegas (*Action Title*).
  - 2/5 Kolom Kiri: 3–4 bullet poin kunci (*bold* pada 2 kata pertama, orientasi manfaat bisnis).
  - 3/5 Kolom Kanan: Tampilkan screenshot UI terkait dalam bingkai mockup browser/ponsel bersih dengan bayangan lembut (*soft drop-shadow*).
  - Footer Callout: Kotak metrik/highlight (mis. *"Kepatuhan 100% terhadap PMK 168/2023 & BPJS"*).
- **Tema Warna**:
  - Primary Background: Putih Bersih `#FFFFFF` & Card Light Gray `#F8FAFC`.
  - Brand Dark: Slate Navy `#0F172A` (untuk teks heading & navbar).
  - Accent Color: Cyan Vibrant `#06B6D4` & Sky Blue `#0EA5E9`.
  - Status Indicators: Emerald Green `#10B981` (Sukses/Live), Amber `#F59E0B` (Warning/Alert).
```
