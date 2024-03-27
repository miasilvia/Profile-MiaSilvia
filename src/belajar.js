// //https://madey.medium.com/5-contoh-soal-test-wawancara-coding-bidang-web-developer-php-beserta-solusi-bd063660e801
// //------------------------------------SOAL 1-----------------------------------------------------------
// //Anda memiliki daftar bilangan bulat, dan untuk setiap indeks Anda ingin menemukan produk dari
// //setiap bilangan bulat kecuali bilangan bulat pada indeks itu. Buatlah fungsi get_products()
// //yang mengambil daftar bilangan bulat dan mengembalikan daftar produk.
// //array: [1, 7, 3, 4]
// //hasilnya: [84, 12, 28, 21]
// //dengan cara hitung: [7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3]
// let arr = [1, 7, 3, 4];

// function get_products(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let product = 1;
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j) {
//         //jika i bukan j, maka nilai itu tidak dihitung
//         product *= arr[j];
//       }
//     }
//     result.push(product);
//   }
//   return result;
// }
// console.log(get_products(arr), "JAWABAN NO 1");

// console.log(
//   ">----------------------------------INI NO 2-------------------------------------<"
// );
// //Buatlah fungsi yang dapat menghasilkan output seperti dibawah ini:
// // input n = 5
// // 1**45678
// // 12**5678
// // 123**678
// // 1234**78
// // 12345**8
// // input n = 4
// // 1**4567
// // 12**567
// // 123**67
// // 1234**7

// function bintang(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n + 3; j++) {
//       str += j;
//       if (i === j) {
//         str += "**";
//         j += 2;
//       }
//     }
//     console.log(str);
//   }
// }

// bintang(5);
// bintang(4);

// console.log(
//   ">--------------------------------------INI NO 3-----------------------------------------<"
// );

// //Misalkan kita dapat mengakses harga saham apple sebagai list/array, dimana:
// // • Index array sebagai waktu dalam menit setelah jam perdagangan saham dimulai.
// // • Nilai dalam elemen tersebut merupakan harga saham pada saat itu.
// // Maka:
// // cost $300 at 09:30am, stock_prices_yesterday[0] = 300
// // cost $350 at 09:40am, stock_prices_yesterday[10] = 350
// // cost $500 at 10:30am, stock_prices_yesterday[60] = 500
// // Buatkan fungsi yang mengambil stock_prices_yesterday dan mengembalikan keuntungan terbaik yang bisa saya buat
// // dari 1 pembelian dan 1 penjualan 1 saham Apple kemarin.
// // contoh :
// // stock_prices_yesterday = [10, 7, 5, 8, 11, 9, 1]
// // get_max_profit(harga)
// // # returns 6 (5 dan 11)
// let price = [10, 7, 5, 8, 11, 9, 1];
// function get_max_profit(price) {
//   let maxProfit = 0;
//   for (let i = 0; i <= price.length; i++) {
//     let currentPrice = price[i];
//     for (let j = i + 1; j < price.length; j++) {
//       let targetPrice = price[j];
//       let currentProfit = targetPrice - currentPrice;
//       if (currentProfit > maxProfit) {
//         maxProfit = currentProfit;
//       }
//     }
//   }
//   return maxProfit;
// }

// console.log(get_max_profit(price));
// let datas  = ["mias","iyas","hh"]

// datas.forEach((day)=>{
//     console.log(day)
// })

//Fungsi Map: Tulis fungsi squareAll yang menerima array berisi angka dan
//mengembalikan array baru di mana setiap elemen adalah kuadrat dari elemen dalam
//array asli. Gunakan metode map
// function squareAll(arr) {
//   return arr.map((arr) => arr*arr);
// }
// console.log(squareAll([1, 2, 3, 4, 5]));

//soal: function filterEven(numbers) {
// Tulis kode Anda di sini }
// console.log(filterEven([1, 2, 3, 4, 5])); // Harusnya mencetak [2, 4]

// function filterEven(numbers) {
//     let yuhu= numbers.filter((numbers)=>{return numbers % 2 === 0})
//     return yuhu
// }
// console.log(filterEven([1, 2, 3, 4, 5])); // Harusnya mencetak [2, 4]

//soal: Fungsi Reduce: Tulis fungsi sum yang menerima array berisi angka dan
//mengembalikan jumlah semua angka dalam array tersebut. Gunakan metode reduce.
// function sum(numbers) {
//   let coy = numbers.reduce((num1, num2) => {
//     return num1 + num2;
//   });

//   return coy;
// }
// console.log(sum([1, 2, 3, 4, 5])); // Harusnya mencetak 15

function tambah(a, b) {
  return a + b;
}
console.log(tambah("no 1 jawabannya: ", 2, 3));

function keHurufKecil(str) {
  return str.toLowerCase();
}
console.log("no 2 jawabannya:", keHurufKecil("GG"));

function panjangArray(arr) {
  return arr.length;
}
console.log("no 3 jawabannya:", panjangArray([1, 2, 3, 22, "kk"]));

function ambilElemenPertama(arr2) {
  return arr2[0];
}
let datas = [111, 2, 3, 4, 5];
console.log("no 4 jawabannya:", ambilElemenPertama(datas));

function elemenKeN(arr, n) {
  return arr[n];
}
let arr3 = ["balalu", 2, 3, 4];
console.log("no 5 jawabannya:", arr3[0]);

function balikString(str3) {
  let string = str3.split("");
  return string.reverse().join("");
}
console.log("no 6 jawabannya:", balikString("aku"));

function cekPrima(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= n / 2; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
}
console.log("no 7 jawabannya:", cekPrima(11));

//buatkan untuk mencari array yng jika dijumlahkan menghasilkan 3
//2x looping
// let arrKos = [];
// function cariSums(arry) {
//   for (let i = 0; i <= arry.length; i++) {
//     for (let j = i + 1; j <= arry.length; j++) {
//       if (arry[i] + arry[j] === 3) {
//         arrKos.push([arry[i], arry[j]]);

//       }
//     }

//   }
//   return arrKos;
// }
// let arrayy = [1, 2, 3,4, 5, 0];
// console.log(cariSums(arrayy));

//1x looping
let arr = [1, 2, 3, 4, 5, 0, 2];
let map = {};
let result = [];

arr.forEach((num) => {
  if (map[4 - num] !== undefined) {
    result.push([4 - num, num]);
  }
  map[num] = true;
});
console.log("no 8 jawabanny:", result);
//penjelasan: Ketika kita melihat angka, kita memeriksa apakah komplementernya (yaitu, 4 dikurangi angka saat ini)hasilnya sudah ada dalam map. Jika ya, itu berarti kita telah menemukan pasangan angka yang jumlahnya adalah 4, dan kita menambahkan pasangan tersebut ke array result.

function balikArray(arr) {
  return arr.reverse();
}
console.log("no 9 jawabanny:", balikArray([1, 3, 4, 4]));

function cekPalindrom(str) {
  let balik = str.split("");
  //operator ternary
  let hasil = str === balik.reverse().join("") ? str : false;
  return hasil;
}
console.log("no 10 jawabanny:", cekPalindrom("apa"));

function jumlahArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log("no 11 jawabanny:", jumlahArray([10, 2, 3, 4]));

let jarray = [1, 5, 4];
let j = 0;
for (let i = 0; i < jarray.length; i++) {
  j += jarray[i];
}
console.log("no 12 jawabanny:", j);

const arrs = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let arrkosj = [];
for (let i = 0; i < arrs.length; i++) {
  for (let j = 0; j < arrs[i].length; j++) {
    arrkosj.push(arrs[i][j]);
  }
}
console.log("no 13 jawabanny:", arrkosj);

const ourArray2 = [];
let i = 5;

do {
  ourArray2.push(i);
  i++;
} while (i < 5);
console.log("no 14 jawabanny:", ourArray2);

aro = [1, 2, 3, 4, 5];
let jmlh = 0;
for (let i = 0; i < aro.length; i++) {
  jmlh += aro[i];
}
console.log("no 15 jawabanny:", jmlh);

let text = "";
let k = 1;
while (k <= 5) {
  text += "no 16 jawabanny:" + [k] + " hello world" + "\n";
  k++;
}
console.log(text);

let kjsong = [];
for (let ko = 10; ko >= 1; ko--) {
  kjsong.push(ko);
}
console.log("no 17 jawabanny:", kjsong);

let num11 = [];
let o = 0;
do {
  num11.push(o);
  o++;
} while (o < 5);
console.log("no 18 jawabanny:", num11);
