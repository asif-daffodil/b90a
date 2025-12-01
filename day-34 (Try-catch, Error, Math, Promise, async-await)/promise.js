const arafatPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.round(Math.random() * 10) > 5) {
            resolve("Arafat kept his promise to Sadia");
        } else {
            reject("Arafat broke his promise to Sadia");
        }
    }, 2000);
});

console.log("Arafat is a not a bad boy!");
arafatPromise.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
console.log("Arafat is a good boy!");