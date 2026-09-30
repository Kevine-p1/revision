function sayHello(){
    console.log("hello,welcome")
}
sayHello();

function greetUser(name){
    console.log("Hello, " + name);

}
greetUser("KAYLA");
greetUser("Kendal");
greetUser("Keona");


function calculateArea(w,h){
    return w*h;
}
const area= calculateArea(12, 22);
console.log(area);


function calculatePrice(price,quantity){
    return price*quantity;
}

const appleTotal= calculatePrice(500,3);
const breadTotal= calculatePrice(1200,2);
const finalTotal= appleTotal + breadTotal;

console.log(finalTotal);

function checkAge(Age){
    if(Age>=18){
        return "Adult";
    }else{
       return "minor";
    }
}
const result=checkAge(20);
 

console.log(result);


function calculateDiscount(price, discountPercent){
 const discountedAmount= price* (discountPercent/100);
 return price - discountedAmount;
}

const finalPrice= calculateDiscount(1000, 20);
console.log(finalPrice);