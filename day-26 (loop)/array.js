const cityList = ["Dhaka", "Maymanshing", "Shariyatpur", "Gopalganj", "Bogura"];
console.log(cityList[0]);
console.log(cityList.length);
for (let i = 0; i < cityList.length; i++) {
  console.log(cityList[i]);
}

cityList.push("Bhrmmonbaria", "Noakhali");
cityList.pop();
cityList.unshift("Rajshahi", "Rongpur");
cityList.shift();
const newCity = cityList.slice(1, 4);
cityList.splice(4, 1);
console.log(cityList);
console.log(newCity);
