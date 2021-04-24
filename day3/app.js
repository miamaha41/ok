console.log("Hello")
// for(khai bao bien ; dieu kien dung ; bieu thuc )
 var s = 1
// for (var i = 1 ; i <= 100 ; i++){
//  s += i 
// }
// while(dieu kien)
var i = 1
while (i <= 100){
    s = s + i
    i++
}
console.log(s);
var num = 12345 
while (num != 0) {
    console.log(num % 10);
    num = parseInt (num/10)
    console.log(num)
}
 
// var tinh = 1
// do {
//     tinh *= 2
// }while (tinh < 1000){
//     tinh 
// }
var tinh = 1 
while(tinh < 1000){
    if(tinh * 2 > 1000){
        break
    }
    tinh *= 2
}
console.log(tinh)
// 1 - 1000
for (i = 1 ; i <= 1000 ; i++){
    if( i%14 == 0 && i != 14 ){
        console.log(i)
        break
    }
}
for (i = 1; i < 10 ; i++ ){
    if(i%2 == 0){
        continue // bo qua code phia sau chay tiep vong lap moi
    }
console.log(i)
}
// tim boi chung nho nhat , uoc chung lon nhat cua 2 

for (var i = 0 ; i < 5 ; i++){
    for (var j = 0 ;j < 5 ; j++){
        console.log("i = " +i + " j = " + j)
    }
}
// mang trong js co the luu duoc tat ca gia tri theo kieu cua no 
// mang chay tu chi so  0 den n -1
// in ra man hinh day fibonan