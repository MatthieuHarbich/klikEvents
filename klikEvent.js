KlikLayer.prototype.sideBox = function(){
	console.log(this);
	this.layerEventInit.push({
		sideBox: this.id
	})

}

KlikLayer.prototype.boxEvent = function(){
	console.log(this);
	this.layerEventInit.push({
		boxEvent: this.id
	})

}

KlikPath.prototype.sideBox = function(){
	
	console.log(this.layersId)
	var id = this.layersId[0].sideBox;
	console.log(id)
	$('#'+ id).empty();
	$('#'+ id).append('<button style="position:absolute; top: 10px; right: 10px;" id="closeBox"> X </button> <h1 style="text-align: center;">'+ this.polygon.element.name+'</h1>');
	
	$('#'+ id).fadeIn( 200, function() {

		  });
	$('#closeBox').on('mousedown',function(){
		$('#'+ id).fadeOut( 200, function() {

		  });
	})
	
	
}


KlikPath.prototype.boxEvent = function(){
	var id = this.layersId[0].boxEvent;

}