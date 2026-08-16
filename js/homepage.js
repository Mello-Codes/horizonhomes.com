// TOTOP
const totop = document.getElementById('totop');
    window.addEventListener('scroll',function(){
        if (window.pageYOffset > 100){
            totop.classList.add('active');
        }else{
            totop.classList.remove('active');
        }
    })

    totop.addEventListener('click', function(){
        window.scrollTo(0,0);
    })
    // ENDS HERE

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// ENDS HERE