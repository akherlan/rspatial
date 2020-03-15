---
title: R dan RStudio
weight: 1
---

# Mengenal R dan RStudio

Sungguh, R dan RStudio merupakan program yang berbeda dengan fungsi yang berbeda.

Pada dasarnya, R-lah yang kita gunakan untuk membantu pekerjaan kita. Sedangkan RStudio sangat membantu menunjang lingkungan kerja kita. R merupakan bahasa pemrograman, dengan RStudio sebagai IDE (Integrated Development Environment).

Kita bisa menjalankan R tanpa harus menginstal RStudio. Namun kita tidak bisa hanya menggunakan RStudio saja tanpa menginstal R, karena _nggak guna_.

Sesungguhnya, ada banyak IDE untuk bahasa pemrograman R, misalnya RGUI, Visual Studio for R, Jupyter Notebook, Rattle, Eclipse, dan lain sebagainya. Namun, penulis sangat merekomendasikan penggunaan RStudio karena kaya fitur dan sangat menunjang. Juga mempermudah pekerjaan yang menggunakan R sebagai alat bantunya.

Berikut merupakan contoh yang paling kentara saat membandingkan R dengan RStudio.

[Screenshot R console tanpa R-IDE]

[Screenshot R console dengan R-IDE]

## Langkah-langkah menginstal R dan RStudio

{{< hint "info" >}}
**Catatan:** Jika mendapati kesalahan maupun mengalami kegagalan saat mengikuti langkah-langkah pada tutorial ini, mohon untuk menginformasikannya kepada penulis melalui [kontak](https://t.me/akherlan) tertera.
{{< /hint >}}

### Menginstal R

{{< tabs "instalasi-r" >}}
{{< tab "Windows" >}} 
**Instalasi R pada sistem Windows**

Tentu kita perlu mengunduhnya terlebih dahulu.

1. Unduh R versi terbaru untuk Windows melalui laman resmi [CRAN](https://cran.rstudio.com/bin/windows/base/).
2. Kemudian seperti biasa, tinggal _next_, _next_, _next_ saja sampai _finish_. biarkan tetap _default_.
3. Selain itu, kamu juga perlu menginstal _tool_ tambahan, yaitu **RTools**. Unduh [dari sini](https://cran.rstudio.com/bin/windows/Rtools/), pilih yang sesuai dengan versi R yang sebelumnya sudah kamu instal (atau sesuai rekomendasinya - _highlight_ hijau).
4. Instal RTools dengan _next_, _next_, _next_. Biarkan semua pilihan tetap _default_.
{{< /tab >}}

{{< tab "Linux" >}}
**Instalasi R pada sistem Linux Ubuntu, Mint, dan keluarga Debian**

Buka terminal/konsol, kemudian jalankan perintah:

```{bash}
sudo apt update
sudo apt install r-base
```

Untuk memperoleh versi R paling mutakhir kamu bisa menambahkan _official repository_ dari CRAN (Comprehensive R Archive Network).

Pertama, tambahkan GPG key:

```{bash}
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9
```
Lalu, baru kita bisa tambahkan repository CRAN:

{{< hint "warning" >}}
**Perhatian!** 
Ini untuk versi Ubuntu 18.04 (Bionic Beaver). Jika menggunakan versi lain, kamu bisa mengganti bagian `bionic-cran35` dengan versi yang sesuai pada [daftar ini](https://cloud.r-project.org/bin/linux/ubuntu/).
{{< /hint >}}

```{bash}
sudo add-apt-repository 'deb https://cloud.r-project.org/bin/linux/ubuntu bionic-cran35/'
```

Kita perlu perbarui _cache_ repo kita, kemudian instal R:

```{bash}
sudo apt update
sudo apt install r-base
```
{{< /tab >}}

{{< tab "MacOS" >}}
**Instalasi R pada sistem MacOS**

Menyusul, yaaa...
{{< /tab >}}
{{< /tabs >}}

### Menginstal RStudio

Dalam konteks ini, kita sedang membicarakan RStudio untuk komputer destop (RStudio Desktop). Sebab, ada banyak produk-produk pengembangan lainnya dari perusahaan RStudio.

Untuk mendapatkan paket program RStudio, kita dapat mengunjungi [laman unduh resminya](https://rstudio.com/products/rstudio/download/#download). Kamu akan dihadapkan dengan banyak pilihan versi berdasarkan sistem operasi komputer. Pilih yang paling sesuai dengan komputermu. Kemudian teliti, apakah untuk arsitektur 32 bit atau 64 bit.

Bila _installer_ sudah tersedia kamu bisa melakukan instalasi dengan langkah-langkah seperti di bawah:

{{< tabs "instalasi-rstudio" >}}
{{< tab "Windows" >}} 
**Instalasi pada sistem Windows**

1. Klik ganda pada _installer_ RStudio.
2. Seperti biasa, tinggal _next_, _next_, _next_, sampai _finish_.

{{< /tab >}}

{{< tab "Linux" >}} 
**Instalasi pada sistem Linux Ubuntu, Mint, dan keluarga Debian**

Pergi ke direktori tempat penyimpanan _installer_ dengan ekstensi `*.deb` melalui terminal.

```{bash}
cd <direktori/tempat/installer/RStudio/berada>
```

Kemudian instal R:

```{bash}
sudo dpkg --install nama-paket-rstudio.deb
```
{{< /tab >}}

{{< tab "MacOS" >}} 
**Instalasi pada sistem Windows MacOS**

Tidak semudah itu Ferguso... Menyusul, ya...
{{< /tab >}}
{{< /tabs >}}

-----