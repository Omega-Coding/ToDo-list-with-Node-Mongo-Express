
// Event handler for crossing out a list item when its clicked on
$("ul").on("click", "li", function(){
	$(this).toggleClass("cross");
});


// Event handler for adding new items when they are entered in the input box
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var $newLi = "<li>"+$(this).val()+"</li>";
		var todo = {item: $(this).val()};
		$.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          location.reload();
        }
      });

		$(this).val("");
		$('ul#ul').append($newLi);

		return false;
	}
});



//Dynamically displaying delete button alongside list items when mouse is hovered above an item
$("ul").on("mouseenter", "li", function(){
	var bin = "<span id='delete'><i class='fa fa-trash-o' aria-hidden='true'></></span>";
	$(this).prepend(bin);

	$("#delete").on("click", function(e){
		var item = $(this).parent().text().replace(/ /g, "-");
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
      	$.ajax({
	        type: 'DELETE',
	        url: '/todo/' + item,
	        success: function(data){
	          location.reload();
        }
      });
		e.stopPropagation();
	});
});

$("ul").on("mouseleave", "li", function(){
	$("#delete").remove();
});

//Hiding the input box, when user clicks on the + button
$("#toggle").on("click", function(){
	$("input").toggleClass("hide");
});