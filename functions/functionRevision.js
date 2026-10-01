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


function getGrade(score){
     
    if (score>=90){
       return "A";
    }
    else if(score>=80){
        return "B";
    }
    else if(score>=70){
        return"C";
    }
    else if(score>=60){
       return "D";
    }
    else{
        return"F";
    }

}

console.log(getGrade(80));
console.log(getGrade(90));
console.log(getGrade(50));


function getFullName(firstName,lastName){
    return firstName + " " +lastName;
}

console.log(getFullName("Mbabazi", "Aime"));



function calculateShipping(weight){
    let cost;
    if(weight<=2){
        cost= 2000;
    }
    else if(weight<=5){
        cost=4000;
    }
    else{
        cost=7000;
    }
    return cost;
}

const finalCost= calculateShipping(8);
console.log(finalCost);



function calculateOrderTotal(price, quantity, discountPercent)
{
    const  intialPrice= price*quantity;
    const discount= intialPrice* (discountPercent/100);
    const finalPrice= intialPrice - discount;

    return finalPrice;
}
console.log(calculateOrderTotal(5000,3,10));