function enterNumberic(thongBao){
    var a;
    do{
        a = prompt('Nhập '+thongBao+' :');
        a = parseInt(a);
    }
    while (isNaN(a));
    return a;
}
var m,n,k;
m = enterNumberic("M");
n = enterNumberic("N");
k = enterNumberic("K");
var dem;
dem = 0.0;
if ((k>=n) && (k<=m)){
    for (var i = n; i <= m; i++) {
        if (i%k == 0)
        {
            dem++;
        }
    }
    alert('Số lượng số nguyên chia hết cho K nằm trong đoạn N đến M: '+dem);
}
else alert('K chỉ có thể nằm trong khoảng từ N tới M (N<=M)');