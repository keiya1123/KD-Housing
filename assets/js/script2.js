$(function(){
    //                              ↓↓↓↓↓↓アンダーバー2つ
    $("#js-hamburger-menu, .navigation__link").on
    ("click",function(){
        $('.navigation').slideToggle(500)
        $('.hamburger-menu').toggleClass
        ('hamburger-menu--open')

    });
});



// $(".openbtn").click(function () {
//     $(this).toggleClass('active');
// });


// $(function(){
//     //                              ↓↓↓↓↓↓アンダーバー2つ
//     $("#js-hamburger-menu, .navigation__link").on
//     ("click",function(){
//         $('.navigation').slideToggle(500)
//         $('.hamburger-menu').toggleClass
//         ('hamburger-menu--open')

//     });
// });