---
title: QGIS - Gratis dan Powerfull
weight: 2
---

# Mengapa Menggunakan QGIS, bukan ArcGIS?

**ArcGIS sangat keren! Tapi...**

Kita perlu merogoh kantong yang dalam untuk fitur-fitur yang sebenarnya bisa dilakukan menggunakan QGIS. Untuk keperluan yang lebih _advance_ tentu program ArcGIS desktop sangat direkomendasikan.

Selain untuk destop, ArcGIS juga membuat piranti lunaknya agar dapat berjalan melalui internet (_cloud service_).

Meskipun begitu, kali ini pokoknya kita tetap bahas QGIS dulu! Karena penulis juga belum punya ArcGIS-nya. Mudah-mudahan nanti menyusul kita pakai _software yahuud_ ini.

## Sekilas tentang QGIS

Sedang dalam tahap persiapan, seperti yang telah disampaikan di [pembukaan](book/memulai/persiapan).

# Instalasi QGIS

Seperti yang sudah kamu duga, kita perlu mengunduh _installer_-nya terlebih dulu. Pergi ke laman _official_ QGIS, kemudian pilih sesuai selera. Jika kamu kebingungan, maka ikuti saran berikut:

{{< tabs "saran-memilih-qgis" >}}
{{< tab "Windows" >}} 
**Instalasi QGIS pada sistem Windows**

1. Unduh versi QGIS yang LTR. Sementara gunakan dulu yang **bukan** keluaran OSGEO.
2. Setelah terunduh, klik ganda pada _installer_ QGIS, lalu _next_ beberapa kali. Biarkan tetap dalam mode pilihan _default_.
{{< /tab >}}

{{< tab "Linux" >}}
**Instalasi QGIS pada sistem Linux Ubuntu, Mint, dan keluarga Debian**

Untuk pengguna sistem GNU/Linux sebenarnya tidak perlu mengunjungi situs QGIS untuk mengunduh _installer_. Cukup dengan membuka terminal/konsol, kemudian jalankan perintah:

```{bash}
sudo apt update
sudo apt install qgis qgis-python qgis-plugin-grass
```

Tetapi jika ingin mendapatkan versi QGIS paling mutakhir, kamu bisa menggunakan repositori `ubuntugis`, cara menambahkannya sementara bisa ikuti langkah yang dijelaskan pada [laman resminya](https://qgis.org/en/site/forusers/alldownloads.html#debian-ubuntu). Nanti akan kita masukkan ke web ini di waktu mendatang.
{{< /tab >}}

{{< tab "MacOS" >}}
**Instalasi R pada sistem MacOS**

Menyusul, yaaa...
{{< /tab >}}
{{< /tabs >}}