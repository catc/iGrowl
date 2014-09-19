function startcb(){
	console.log( 'STARTINNNNNNNNNG' )
}

function endcb(){
	console.log( 'DONEEEEEEE' )
}


function displayIcons(pack, ind){
	return $.getJSON('/fonts/' + pack + '/selection.json').then(function(data){
		// console.log( 'data is: ', data )

		var section = $('#icons').append('<section class="'+pack+'"><div class="icons"></div></section>').find('section.'+pack+' div')
		
		section.parent().prepend('<h3>'+data.preferences.fontPref.metadata.description+'  <span>('+data.icons[1].icon.grid+'px grid)</span></h3>')


		// remove first icon: 	 '.i-times' 
		data.icons.shift()

		data.icons.forEach(function(ico){
			var name = [pack, ico.properties.name].join('-')
			section.append('<span class="i-'+name+'" name="'+name+'"></span>')
		})
	})
}



// ================ LOAD ICONS ================
var packs = ['vicons', 'feather', 'steadysets', 'linecons'],
	deferred = []

packs.forEach(function(pack){
	deferred.push( displayIcons(pack) )
})

$.when.apply(null, deferred).done(function() {
	
	// toggles icon section hide
	$('#icons h3').on('click', function(){
		var t = $(this)

		t.toggleClass('open').siblings().toggle()
	})

	// toggles icon click
	$('#icons div').on('click', 'span', function(){
		var t = $(this),
			icon = $('input[name="icon"]')

		
		if ( t.hasClass('active') ){
			t.removeClass('active')
			icon.val('')

		} else {
			t.parents('#icons').find('span').removeClass('active')
			t.addClass('active')

			icon.val(t.attr('name'))
		}
	})
});	


// start scrollspy
$('body').scrollspy({ target: '#sidebar' })

// set up demo
$('.demo').on('submit', function(e){
	e.preventDefault()
	var data = $(this).serializeJSON({parseAll: true})

	var placement = data.placement.split(' ')

	data.placement = {}
	data.placement.y = placement[0]
	data.placement.x = placement[1]

	$.iGrowl(data)
})


// enable <select> styling 
$('#d-small, #d-type, #d-animation').selectric()

$.getJSON('/javascripts/animate.json').then(function(data){
	var onshow = $('#d-animshow'),
		onhide = $('#d-animhide')

	
	for ( group in data.enter ) {
		var sep = group.split('_').join(' ')
		onshow.append('<option disabled>'+ sep.charAt(0).toUpperCase() + sep.slice(1) +':</option>')
		for ( anim in data.enter[group] ){
			onshow.append('<option value="'+anim+'">'+anim+'</option>')
		}
	}

	for ( group in data.exit ) {
		var sep = group.split('_').join(' ')
		onhide.append('<option disabled>'+ sep.charAt(0).toUpperCase() + sep.slice(1) +':</option>')
		for ( anim in data.exit[group] ){
			onhide.append('<option value="'+anim+'">'+anim+'</option>')
		}
	}


	$('#d-animshow, #d-animhide').selectric()

})


var k = {}
$('.example code').each(function(i){
	k[ $(this).attr('ex') ] = $(this).html()
})


$('.example button').on('click', function(){
	var num = $(this).siblings('pre').find('code').attr('ex')
	eval(k[num])
})
// var k  = $('.example button').siblings('pre').find('code').html()

// console .log( k )
// eval(k)
// var j = 'function(){console.log("yeye")}'
// var fn = window[j]
// fn()
// fn.apply(null)
/*var fn = window[k]
fn()*/
// JSON.parse(k)
// k.call()
// eval(k)
// $(k)










/*	ICON DISPLAY:
	set title 'Steadysets icons - (16px grid)'
	get each icon
	shift() first one


*/


/*	ICON OPTIONS
each font set separately 
	font files named icomoon-typicons
	stylesheet for each font set
		make sure each set content starts from different '\e00' - UNNECESSARY
		each font has different prefix - eg: 		i-typicons-support

	each file contains the typicons 'i-times' icon


*/

