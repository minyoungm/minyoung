$(document).ready(function () {
    var i = -1;
    var no = -1;


    $('.landing .background li').eq(i).css({ 'opacity': '1' })

    setInterval(function () {
        i++;
        no++;

        if (i == 3) i = 0
        if (no == 3) no = 0

        // console.log(i)
        $('.landing .background li').eq(i - 1).stop().animate({ 'opacity': '0' })
        $('.landing .background li').eq(i).stop().animate({ 'opacity': '1' })
        $('.background li').removeClass('on_pic')
        $('.background li').eq(i).addClass('on_pic')

        //  console.log(no)
        $('.no span').removeClass('on')
        $('.no span').eq(no).addClass('on')








    }, 2500);


    // .no를 클릭했을 때 번호를 구하고 해당번호의 .ladning .background li이 떠라.

    $('.no span').click(function () {
        var a = $(this).index()

        console.log(a)




    })



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
        // .popUp에 span을 클릭했을 때 .popUp이 닫혀라
        


        






})