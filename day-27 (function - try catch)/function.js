const hbd = "Happy Birthday!";
function msg(p = "Oi", q = "Mia") {
  console.log(hbd + " " + p + " " + q);
}

msg("Ashraf", "Vai");
msg("Jahir", "Guru");
msg();
msg("Arafat");
// msg();

// Funcrtion Expresion
const studentFunc = function () {
  console.log("return korar age");
  return "This is a function message";
  console.log("return korar por");
};

console.log(studentFunc());

// Arrow Function
// const arafat = (m) => {
//   return m;
// };

const arafat = m => m;

console.log(arafat("Valo moto pass"));

const guru = n => {
    if(n == 0){
        console.log(n);
        return n;
    }
    console.log(n);
    guru(n - 1);
}

guru(10);


try{
    console.log(meeting);
}catch{
    console.log("ki je hobe");
}


