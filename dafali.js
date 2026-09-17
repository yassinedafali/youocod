 var prompt = require("prompt-sync")();
 let git =prompt("what");
 myAdmins =["Ahmed","osama","sayed","stop","samara"];
let myEmployees=["Amgad","samah","Ameer","Omar","othman","Samai"];
let numbers_admins=0
for(let i=0;i<myAdmins.length;i++){
    if(myAdmins[i]==="stop"){
        break;
    }
   
numbers_admins++;
   let employees=[];
    
    for(let j=0;j<myEmployees.length;j++){
        if(myAdmins[i][0]===myEmployees[j][0]){
           employees.push(myEmployees[j]);         
        }
}  console.log(`les admins est: ${myAdmins[i]}`);
    console.log(`Employees:${employees}`);
  }
 console.log(`les nombers des admins est: ${numbers_admins}`);