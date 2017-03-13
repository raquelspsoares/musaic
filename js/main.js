$( document ).ready(function() {
	$(".square").click(function () {
		var id = $(this).data("id");
		var content = $("#content" + id);
		console.log($(this).position());
		content.offset($(this).offset());
		content.width($(this).outerWidth());
		content.height($(this).outerHeight());
		content.show();
		$(this).hide();
		content.animate({
			backgroundColor: "white",
			left: "10%",
			top: "10%",
			width: "80%",
			height: "80%"
		}, 400, function () {

		});
	});
});