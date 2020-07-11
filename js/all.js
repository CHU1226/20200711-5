$(document).ready(function() {
    $(".evepicbx-1").click(function(){
        $(".eveimgbx img").attr('src','img/event1.jpg')
    });
    $(".evepicbx-2").click(function(){
        $(".eveimgbx img").attr('src','img/event2.jpg')
    });
    $(".evepicbx-3").click(function(){
        $(".eveimgbx img").attr('src','img/event3.jpg')
    });
    $(".evetext").hide();
    $(".evetext:first").show();
    $(".evepicbx img").click(function(){
        $(".evetext").hide();
        var activetab = $(this).attr("href");
        $(activetab).fadeIn();
    });
    $(".pdtab").hide();
    $(".pdtab:first").show();
    $(".line").click(function(){
        $(".pdtab").hide();
        var activepd = $(this).attr("href");
        $(activepd).fadeIn();
    });
    $(".pdct").hide();
    $(".pdct:first").show();
    $(".pdtab img").click(function(){
        $(".pdct").hide();
        var activect = $(this).attr("href");
        $(activect).show();
    });
    $(".line p").click(function(){
        $(this).addClass("check").siblings(".line p").removeClass("check");
    });
    $('#list').click(function(){
        $('#menu').css('right','0');
    });
    $('#off').click(function(){
        $('#menu').css('right','-50%');
    });
    $(".form-btn.b1").click(function(){
        alert("表單已送出")
    });
    $('.logon button').click(function(){
		alert('目前沒有網路請稍後再試')
	});
	$('#log').click(function(){
		$('form#logon').fadeIn();
		$('.dark-bg').fadeIn();
	});
	$('.logon .change').click(function(){
		$('form.logon').fadeOut();
		$('.dark-bg').fadeOut();
    });
    $('.join').click(function(){
		$('#joinus').fadeIn();
		$('.dark-bg').fadeIn();
	});
	$('.register').click(function(){
		$('#register').fadeIn();
		$('.dark-bg').fadeIn();
		 $('form#logon').fadeOut();
    });
    $('form.logon img').click(function(){
        alert('目前沒有網路請稍後再試')
    })
});
