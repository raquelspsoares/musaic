$( document ).ready(function() {
	$(".square").click(function () {
		var square = $(this);
		var id = square.data("id");
		var content = $("#content" + id);
		content.show();
		content.offset(square.offset());
		content.width(square.outerWidth());
		content.height(square.outerHeight());
		square.hide();

		content.click(function(event){
			event.stopPropagation();
		});

		content.animate({
			backgroundColor: "white",
			left: "10%",
			top: "10%",
			width: "80%",
			height: "80%"
		}, 400, function () {
			$(window).click(function() {
				closeContent(content, square);
			});
			$(document).keyup(function(e) {
				 if (e.keyCode == 27) {
					closeContent(content, square);
				}
			});
		});
	});
});

var closeContent = function(content, square) {
	square.show();
	var left = square.offset().left;
	var top = square.offset().top;
	square.hide();
	$(window).off("click");
	$(document).off("keyup");
	content.off("click");
	content.animate({
			backgroundColor: "rgba(0, 0, 0, 0.25)",
			left: left,
			top: top,
			width: square.outerWidth(),
			height: square.outerHeight()
		}, 400, function () {
			content.hide();
			square.show();
		});
}