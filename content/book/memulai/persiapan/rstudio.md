---
title: R dan RStudio
weight: 1
---
R dan RStudio merupakan program yang berbeda dengan fungsi yang berbeda.

Pada intinya, R-lah yang kita gunakan untuk membantu pekerjaan kita. Sedangkan RStudio merupakan penunjang lingkungan kerjanya. R merupakan bahasa pemrograman, dengan RStudio sebagai IDE (Integrated Development Environment).

Kita bisa menjalankan R tanpa harus menginstall RStudio. Namun kita tidak bisa hanya menggunakan RStudio saja tanpa menginstall R.

Sesungguhnya, ada banyak IDE untuk bahasa pemrograman R, misalnya RGUI, Visual Studio for R, Jupyter Notebook, Rattle, Eclipse, dan lain sebagainya. Namun, penulis sangat merekomendasikan penggunaan RStudio karena kaya fitur dan sangat menunjang juga mempermudah pekerjaan yang menggunakan R sebagai alat bantunya.

Berikut merupakan contoh yang paling kentara saat membandingkan R dengan RStudio.

[Screenshot R console tanpa R-IDE]

[Screenshot R console dengan R-IDE]

## Langkah-langkah menginstall R dan RStudio

{{< hint "info" >}}
Jika mendapati kesalahan maupun mengalami kegagalan saat mengikuti langkah-langkah pada tutorial ini, mohon untuk menginformasikannya kepada penulis melalui [kontak](https://t.me/akherlan) tertera.
{{< /hint >}}

### Menginstall R

{{< tabs "uniqueid" >}}
{{< tab "Windows" >}} 
**Instalasi R pada sistem Windows**

Seperti biasa, tinggal _next_, _next_, _next_ saja sampai _finish_.
{{< /tab >}}

{{< tab "Linux" >}}
**Instalasi R pada sistem Linux Ubuntu, Mint, dan keluarga Debian**

Untuk memperoleh versi R paling mutakhir kamu bisa menambahkan repository dari r-cran (air keran... eh).

```{bash}
sudo add-repository
sudo apt update
sudo apt install r-base
```
{{< /tab >}}

{{< tab "MacOS" >}}
**Instalasi R pada sistem MacOS**

Menyusul, yaaa...
{{< /tab >}}
{{< /tabs >}}

### Menginstall RStudio

Dalam konteks ini, kita sedang membicarakan RStudio untuk komputer destop (RStudio Desktop). Sebab, ada banyak produk-produk lain dari perusahaan RStudio yang digunakan untuk pengembangan.

Untuk mendapatkan paket program RStudio, kita dapat mengunjungi [laman unduh resminya](https://rstudio.com/products/rstudio/download/#download). Kamu akan dihadapkan dengan banyak pilihan versi berdasarkan sistem operasi komputer. Pilih yang paling sesuai dengan komputermu. Kemudian teliti, apakah untuk arsitektur 32 bit atau 64 bit.

Bila _installer_ sudah tersedia kamu bisa melakukan instalasi dengan langkah-langkah seperti di bawah:

{{< tabs "uniqueid" >}}
{{< tab "Windows" >}} 
**Instalasi pada sistem Windows**

1. Klik ganda pada _installer_ RStudio.
2. Seperti biasa, tinggal _next_, _next_, _next_, sampai _finish_.

{{< /tab >}}

{{< tab "Linux" >}} 
**Instalasi pada sistem Linux Ubuntu, Mint, dan keluarga Debian**

1. Pergi ke direktori tempat penyimpanan _installer_ dengan ekstensi `*.deb` melalui terminal. Buka terminal/konsol kemudian ketikkan:

```{bash}
cd <direktori/tempat/installer/RStudio/berada>
sudo dpkg -i install <nama/berkas/paket/rstudio.deb>
```
{{< /tab >}}

{{< tab "MacOS" >}} 
**Instalasi pada sistem Windows MacOS**

Tidak semudah itu Ferguso... Menyusul, ya...
{{< /tab >}}
{{< /tabs >}}

-----