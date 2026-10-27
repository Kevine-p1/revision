const users=[
    {id: 1, name:"Mbabazi" , status:"active", age: 27},
    {id: 2, name:"Kayla", status:"inactive", age: 9},
    {id: 3, name:"Kendal", status:"inactive", age: 87},
    {id: 4, name:"Keona", status:"active", age: 5},
];

const userNames= users.map((user)=> user.name);
console.log(userNames);

const userStatus= users.map((user)=>user.status);
console.log(userStatus);

const adults= users.filter((user)=> user.age>= 18);
console.log(adults);

const findUser= users.find((user)=> user.id== 3);

console.log(findUser);


function calculateAge(birthYear: number, currentYear: number): number{
    return currentYear - birthYear;
}
const age= calculateAge(2000, 2026);
console.log(age);

const getUserStatus = (age: number): string => {
    if (age >= 18) {
        return "Adult";
    }
    return "Minor";
};

const isAdult= getUserStatus(12);
console.log(isAdult);

const welcomeUser=(name: string, role ?: string): string =>{
    return role
    ?`HELLO ${name} - your role is ${role}`
    : `${name} - No role provided`

}

const welcome= welcomeUser("kevine", "admin");
const welcome2= welcomeUser("kevine");

console.log(welcome);
console.log(welcome2);

function getAdultNames(users:{id: number; name: string; age: number}[]){

    const adults= users.filter((user)=> user.age>= 18);
    const names= adults.map((name)=>name.name)

    return names;
}
const usersList=[
    {id: 1, name: "Alice", age: 25},
    { id: 2, name: "Bob", age: 16 },
    { id: 3, name: "Kevin", age: 30 }
];

const adultNames=getAdultNames( usersList);
console.log(adultNames);

class user{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name=name;
        this.age=age;
    }
    getUserInfo(): string{
        return   `User ${this.name} is ${this.age} years old.`;     
         
    }
 

}
const user1= new user("kevin", 12);
const user2= new user ("Aime", 26);
console.log(user1);
console.log(user2);

class BankAccount{
    public owner: string;
    private balance: number;

    constructor(owner: string, balance: number){
        this.owner= owner;
        this.balance= balance;
    }
    deposit(amount: number): void{
        this.balance += amount; 
    }

    getBalance():number{
        return this.balance;
    }


}
const myAccount= new BankAccount("alex", 70000);
myAccount.deposit(20000);

console.log(myAccount.getBalance());

class product{
    constructor(
        public name: string,
       public price: number
        
    ){};
    getProductInfo(): string{
        return `Product: ${this.name} | Price: $${this.price}`;
    }
}
const myProduct= new product("computer", 123000);
console.log(myProduct.getProductInfo());


