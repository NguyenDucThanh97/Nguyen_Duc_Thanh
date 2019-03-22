var n;
do{
    n = prompt('Nhập n:');
    n = parseInt(n);
}
while (isNaN(n) || n <= 0);
var tong = 0.0;
for (var i = 1; i <= n; i++) {
    tong+= i;
}
alert('Tổng S của biểu thức (1 + 2 + 3 + ... + n) là: '+tong);







