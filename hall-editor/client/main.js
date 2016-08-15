

Template.editor.helpers({
	allSeats: function() {
		var sGet = Session.get('parameters');
		if (sGet) {
			var x = sGet.rowX; //ряды
			var y = sGet.rowY; //сиденья
			var totalSeats = x * y;
			console.log(totalSeats);

			var objects = []
			var cy = 0;
			var cx = 0;
			for(var rows = 1; rows <= x; rows++) {
				cy += 25;
				cx = 0;
				for(var seats = 1; seats <= y; seats++) {
					cx += 25;
					objects.push({
						param: {
							row: rows,
							seat: seats
						}, position: {
							cx: cx,
							cy: cy
						}
					})
					console.log('row', rows, 'seat', seats, "cx", cx, "cy", cy);
				}
			}
				
			console.log(objects);
		}
		return objects;
	}
});

Template.form.events({
  'click #submit': function(event, template) {
    	var getSvg = $('svg');
    	var parameters = {
    		rowX: parseInt($('[name=rows]').val()),
    		rowY: parseInt($('[name=seats]').val())
    	}
    	Session.set("parameters", parameters);
	}
});



