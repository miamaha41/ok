let product = [ {
    id : 12 ,
    name : "Banh" ,
    price : 20000 ,
} , {
    id : 2 ,
    name : "Keo" ,
    price : 20000 ,
} , {
    id : 3 ,
    name : "Xuc xich" ,
    price : 30000 ,
}
]
let cart = [{
    soluongmua : 1 ,
    id : 2 , 
},{
    soluongmua : 3,
    id : 1 , 
} ] 

 
// let total = 0
// cart.forEach(function (cart) {
//     let findproduct =  product.find(function (value) { // find giong fillter tuy nhien chi tra ve gia tri dau tien tim thay
//         return value.id == cart.id  
//     })
//     total = cart.soluongmua * findproduct.price 
// })
//  console.log(total) 

// let total = cart.reduce(function (total , cart){
    
//         let findproduct =  product.find(function (value) { // find giong fillter tuy nhien chi tra ve gia tri dau tien tim thay
//             return value.id == cart.id  
//         })
//        return total + cart.soluongmua * findproduct.price   
// }, 0)
// console.log(total)
// let num = [2,3,5,7,8]
// let sum = num.reduce(function (pre,cur) {
//      return pre * cur
// },1)
// console.log(sum)

