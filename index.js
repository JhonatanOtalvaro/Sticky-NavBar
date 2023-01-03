const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(bottomContainerEl.offSetTop);

console.log(navbarEl.offSetHeight);

window.addEventListener("scroll", () =>{
    if(window.scrollY > bottomContainerEl.offSetTop - navbarEl.offSetHeight - 50){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }
});