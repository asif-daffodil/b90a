const araftFunc = async () => {
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Arafat kept his promise to Sadia");
        }, 2000);
    });
    console.log(result);
}

araftFunc();