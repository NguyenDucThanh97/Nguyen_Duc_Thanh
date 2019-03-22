var n;
do{
    n = prompt('Nhập n:');
    n = parseInt(n);
}
while (isNaN(n) || n <= 0);
var tong = 0;
var gt=1.0;
for (var i = 1; i < n+1; i++) {
    gt*=i;    
    tong = tong + i/gt;
    console.log(i/gt)
}
alert('Tổng S của biểu thức (1 /1! + 2 /2! + ... + n / n!) là: '+tong);
console.log(gt);
console.log(tong);
