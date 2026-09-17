const prompt = require('prompt-sync')();

const data = [
    {name : "laptop" , price :7500 , stock : 4 , category : "electronic"},
    {name : "mouse" , price :150 , stock : 15 , category : "electronic"},
    {name : "keyboard" , price :400 , stock : 8 , category : "electronic"},
    {name : "headset" , price :600, stock : 6, category : "electronic"},
    {name : "chair" , price :1200, stock : 5 , category : "furniture"},
    {name : "desk" , price :2000 , stock : 3, category : "furniture"}
];

let users = [
    {name:"ayoub",pass:1234,balance:10000},
    {name:"hamza",pass:5555,balance:5000},
    {name:"aya",pass:9999,balance:8000}
];


function register(){
    let f = prompt("what your name : ");
    let p = Number(prompt("what your pass :"));
    let b = Number(prompt("what your balance : "));
    
    users.push({
        name:f,
        pass:p,
        balance:b
    });
    console.log(`Account created for ${f}`);
}
    

function login(){
    let attempts = 0;
    while(attempts < 4){
        let sowl = prompt("username : ");
        let sols = Number(prompt("password : "));
        
 let found =false ;
        for (let i = 0 ; i < users.length ; i++){
          if (sowl === users[i].name && sols === users[i].pass){
            console.log(`welcome : ${users[i].name}`);
            found = true;
            return; 
          }
        }

        if (found === false){
            console.log("invalid user or pass");
            attempts++;
        }
    }
    console.log("Too many attempts");
}

function show_product(){
  for(let i=0;i<data.length;i++){
    console.log( "show product:",data[i]);

  }

}
function Add_product(data){
  let productofuser=[];
  let n=prompt("name_product");
  let b=number(promt("quantit"));
  let found=false;
  for(let i=0;i<data.length;i++){
    if(n===data[i].name){
      found =true;}
    if(b<=data[i].stock ||b>0){
      console.log("sir aw.9 la n7wi mok");
      return;
    }
    data[i].stock-=b;
     productofuser.push({
      name:data[i].stock,
      price:data[i].price,
      Qun:b,
      cate:data[i].category
     });
     console.log("price is",data[i].price*b);
     
    
  }

}
let productofuser=[];
while (true){
  
  console.log("\nlogin : 1");
  console.log("register : 2");
  console.log("exit : 3");
  let u = Number(prompt("choice : "));
  
  if (u === 3){
    console.log("good bye");
    break;
  } else if (u === 2){
    login ();
  } else if (u === 1){
    register();

  }
  console.log("1. Show Product",
"2. Add Product",
"3. Remove Product",
"4. Show Cart",
"5. Checkout",
"6. Logout"
)
let j=Number(prompt("choice:"));
switch (j) {
  case 1:
    show_product(data);
    break;
    case 2:
      Add_product(data);

  default:
    break;
}
}
  
  console.log("1. Show Product",
"2. Add Product",
"3. Remove Product",
"4. Show Cart",
"5. Checkout",
"6. Logout"
)


function show_product(){
  for(let i=0;i<data.length;i++){
    console.log( "show product:",data[i]);

  }

}
function add_prodact(){
  let n=Number(prompt("id prudact"));
  let q=Number(prompt("what Quntite"));
  for(let i=0;i<data.length;i++){
    if(n==!data[i].name){
      console.log("we dont have the prudact");

    }
    if(q>data[i].stock || q<0){
    console.log("sir aw.9 t9awd");

    }else if(data[i].name===n && q>data[i].stock ){
      productofuser.push(
       
      
    }

  }

}


