let games = [
    { name: "GTA V", price: 300, stock: 5 },
    { name: "Minecraft", price: 250, stock: 8 },
    { name: "FIFA 26", price: 500, stock: 3 },
    { name: "Cyberpunk", price: 400, stock: 4 }
];

while (true){
  console.log("===== Game stiore =====");
  console.log("1:show balance ");
  console.log("2:sherch games ");
  console.log("3: by games");
  console.log("4: show cart ");
  console.log("5: remove from cart ");
  console.log("6: checkout");
  console.log("7: Exit")}
  let ask = Number(prompt("choice :"));
  if (ask === 7){
    console.log("good by");
    break
  }else if(ask ===1){
    sho()
  }else if(ask === 2){
    let s = ser();
    if (s === false){
      console.log("we don't find that game !")
    }else if (s === true){
      console.log("found")
    }
  }else if(ask === 3){
    by()
  }else if(ask === 4){
    car()
  }else if(ask === 5){
    rem()
  }else if(ask === 6){
    check()
  }else {
    console.log("that is not option try again");
  }
}
function sho(){
  for (let game of games){
    console.log(game.name,":" , game.price,":" ,game.stock);
  }
}
function ser(){
  let aa = prompt("sherch game :")
  for (let i = 0 ; i<games.length ; i++){
    if (games[i].name === aa){
      console.log(games[i].name , games[i].price,games[i].stock);
      
      return true
    }else{
      continue
    }
  }
  return false
}
let bye = [];
function by() {
    let chai = prompt("what game :");
    let con = Number(prompt("how much :"));

    let found = false;

    for (let i = 0; i < games.length; i++) {

        if (games[i].name === chai) {
            found = true;

            if (con <= 0) {
                console.log("quantity must be greater than 0");
                return;
            }

            if (con > games[i].stock) {
                console.log("not enough stock !");
                return;
            }
            games[i].stock -= con;
            bye.push({
                name: games[i].name,
                price: games[i].price,
                quantity: con
            });

            console.log("game added to cart !");
            console.log("total :", games[i].price * con, "DH");

            return;
        }
    }

    if (found === false) {
        console.log("we can't find that game !");
    }
  
}
function car(){

}
function rem(){
  
}
//function check(){
  

