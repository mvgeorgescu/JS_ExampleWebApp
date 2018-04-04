$(function() {

// Step 1
// This code is executed when someone clicks the "Add Item" button
// at the top right of the shopping-item
// -------------------
	$(".add-item").on('click', function(event) {
		  event.preventDefault();
      var listItem = $('.item-input').val();
      if (listItem === "")  {
        alert('The string is empty');
      } else  {

		  var itemHtml = "<li><span class='item-check'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'></span></li>";
      $('.shopping-list').append(itemHtml)
      $('.add-item').text("Button Clicked").css("background", "gray");
      $('.item-input').val('');
      $('.amount').html($('.shopping-list li').length);
      }
  });
// -------------------


// Step 2
// -------------------
// This code is executed when someone clicks the "X" button
// at the top right of the shopping-item
	$(".shopping-list").on('click', '.item-remove', function(event) {
      $(event.currentTarget).parent().remove();
      $('.amount').html($('.shopping-list li').length);
      // Use event.currentTarget to remove the shopping item from the shopping list
	});
// -------------------

// Step 3
// This code is executed when someone clicks the checkbox in the shopping-item section
// -------------------
	$(".shopping-list").on('click', '.item-check', function(event) {
      $(event.currentTarget).toggleClass('complete');
      // Use event.currentTarget to add and remove the "complete" class to the checkbox
	});
// -------------------

//Additional Challenges
//If you add an item with no text, it adds a blank box. This is a bug! Fix it.
//Add a counter that tells the user how many items are in your shopping list

});
