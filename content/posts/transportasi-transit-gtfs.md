---
title: Transportasi Transit dengan GTFS
author: Andi
date: '2020-03-23'
slug: transportasi-transit
categories:
  - R
  - transportasi
tags:
  - analisis
  - sumber
---

**General Transit Feed Specification (GTFS)** mengatur struktur data tentang transportasi publik. Mencakup lokasi perhentian (_stops_), rute angkutan (_routes_), perjalanan/pergerakan (_trips_), titik transit (_transfer_) jadwal perjalanan (_timetables_), waktu lainnya (_stop times_, _calendar_, _calendar dates_), tentang pengelola (_agency_), dan lain sebagainya.

Format data menggunakan bentuk berkas teks (`txt`/`csv`) yang dibundel menjadi arsip `zip`.

Proyek pengembangan format data GTFS diinisiasi oleh lembaga non-profit [MobilityData](https://mobilitydata.org/) yang berpusat di Kanada. Format ini dibuat untuk bisa diterapkan pada piranti (_tools_), untuk berbagai layanan dan dokumentasi.

Spesifikasi data ini juga digunakan oleh pengembang Google (khususnya Google Transit) agar bisa dimanfaatkan oleh berbagai teknologi melalui sebuah antarmuka pemprograman aplikasi atau API (_application programming interface_).

![Diagram kelas data gtfs](http://tidytransit.r-transit.org/articles/figures/GTFS_class_diagram.svg.png)

\*Diagram kelas data `gtfs` dari [r-transit](http://tidytransit.r-transit.org)

Pada pemrograman R data dengan spesifikasi ini dapat dikelola dengan bantuan library `tidytransit` dan `gtfsrouter` (satu lagi `gtfsr` tapi pengelolaannya tidak aktif).

Berikut sumber-sumber yang berguna untuk mempelajarinya:

- Laman resmi [gtfs.org](http://gtfs.org/getting-started/)
- Panduan untuk [Google Transit API](https://developers.google.com/transit/gtfs/)
- Library `tidytransit`: [dokumentasi paket](http://tidytransit.r-transit.org/articles/introduction.html)
- Library `gtfsrouter`: [dokumentasi paket](https://atfutures.github.io/gtfs-router/articles/gtfsrouter.html)

### Pada bidang teknik sipil

Tentu ini akan berguna untuk menyelesaikan analisis dalam manajemen pengelolaan transportasi publik, maupun sistem transportasi. Membantu pengambilan keputusan dalam menentukan kebijakan.

Sekian dulu.