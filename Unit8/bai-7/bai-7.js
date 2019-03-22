function enterNumberic(thongBao){
    var a;
    do{
        a = prompt('Nhập '+thongBao+' :');
        a = parseInt(a);
    }
    while (isNaN(a) || a <= 0);
    return a;
}
//

n = enterNumberic("n");
m = enterNumberic("m");

for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++){
        document.write('*&nbsp;');
    };
    document.write('<br>');
};
document.write('<br>');
//

for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++){
        if ( (i == 0) || (j == 0) || (i == m-1) || (j == n-1) )
            {
                document.write('*&nbsp;');
            }
        else document.write('&nbsp;&nbsp;&nbsp;');
    };
    document.write('<br>');
};
document.write('<br>');
//

var h;
do{
    h = prompt('Nhập h:');
    h = parseInt(h);
}
while (isNaN(h) || h <= 0);

for (var i = 0; i < h; i++) {
    for (var j = 0; j <= i; j++) {
        document.write(' * ');
    }
    document.write('<br>');
}
document.write('<br>');

for (var i = 7; i >= 0; i--) {
    for (var j = 0; j < i; j++) {
        document.write(' * ');
    }
    document.write('<br>');
}

