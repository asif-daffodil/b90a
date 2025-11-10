const head = document.querySelector(".head");
const details = document.querySelector(".details");
const headArr = Array.from(head.children);
const detailsArr = Array.from(details.children);

headArr.forEach((el, ind) => {
    el.addEventListener('click', () => {
        headArr.forEach((e, i) => {
            if(ind == i) {
                e.classList.add("active");
                detailsArr[i].classList.add("active");
            }else{
                e.classList.remove("active");
                detailsArr[i].classList.remove("active");
            }
        })
    })
});