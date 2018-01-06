// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event){
	// fade out whole li and remove it
	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	});
	// stops click from bubbling up to li
	event.stopPropagation();
});

// get text and make new todo
$("input[type='text']").keypress(function(event){
	// if user pressed enter in input
	if(event.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(300);
});