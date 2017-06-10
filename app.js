//document is an object and we are invoicking ready function
$(document).ready(function() {

	var color = 'white';
	var colors = 'red green blue yellow white';


	$('#red').on('click', function() {
		color = 'red';
	});

	$('#green').on('click', function() {
		color = 'green';
	});

	$('#blue').on('click', function() {
		color = 'blue';
	});

	$('#yellow').on('click', function() {
		color = 'yellow';
	});

	$('#white').on('click', function() {
		color = 'white';
	});


	// $('.box').on('click', function() {
	// 	$(this).addClass(color);
	// });

	$('.box').on('mousedown', function() {
		$('.box').on('mouseenter', function () {
		$(this).addClass(color);
		});	
	});

	$('.box').on('mouseup', function() {
		$('.box').off('mouseenter');
	});

	$('.box').on('dblclick', function() {
		$(this).removeClass(colors);
	});

	$('#reset').on('click', function() {
	$('.box').removeClass(colors);	
	}); //id's should only be used once
	
})