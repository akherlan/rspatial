---
bookFlatSection: true
title: Glosarium
weight: 3
---

Banyak fungsi-fungsi R yang disimpan dan dibagikan dalam bentuk paket (_package_) pustaka yang dibuat oleh komunitas pengguna R dari berbagai latar belakang. Secara resmi, paket-paket pustaka ini dikelola melalui [CRAN](https://cran.r-project.org/mirrors.html).

Untuk bisa menggunakan paket-paket tersebut kita perlu menginstalnya di komputer lokal yang kita pakai. Buka sesi R dengan antarmuka apapun, kemudian ketikkan perintah berikut pada konsol R yang sedang aktif:

```{R}
install.packages("<nama paket>")
```

R akan secara otomatis mengunduh paket dari CRAN dan menyimpan kumpulan fungsi yang dibundel tersebut menjadi pustaka fungsi-fungsi yang siap kita gunakan di komputer lokal. Untuk menggunakan pustaka tertentu, kita tinggal memanggilnya pada sesi R aktif melalui konsol dengan cara:

```{R}
library("<nama paket>")
```

Mengingat akan menjadi tantangan tersendiri bagi teman-teman untuk mencari paket apa yang tepat untuk digunakan, diantara ribuan paket yang terdaftar di CRAN, kami telah merangkum beberapa nama paket yang berguna untuk membantu pekerjaan, khususnya yang berkaitan dengan teknik sipil.

Berikut merupakan daftar paket pustaka R yang bermanfaat untuk bidang teknik sipil.

# Daftar Paket Pustaka R

## Mengolah Data Spasial

sf, sp, maptools - Tools for loading and using spatial data including shapefiles.

maps - Easy to use map polygons for plots.

ggmap - Download street maps straight from Google maps and use them as a background in your ggplots.

## Time Series

zoo - Provides the most popular format for saving time series objects in R.

xts - Very flexible tools for manipulating time series data sets.

lubridate - Tools that make working with dates and times easier.

## Kinerja dengan Performa Tinggi

Rcpp - Write R functions that call C++ code for lightning fast speed.

data.table - An alternative way to organize data sets for very, very fast operations. Useful for big data.

parallel - Use parallel processing in R to speed up your code or to crunch large data sets.

## Pemodelan

rayshader

## Finansial dan Anggaran

quantmod - Tools for downloading financial data, plotting common charts, and doing technical analysis.

## Visual dan Grafik

ggplot2

# Referensi

- [Quick List of Useful R Packages](https://support.rstudio.com/hc/en-us/articles/201057987-Quick-list-of-useful-R-packages) - RStudio Support

-----