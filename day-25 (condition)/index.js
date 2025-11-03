const age = 500;
if (age <= 12 && age > 0) {
  console.log("You are a baby");
} else if (age <= 19 && age > 12) {
  console.log("You are a teenager");
} else if (age < 30 && age > 19) {
  console.log("You are a young adult");
} else if (age < 50 && age >= 30) {
  console.log("You are a sinior adult");
} else if (age >= 50 && age < 150) {
  console.log("You are an sinior adult");
} else {
  console.log("You are not in this world");
}

const personName = "Lalon";
if (personName === "Fakir") {
  console.log("Tumi akta jajabor");
}

const pg = "Female";
const pa = 18;

if (pg == "Male") {
  if (pa >= 21) {
    console.log("You are eligible for marriage");
  } else {
    console.log("You are not eligible for marriage");
  }
} else if (pg == "Female") {
  if (pa >= 18) {
    console.log("You are eligible for marriage");
  } else {
    console.log("You are eligible for marriage");
  }
}

const y = 2094;
// 400 - yes
// 100 - no
// 4 - yes
// - no
if (y % 400 == 0) {
  console.log(y + " is a leap-year");
} else if (y % 100 == 0) {
  console.log(y + " is not a leap-year");
} else if (y % 4 == 0) {
  console.log(y + " is a leap-year");
} else {
  console.log(y + " is not a leap-year");
}
