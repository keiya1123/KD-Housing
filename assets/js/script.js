$(function(){
    //                              ↓↓↓↓↓↓アンダーバー2つ
    $("#js-hamburger-menu, .navigation__link").on
    ("click",function(){
        $('.navigation').slideToggle(500)
        $('.hamburger-menu').toggleClass
        ('hamburger-menu--open')

    });
});

// コピーライト↓↓↓
$(function(){
    //今の年月を取得する
    const now=new Date();
    console.log(now);
    //年数だけくり抜く
    const year=now.getFullYear();
    //↑↑↑↑これを実際にコピーライトに入力する
    //footerに入れたいから↓↓↓textで変更→だけどtextだとコピーライトが反映されないから
    //html関数で入力する
    $("footer small").html("Copyright &copy; " + year + " KD Housing")
});