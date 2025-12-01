
try {
    if (bd) {
        console.log(bd);
    } else {
        throw new Error("bd is not defined");
    }
} catch (err) {
    console.error(err.message);
}

// Math
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.ceil(Math.random() * 1000));
console.log(Math.floor(7.8));
console.log(Math.ceil(7.2));
console.log(Math.round(7.5));
console.log(Math.max(3, 7, 2, 9, 4));
console.log(Math.min(3, 7, 2, 9, 4));