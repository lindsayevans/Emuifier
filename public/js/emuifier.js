
$('input[type="number"]').bind('now keyup click', function(e){

	var base_size = parseInt($('#base-size').val(), 10),
			element_size = parseInt($('#element-size').val(), 10),
			precision = parseInt($('#result-precision').val(), 10)
	;

	if(e.type !== 'now'){
		window.history.pushState(
			{base_size: base_size, element_size: element_size, precision: precision},
			'',
			'?base-size=' + base_size + '&element-size=' + element_size + '&result-precision=' + precision
		);
	}

	calculate_size(base_size, element_size, precision);

}).filter(':last').trigger('now');

function calculate_size(base_size, element_size, precision){

	var em_size = parseFloat((100 / base_size * element_size / 100).toFixed(precision));

	$('#result')
		.css({fontSize: base_size})
		.find('span')
		.css({fontSize: em_size + 'em'})
		.text(em_size)
	;

	$('#computed-result').text(getComputedStyle($('#result span')[0]).fontSize);

}

function history_change(e){

	if(event.state == null){
		return false;
	}

	$('#base-size').attr('value', e.state.base_size);
	$('#element-size').attr('value', e.state.element_size);
	$('#result-precision').attr('value', e.state.precision);

	calculate_size(e.state.base_size, e.state.element_size, e.state.precision);

}

window.onpopstate = history_change;


