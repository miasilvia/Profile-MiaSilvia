//https://madey.medium.com/5-contoh-soal-test-wawancara-coding-bidang-web-developer-php-beserta-solusi-bd063660e801
//------------------------------------SOAL 1-----------------------------------------------------------
//Anda memiliki daftar bilangan bulat, dan untuk setiap indeks Anda ingin menemukan produk dari
//setiap bilangan bulat kecuali bilangan bulat pada indeks itu. Buatlah fungsi get_products()
//yang mengambil daftar bilangan bulat dan mengembalikan daftar produk.
//array: [1, 7, 3, 4]
//hasilnya: [84, 12, 28, 21]
//dengan cara hitung: [7 * 3 * 4, 1 * 3 * 4, 1 * 7 * 4, 1 * 7 * 3]
let arr = [1, 7, 3, 4];

function get_products(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        //jika i bukan j, maka nilai itu tidak dihitung
        product *= arr[j];
      }
    }
    result.push(product);
  }
  return result;
}
console.log(get_products(arr), "JAWABAN NO 1");

console.log(
  ">----------------------------------INI NO 2-------------------------------------<"
);
//Buatlah fungsi yang dapat menghasilkan output seperti dibawah ini:
// input n = 5
// 1**45678
// 12**5678
// 123**678
// 1234**78
// 12345**8
// input n = 4
// 1**4567
// 12**567
// 123**67
// 1234**7

function bintang(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n + 3; j++) {
      str += j;
      if (i === j) {
        str += "**";
        j += 2;
      }
    }
    console.log(str);
  }
}

bintang(5);
bintang(4);

console.log(
  ">--------------------------------------INI NO 3-----------------------------------------<"
);

//Misalkan kita dapat mengakses harga saham apple sebagai list/array, dimana:
// • Index array sebagai waktu dalam menit setelah jam perdagangan saham dimulai.
// • Nilai dalam elemen tersebut merupakan harga saham pada saat itu.
// Maka:
// cost $300 at 09:30am, stock_prices_yesterday[0] = 300
// cost $350 at 09:40am, stock_prices_yesterday[10] = 350
// cost $500 at 10:30am, stock_prices_yesterday[60] = 500
// Buatkan fungsi yang mengambil stock_prices_yesterday dan mengembalikan keuntungan terbaik yang bisa saya buat
// dari 1 pembelian dan 1 penjualan 1 saham Apple kemarin.
// contoh :
// stock_prices_yesterday = [10, 7, 5, 8, 11, 9, 1]
// get_max_profit(harga)
// # returns 6 (5 dan 11)
let stock_prices_yesterday = [10, 7, 5, 8, 11, 9, 1];
function get_max_profit(price) {
  let maxProfit = 0;
  for (let i = 0; i <= price.length; i++) {
    let currentPrice = price[i];
    for (let j = i + 1; j < price.length; j++) {
      let targetPrice = price[j];
      let currentProfit = targetPrice - currentPrice;
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  }
  return maxProfit;
}

console.log(get_max_profit(stock_prices_yesterday));
