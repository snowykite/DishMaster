$(function(){
	$( ".dms-tag" ).draggable();
    $( "#selectedTags" ).droppable({
    	accept: ".dms-tag",	
      	drop: function( event, ui ) {
        	$( this )
        	.children("#selectedTagContainer")
			.append(ui.draggable.find("span"));
    	}
    });



});