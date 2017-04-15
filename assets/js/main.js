$(document).ready(function(){
	$(window).scroll(function(event) {
		var animate= $(window).scrollTop();
		console.log(animate);

		if (animate>50) {
			$(".navbar").css({
				height:'70px',
        background:'rgba(255, 255, 255, 0.9)',
			});
      $(".navbar-brand").css('padding-top','15px');
      $(".nav").css('margin-top','25px');
      $('.layer').find('img').css('margin-top','20px');
      $("navbar").css('z-index','1');
		}
		if (animate==0) {
			$(".navbar").css({
				height:'120px',
				background:'white',
			});
			$(".navbar-brand").css('padding-top','40px');
			$(".nav").css('margin-top','55px');
			$(".layer").find('img').css('margin-top','45px');
		}
	});
});
