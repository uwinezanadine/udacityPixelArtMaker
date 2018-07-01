// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//select the size of the row
var rowSize;
$('#inputHeight').on('change', function(){
	rowSize  = Number($('#inputHeight').val());
});


//select the size of the column
var colSize;
$("#inputWeight").on("change", function(){
	colSize  = Number($("#inputWeight").val());
});

/*
 * function that sets the size of the grid to  row size and column size
 * selected and sets each cell clicked to the color picked
 */
function makeGrid() {
// loop that sets the height and width of the grid.
for (var i = 1; i <= rowSize; i++) {
	$('#pixelCanvas').append('<tr></tr>');
	for(var j = 1; j <= colSize; j++){
		$('tr').last().append('<td></td>');
	}
}
//set the clicke cell to the color selected by the color picker
$('#pixelCanvas').on('click','td',function(){
	var color = $('#colorPicker').val();
	$(this).css('background-color',color);

});
event.preventDefault();
}

//call the function makeGrid
$('#sizePicker').on('submit',makeGrid);


