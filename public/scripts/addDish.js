$(function(){
	// drag and drop tags
	$( ".dms-tag" ).draggable();
    $( "#selectedTags" ).droppable({
    	accept: ".dms-tag",	
      	drop: function( event, ui ) {
        	$( this )
        	.children("#selectedTagContainer")
			.append(ui.draggable.find("span"));
    	}
    });


    // date pickers
    $( ".dms-date-picker" ).datepicker();
});