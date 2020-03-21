---
title: Proyeksi, Datum, CRS
weight: 1
---
# Prinsip Dasar Pemetaan

Untuk dapat mengimplementasikan ide bangunan, mau tidak mau, teknisi sipil memerlukan ilmu geodesi.

Hasil karya teknik sipil erat kaitannya dengan meletakkan (_positioning_) desain di atas muka bumi. Apalagi pada desain infrastruktur yang mengular seperti jalan dan saluran. Yang tinggi berlapis-lapis sampai langit, juga sama.

Tiga sifat fundamental bumi[^1] adalah:

- bentuk (_shape_)
- orientasi dalam ruang (_orientation in space_)
- medan gravitasi (_gravity field_)

Terutama dua dari ketiganya merupakan pokok bahasan dalam ilmu ukur tanah dan geodesi, yang jadi pegangan para surveyor, yakni bentuk dan orientasi bumi dalam ruang.

Apabila kita bawa konsep tersebut ke dalam konteks pemetaan menggunakan komputer, kita akan dihadapkan dengan istilah-istilah penting seperti: **proyeksi**, **datum**, dan **sistem referensi koordinat**.

Dalam hal ini, lokasi, bentuk, dan ukuran bumi dibawa ke dalam model matematika sehingga jadi terukur.

## Proyeksi peta

Muka bumi berbentuk bundar, sedangkan peta itu datar (_anyone flat earth society?_).

Pada prosesnya, proyeksi memaksakan permukaan bola menjadi bidang datar atau benda rata. Seperti kulit jeruk yang digelar di atas meja.

Di SMP atau SMA dulu (kalau kamu seangkatan dengan penulis) tentu pernah mempelajari bagaimana sebuah garis yang memiliki sudut diproyeksikan.

![Proyeksi Garis ke Bidang Datar](https://d14fikpiqfsi71.cloudfront.net/media/W1siZiIsIjIwMTQvMTEvMTIvMDEvNTYvMjcvNDIzLzIyLlBORyJdLFsicCIsInRodW1iIiwiNjAweFx1MDAzZSIse31dXQ.PNG?sha=9926c3ac9b5556c4)

\*Gambar proyeksi garis dari [kuringilyas](https://kuringilyas.blogspot.com/2016/02/sudut-antara-garis-dan-bidang.html)

Sekarang, kita coba implementasikan cara-cara itu, dari bangun ruang (bola bumi) ke bangun ruang lain, sehingga kita jadi lebih mudah mengupasnya.

Contoh: proyeksi bola bumi pada selimut tabung atau kerucut. Atau bahkan langsung ke bidang datar (ini akan jadi dunia _flat earth_).

![Proyeksi bola bumi](https://raw.githubusercontent.com/akherlan/idjn-rspatial/master/assets/projections.png)

\*Gambar proyeksi bola bumi dari [gistbok.ucgis.org](https://gistbok.ucgis.org/bok-topics/2018-quarter-02/map-projections)

Pada proses ini, bisa saja jarak yang aslinya lebih panjang mejadi lebih pendek pada peta. Atau bisa sebaliknya, suatu jarak jadi teregang (_stretched_), sehingga tidak sesuai dengan kondisi bumi yang nyata. Lebih lanjut tentang ini: [**Distorsi**](geodesi/#distorsi).

Manusia mengembangkan berbagai macam model matematis untuk memproyeksikan muka bumi agar memperoleh distorsi yang kecil.

Berbagai macam proyeksi itu misalnya terdapat pada daftar yang disediakan [`proj`](https://proj.org/operations/projections/index.html).

## Datum: apa itu ellipsoid dan geoid?

Bumi berbentuk seperti bola pipih dengan permukaan yang tidak rata (sebenarnya susah kalau dibilang mirip bola). Bentuk ini disebut **ellipsoid**.[^2] Datum merupakan model dari bentuk bola bumi ini.

Terdapat banyak model muka bumi yang pernah dibuat. Dalam kata lain, ada beragam datum yang bisa kita pakai.

Contoh yang paling sering digunakan secara global yakni datum WGS-84 (World Geodetic System 1984). Pengguna perangkat GPS (bukan GPS Google Maps) tentu familiar dengan ini.

Selain itu, terdapat **geoid** yang biasa digunakan untuk mewakili permukaan bumi sesuai dengan muka air laut (_mean sea level_ / MSL). Namun begitu, geoid tidak mewakili ketinggian muka air laut sesungguhnya.

![Model muka bumi](https://www.esri.com/news/arcuser/0703/graphics/geoid1_lg.gif)

\*Gambar model muka bumi dari [ESRI](https://www.esri.com/news/arcuser/0703/geoid1of3.html)

## Satuan

Datum merupakan acuan atau referensi untuk suatu titik lokasi. Untuk mengetahui posisi suatu titik terhadap datum digunakan satuan ukur (_units_).

Satuan yang digunakan pada datum tertentu bersifat spesifik dan unik. Berbeda satu dengan lainnya. Contoh yang umum kita jumpai adalah derajat (baik derajat desimal maupun derajat, menit, detik) dan juga meter (pada Universal Transfer Mercantor / UTM).

## Sistem referensi koordinat (CRS)

Sesungguhnya, koordinat adalah sebuah alamat. Suatu tempat dialamatkan dengan sebuah nama, koordinat mengalamatkan tempat melalui hitungan jarak dari suatu patokan.

Patokan ini bisa berwujud titik, garis, atau horizon. Orientasinya bisa horizontal juga bisa vertikal (dari posisi kita berdiri). Hitungan jaraknya bisa dengan satuan (_unit_) meter maupun derajat. Sistem referensi koordinat membantu kita untuk mengatur semua itu.

Sistem referensi koordinat yang dalam istilah _keminggris_-nya adalah _coordinate references system_ (CRS) dibutuhkan agar kita bisa membuat lokasi, ukuran, dan bentuk bumi jadi lebih terukur dan sesuai dengan kenyataan. Terutama untuk pengukuran pada lokasi lokal atau parsial, bukan seluruh bumi.

CRS merupakan _"toolbox"_ gabungan dari kombinasi **EDPUO**[^3]:

- Ellipsoid
- Datum
- map Projection
- Units
- Origin

yangmana sudah kita bahas di atas.

{{< hint "warning" >}}
**Perhatian:** Sistem "referensi" koordinat dan sistem koordinat itu berbeda. Sistem koordinat hanya terkait dengan _units_ dan _origin_. Contoh sistem koordinat: kartesius, polar, dll.
{{< /hint >}}

# Distorsi

Terdapat empat macam distorsi atau perubahan yang dialami ketika melakukan transformasi muka bumi menjadi peta datar[^2]:

- **conformality** (akurasi **bentuk** _feature_ peta) - pengeritan _feature_ (dalam persiapan).
- **distance** (akurasi **pengukuran jarak** pada peta)
- **area** (tingkat **proporsi luas** hasil representasi muka bumi ke peta)
- **direction** (akurasi **arah/orientasi** antar titik pada peta)

[^1]: Pembahasan geodesi oleh NOAA: [_What is geodesy?_](https://oceanservice.noaa.gov/facts/geodesy.html).
[^2]: [_Datum & Projection_](https://www.maptoaster.com/maptoaster-topo-nz/articles/projection/datum-projection.html) oleh pengembang aplikasi MapToasterTopo New Zealand.
[^3]: [_A Beginer's Guide to Geodesy_](https://blog.bluemarblegeo.com/2018/04/05/a-beginners-guide-to-geodesy-coordinates-datums-and-bears-oh-my/) oleh Patrick Cunningham dari BlueMarbel, produsen GlobalMapper.