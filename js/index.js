/**
 * Created by 懿懿 on 2018/4/17.
 */

$(function () {
    var count = 0;

    $('.arr_r').click(function () {
        count++;

        if(count == $('.jd-col2-left>ul>li').length){
            count = 0;
        }
        console.log(count);
        $('.jd-col2-left>ol>li').eq(count).addClass('current').siblings('li').removeClass('current');

        $('.jd-col2-left>ul>li').eq(count).fadeIn(1000).siblings('li').hide();
    });

    $('.arr_l').click(function () {
        count--;
        if(count == -1){
            count = $('.jd-col2-left>ul>li').length - 1;
        }
        console.log(count);
        $('.jd-col2-left>ol>li').eq(count).addClass('current').siblings('li').removeClass('current');
        $('.jd-col2-left>ul>li').eq(count).fadeIn(1000).siblings('li').hide();
    });

    $('.jd-col2-left>ol>li').click(function () {
        var idx = $(this).index();
        count = idx;
        $('.jd-col2-left>ol>li').eq(count).addClass('current').siblings('li').removeClass('current');
        $('.jd-col2-left>ul>li').eq(count).fadeIn(1000).siblings('li').hide();
    });

	setInterval(function(){
		$('.arr_r').trigger('click');
	}, 3000);
});

