//when i click on the h1, i want it to change styles
$("h1").hover(function() {
	//$("body").toggleClass("dark new-style")
	//$("h1").toggleClass("new-style")

	$(this).css(
		{
			"background-color": "purple", 
			"color": "white",
			"text-transform": "lowercase"
		}
	)
},

	function(){
		$(this).css(
		{
			"background-color": "", 
			"color": "",
			"text-transform": ""
		}
	)


})

