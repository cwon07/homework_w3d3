const h1 = document.querySelector('h1') // is the same as
const $h1 = $('h1')

// selecting an element
h1.innerHTML = 'Hello World'; // is the same as
$h1.html('Hello World');

// element creation
const h2 = document.createElement('h2'); // creates the h2 element
h2.innerText = 'Goodbye World' // making it to show Goodbye World
document.querySelector('body').appendChild('h2') // adding it to the body as h2

// the same as above in jQuery
const $h2 = $('<h2>') // creates the h2 element
$h2.text('Goodbye World') // adding the text
$('body').append($h2) // adding it to the body as h2

// events in plain vanilla JS
const h1 = document.querySelector('h1');
h1.addEventListener('click', (e) => {
    console.log(e)
    h1.innerText = 'Goodbye World'
}) // when you click on h1 (which is Hello World) it will change to Goodbye World

// events in jQuery - same as above
const $h1 = $('h1')
$h1.on('click', (e) => {
    console.log(e)
    $h1.text('Goodbye World');
});

// creating your own web component - a batch of HTML 
class GoodbyeWorld extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = `<div><h1 style="color: orange;">Goodbye World</h1></div>`
    }
}

// registering the above to the browser
window.customElements.define('goodbye-world', GoodbyeWorld) 
// has to be a kebab case with - in between
//create <goodbye-world></goodbye-world> in HTML

// in the HTML, create <button>CLICK ME<button> and a <div> with ul 

// creating an array - a collection of data

let myArr = [1,2,3,4,5,6,7,8,9]
// accessing 3 from above
console.log(myArr[2]) 
//grabbing a random number from the array
const RandomArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
    // Math.random returns a random value between 0 and 1
    // Math.random takes a random number, multiplies that by the array's length,
    // then Math.floor rounds the number down
}

console.log(RandomArray(myArr)) 
//passes the array, will get a rounded number each time this line is used

let myArr = ['Hello World', 'Goodbye World', 'Hiya', 'What!', 'Ok']

let $ul = $('ul') // this grabs the ul on the page; stores the ul in the variable

for (phrase of myArr) { // created a loop; each time it loops, it creates a new li with the current phrase, then gets appended to the li
    let $li = $('<li>').text(phrase)
    $ul.append($li)
} // all the words in the array is printed on the site in an unordered list

// loop over the array above
for (phrase of myArr) { // loop over the array, everytime it loops it takes the next phrase and puts it in the variable phrase; phrase is a variable
    console.log(phrase) // prints all of the array
}

// add <h1> below the unordered list
let $h1 = $('h1') // this will grab two h1s

// to grab a specific one 
let $h1 = $('h1').eq(1) // grabbing the second one

$('button').on('click', (event) => { //.on is creating an event
    $h1.text(RandomArray(myArr))
}) // when the button on the site is clicked, it will print one of the elements in the array

// create 3 divs in HTML

const myArr = ['Hello', 'Goodbye', 'Farewell']

// loop - for each function to get index
myArr.forEach((value, index) => { 
    const $divs = $('div');
    // to loop over all the divs
    $divs.each(function(){
        const $div = $(this)
        $div.append($(`<h${index+1}>`).text(value)) // text is Hello Goodbye Farewell consecutively; first looping over Hello, loop over each div, adds an h1, then loop over Goodbye, loop over each div, adds an h2, etc.
    })
}); // when looping over a collection of jQuery object, the each function(line 95) needs to be used. What am I looping over? array or collection of jQuery object? 
// the website will print Hello Goodbye Farewell in h1 h2 h3 sizes 3 times

// plain vanilla ver.
myArr.forEach((value, index) => {
    const divs = document.querySelectorAll('div') // for grabbing all the divs, not just one 
    for (div of divs){
        const header = document.createElement(`h${index + 1}`)
        header.innerText = value
        div.appendChild(header)
    }
})


const $container = $('#container');
console.log($container)
