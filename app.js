if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file!')
}

/////////////////////////////////////////////////////////////////////
//////////// YEAR 1
/////////////////////////////////////////////////////////////////////


// $(() => {
//     // put jQuery in here
// });

const $container = $('#container');
console.log($container)

const $h1 = $('<h1>');
console.log($h1);

$h1.text('Hogwarts');
$('#container').append($h1);

///////////////////////////////////////////////////////////////////////
//////////// YEAR 2
///////////////////////////////////////////////////////////////////////

const $h2 = $('<h2>');
$h2.text('Christine W');
$('#container').append($h2);


const $h3 = $('<h3>');
$h3.text('Hufflepuff');
$('#container').append($h3);

const $h4 = $('<h4>');
$h4.addClass('cat');
$h4.text('Vera');
$('#container').append($h4);

const $h5 = $('<h5>'); 
$h5.text('Holly Wand with Unicorn Hair Core');
$('#container').append($h5);