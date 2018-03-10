$(function(){
	// drag and drop tags
	$( ".dms-tag" ).draggable();
    $( "#selectedTags" ).droppable({
    	accept: ".dms-tag",	
      	drop: function( event, ui ) {
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
    	$( "#confirmDialog" ).dialog( "open" );
    });
});