 /**
 * Created by ASUS on 2018/6/27.
 */

/*
$(function () {
    $(window).scroll(function () {

        if ($(window).scrollTop() > 266) {
            $(".db").css("display", "block");
        } else {
            $(".db").css("display", "none");
        }
    })
});
*/
$(document).ready(function() {
    //上边的导航
    $("#p1_top").click(function() {
        $("html, body").animate({
            scrollTop: $("#div1").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p2_top").click(function() {
        $("html, body").animate({
            scrollTop: $("#div2").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p3_top").click(function() {
        $("html, body").animate({
            scrollTop: $("#div3").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p4_top").click(function() {
        $("html, body").animate({
            scrollTop: $("#div4").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p5_top").click(function() {
        $("html, body").animate({
            scrollTop: $("#div5").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p6_top").click(function() {
        $("html, body").animate({
            scrollTop: $("#div6").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p7_top").click(function() {
        $("html, body").animate({
            scrollTop: $("#div7").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p8_top").click(function() {
        $("html, body").animate({
            scrollTop: $("#div8").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });

    //左边的导航
    $("#p1_left").click(function() {
        $("html, body").animate({
            scrollTop: $("#div1").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p2_left").click(function() {
        $("html, body").animate({
            scrollTop: $("#div2").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p3_left").click(function() {
        $("html, body").animate({
            scrollTop: $("#div3").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p4_left").click(function() {
        $("html, body").animate({
            scrollTop: $("#div4").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p5_left").click(function() {
        $("html, body").animate({
            scrollTop: $("#div5").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p6_left").click(function() {
        $("html, body").animate({
            scrollTop: $("#div6").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });

    //四个大框
    $("#p1_bottom").click(function() {
        $("html, body").animate({
            scrollTop: $("#div1").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p2_bottom").click(function() {
        $("html, body").animate({
            scrollTop: $("#div2").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p3_bottom").click(function() {
        $("html, body").animate({
            scrollTop: $("#div3").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    $("#p4_bottom").click(function() {
        $("html, body").animate({
            scrollTop: $("#div4").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    
    //back_top返回顶部
    $("#back_top").click(function() {
        $("html, body").animate({
            scrollTop: $("#top_back").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
});
$(function () {
    var container = $('#container');
    var list = $('#list');
    var buttons = $('#buttons span');
    var prev = $('#prev');
    var next = $('#next');
    var index = 1;
    var len = 5;
    var interval = 5000;
    var timer;
	// 颜色轮播数组 
    var a = new Array("#fff","#141443", "#0c1532", "#54a2a0", "#231c18");
    var qua = $('.qua');

    function animate (offset) {
        var left = parseInt(list.css('left')) + offset;
        if (offset>0) {
            offset = '+=' + offset;
        }
        else {
            offset = '-=' + Math.abs(offset);
        }
        list.animate({'left': offset}, 300, function () {
            if(left > -200){
                list.css('left', -968 * len);
            }
            if(left < (-968 * len)) {
                list.css('left', -968);
            }
        });
    }
	// 小按钮和颜色变换 
    function showButton() {
        buttons.eq(index-1).addClass('on').siblings().removeClass('on');
        qua.css({"background":a[index-1]});

    }

    function play() {
        timer = setTimeout(function () {
            next.trigger('click');
            play();
        }, interval);
    }
    function stop() {
        clearTimeout(timer);
    }
	//下一张图片的点击事件 
    next.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (index == 5) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-968);
        showButton();
    });
	 //上一张图片的点击事件
    prev.bind('click', function () {
        if (list.is(':animated')) {
            return;
        }
        if (index == 1) {
            index = 5;
        }
        else {
            index -= 1;
        }
        animate(968);
        showButton();
    });
	// 导航图标的按钮点击事件图片切换 
    buttons.each(function () {
        $(this).bind('click', function () {
            if (list.is(':animated') || $(this).attr('class')=='on') {
                return;
            }
            var myIndex = parseInt($(this).attr('index'));
            var offset = -968 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        })
    });
	// 移动鼠标在图片上的停止和播放 
    container.hover(stop, play);

    play();

});
