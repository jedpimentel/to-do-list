//type into input
//User can click 'add to list' to add food item into ul
$("#addToList").on("click", function() {
  var text = $("input").val();
  $("ul").append('<li><span class="item">' + text + '  </span><a href="#" class="revise">edit</a> <a href="#" class="remove">remove</a></li>');
	$("li").last().on("click", function() {
    $(this).toggleClass("checkedOff")
  });
  updateCount()
});
function updateCount() {
	$("#todosLeft").html($("li").length - $(".checkedOff").length)
}
//User can click 'clear list' to clear whole list
$("#clearList").on("click", function() {
  var dissapear = $("ul").val;
  $("#itemList ul").empty();
  updateCount()
});
//User can click 'clear completed' to clear items aleady bought
$("#clearCompleted").on("click", function() {
  var dissapear = $("ul").val;
  $(".checkedOff").remove();
});

$("li").on("click", function() {
  // if $(this) has the classes for the edit or remove button, that means you want to edit or remove, NOT toggle the checkedOff class, since that is something different
  // NOTE: technically this also toggles the class whenever you click edit or remove
  $(this).toggleClass("checkedOff")
  updateCount();
});
//User can click edit button to edit food item in ul
//User can click remove to remove food item from ul
//User can click "you have # todo left" appears when items listed
//User can click it updates automatically
//user can click a line item and it gets striked out
function magic(text) {
  $("body").append(text)
}
updateCount()
