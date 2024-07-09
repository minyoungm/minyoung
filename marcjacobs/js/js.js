$(document).ready(function () {
  
    // .product_inner 안에 있는 subCon의 a를 클릭했을 때, sub이 보이고, main이 사라져라
    $('.product_inner .subCon a').click(function(e){
        e.preventDefault()
        $('.sub').fadeIn()
        $('.main').fadeOut(function(){
            $('html, body').scrollTop(0);
        })
            
    })



    $('.no li').click(function(){
        var a = $(this).index();
        // console.log(a)

        $('.background li').css({'opacity':'1'}).stop().animate({'opacity':'0'})
        $('.background li').eq(a).css({'opaicity':'0'}).stop().animate({'opacity':'1'})


        $('.no li').removeClass('on')
        $(this).addClass('on')
    });


    //슬라이드 투명
    // 숫자 버튼 효과
    var b = -1;
    var c = -1;

    setInterval(function () {

        b++;
        c++;
        if (b == 3) b = 0
        if (c == 3) c = 0
        // console.log(b)
        console.log(c)

        $('.background li').eq(b - 1).stop().animate({ 'opacity': '0' }, 800);
        $('.background li').eq(b).stop().animate({ 'opacity': '1' }, 800)

        $('.no li').removeClass('on')
        $('.no li').eq(c).addClass('on')




    }, 2000);




    // .buy span a를 클릭했을 때, .popUp이 떠라

    $('.buy span a').click(function (e) {
        e.preventDefault();
        $('.popUp').show();
    })

    // .popUp에 span을 클릭했을 때 .popUp이 닫혀라
    $('.popUp span').click(function () {
        $('.popUp').hide()
    })



    // .util .cart a를 클릭했을 때, .cart_popUp이 떠라
    $('.util .cart a').click(function (e) {
        e.preventDefault();
        $('.cart_popUp').css({'display':'flex'});
    })

    // .cart_popUp.close을 클릭했을 때 .cart_popUp.close이 닫혀라
    $('.cart_popUp .close').click(function () {
        $('.cart_popUp').hide()
    })
    
        





})