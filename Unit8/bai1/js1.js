
var dem;
dem = 0.0;
for (i = 1; i <= 100; i++) {
    if ( (i%3 == 0) || (i%7 == 0) )
    {
        dem++;
    }
}
alert('Số lượng số nguyên chia hết cho 3 hoặc 7 nằm trong đoạn 1 đến 100: '+dem);




