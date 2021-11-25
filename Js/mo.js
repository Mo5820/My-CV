$(document).ready(function(){
    $(".dark1").click(function(){
        $(".landing").toggleClass("body2");
        $("body").toggleClass("body3");
    });
    $(".dark1").click(function(){
        $(".conterner .header .logo").toggleClass("logo2 , color");
    })
    $(".dark1").click(function(){
        $(".dark, li").toggleClass("color");
    })
})


//moving imgs
var i =0;
var image = ["images/cert-html.jpg","images/cert-js.png","images/cert-css.jpg"];
var slidsh = function(){
    document.slidshiow.src=image[i];
    if(i<image.length -1)
    {
        i++;
    }else{
        i=0;
    }
    setTimeout("slidsh()",2000)
}
slidsh()
