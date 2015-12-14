
$(document).ready(function() {

	$("#move").click(function() {

		var translateX = parseInt($("#x").val());
		console.log(translateX);
		var translateY = parseInt($("#y").val());
		console.log(translateY);

		$("img").animate({
			left:  "+=" + translateX + "px",
			top:  "+=" + translateY + "px"
		});
	});

});
