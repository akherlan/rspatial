---
title: Geodesi dan Pemetaan
weight: 1
---
# Konsep dalam Geodesi dan Pemetaan

Untuk dapat mengimplementasikan ide bangunan, mau tidak mau, teknisi sipil memerlukan ilmu geodesi. Karena, hasil karya teknik sipil erat kaitannya dengan meletakkan (_positioning_) desain di atas muka bumi.

Tiga sifat fundamental bumi[^1] adalah:

- bentuk
- orientasi dalam ruang
- medan gravitasi

Ketiganya merupakan pokok bahasan dalam ilmu ukur tanah atau geodesi, pegangan para surveyor. Kalau kita mulai bahas tentang ini, barangkali akan sangat teknis dan erat kaitannya dengan implementasi dan praktik di lapangan.

[Sedang mencoba untuk menyelipkan pemahaman tentang: ellipsoid, geoid. Karena akan nyambung dengan pembahasan datum, CRS, juga nantinya data DEM]

Apabila kita bawa dasar-dasar ini ke dalam konteks komputer, maka kita akan bertemu dengan berbagai istilah pemetaan, misalnya: **proyeksi**, **datum**, dan **sistem koordinat**.

## Proyeksi peta (_map  projection_)

Pada prosesnya, proyeksi memaksakan permukaan bola menjadi bidang datar atau benda rata. Di SMP atau SMA dulu tentu pernah mempelajari bagaimana sebuah garis yang memiliki sudut di proyeksikan sehingga sejajar dengan sumbu X atau sumbu Y kartesian.

[contoh gambar proyeksi garis]

Sekarang, kita coba implementasikan cara-cara itu. Dari bangun ruang (bola bumi) ke bangun ruang lain, sehingga membuat kita jadi lebih mudah mengupasnya. Contoh: proyeksikan pada tabung atau kerucut. Atau bahkan langsung ke bidang datar.

![](https://raw.githubusercontent.com/akherlan/idjn-rspatial/master/assets/projections.png)
Sumber: [Proyeksi peta](https://gistbok.ucgis.org/bok-topics/2018-quarter-02/map-projections)

## Sistem referensi koordinat (_coordinate references system_ / CRS)

Sesungguhnya, koordinat adalah sebuah alamat. Jika suatu desa dialamatkan dengan sebuah nama, koordinat dialamatkan melalui hitungan jarak dari suatu patokan.

### CRS Lokal
### CRS Global

[^1]: Pembahasan geodesi oleh NOAA: [_What is geodesy?_](https://oceanservice.noaa.gov/facts/geodesy.html).