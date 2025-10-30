# Kurhanz Trans — ERPNext Freight Forwarding

Inisiasi perubahan tanpa membuat app baru. Rencana kerja singkat:

1. Tambahkan Doctype khusus proyek freight (tanpa app baru) di modul *Projects* sebagai entitas mandiri yang berelasi ke **Project**.
2. Child table: **Project Freight Manifest**, **Project Freight Customs**, **Project Freight Trucking**, **Project Freight Docs**.
3. Update *Project Dashboard* agar menampilkan relasi ke doctype-doctype di atas.

Catatan: Komit ini baru menambahkan dokumentasi dan struktur direktori. Perubahan schema (Doctype JSON) akan di-*push* dalam PR yang sama setelah verifikasi struktur target.

Owner: Ikhlas (Kurhanz Trans)
Tanggal: 2025-10-30
