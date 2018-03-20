//when i click on the h1, i want it to change styles
$("h1").click(function() {
	//$("body").toggleClass("dark new-style")
	//$("h1").toggleClass("new-style")

	$("h1").css(
		{
			"background-color": "purple", 
			"color": "white",
			"text-transform": "lowercase"
		}
	)
})