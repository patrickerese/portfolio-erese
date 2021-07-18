$(document).ready(function(){
    $(window).scroll(function(){
        /*Sticky Navbar*/
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
    });

    /*Slide Up Script*/
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        /*removing smooth scroll on slide-up button click*/
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        /*applying again smooth scroll on menu items click*/
        $('html').css("scrollBehavior", "smooth");
    });

    /*Toggle Menu Navbar*/
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    /*Typing Text Animation*/
    var typed = new Typed(".typing", {
        strings: ["Full-Stack Web Developer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });   

    
});