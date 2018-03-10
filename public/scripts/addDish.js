$(function(){
	// drag and drop tags
	var selectedTags = [];
	$( ".dms-tag" ).draggable();
    $( "#selectedTags" ).droppable({
    	accept: ".dms-tag",	
      	drop: function( event, ui ) {
      		selectedTags.push(ui.draggable.find("span").text());

        	$( this )
        	.children(".tags-container")
			.append(ui.draggable.find("span"));


    	}
    });


    // date pickers
    $( ".dms-date-picker" ).datepicker();

    // confirm dialog
    $( "#confirmDialog" ).dialog({
    	autoOpen: false
    });

    $(document).on("click", "#confirmDishDetails", function(){
    	$("#dishLabelConfirm").text(JSON.stringify(selectedTags));
    	$("#dishNameConfirm").text($("#dishNameInput").val());
    	$("#restaurantConfirm").text($("#restaurantInput").val());
    	$("#dateConfirm").text($("#dateInput").val());
    	
    	$( "#confirmDialog" ).dialog( "open" );
    });
});