var n;
do{
    n = prompt('Nhập n:');
    n = parseInt(n);
}
while (isNaN(n) || n <= 0);
var tong = 0;
for (var i = 1; i < n+1; i++) {
    tong += 1/i;
}
alert('Tổng S của biểu thức (1 + 1/2 + 1/3 + ... + 1/n) là: '+tong);
