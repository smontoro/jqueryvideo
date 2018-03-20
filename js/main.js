//element/type selector
document.getElementsByTagName("button") //vanilla JS
$("button")

//class selector
document.getElementsByClassName("box") //vanilla JS
$(".box")

//id selector
var cta = document.getElementById("cta") //vanilla JS
var cta = $("#cta")

//this selector
$(this)

//when I click o any element with class "box"; I wan to do stuff
$(".box").click(function() {
	//does stuff
})

// .show()
// .hide()
//when I click the button, i want the image to hide
$("#hide").click(function() {
	$("img").hide();
})
//when i click the show button, i want the image to show
$("#show").click(function() {
	$("img").show();
})

//when i click toggle, i want the image to hide OR show
$("#toggle").click(function() {
	$("img").toggle()
})