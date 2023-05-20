// events
// node.addEventListener("click", () => {}) // do this() when this click occurs
// "click" => when you click on the element
// "submit" => when a form is submitted (click submit or hit enter)

// selecting the form from the dom
const form = document.querySelector("form")

// listen for the submit event on the form
form.addEventListener("submit", (event) => { // parameter(event) must be indicated
    // prevents the page from refreshing the submit
    event.preventDefault()

    //examine the event object
    // console.log(event)
    // the thing that triggered the event
    // console.log(event.target)

    //grabbing an individual input (one element at a time)
    // console.log(document.querySelector("input[name='name']"))
    // console.log(document.querySelector("input[name='name']").value)

    // using a FormData object to get the data
    const formData = new FormData(form) // form came from line 7
    console.log(formData)
    console.log(formData.get("name")) // getting an individual input

    const name = formData.get("name")
    const age = formData.get("age")
    const happy = formData.get("happy")
    console.log(name, age, happy)

    // populate the p element
    const p = document.querySelector("p")
    // ternary: expression ? true : false (for happy)
    p.innerText = `${name} is ${age} years old and ${happy === "on" ? " is happy" : "is not happy"}`

    // turn on the dialogue box
    const dialog = document.querySelector("dialog")
    dialog.showModal() // dialogue box shows up like a pop up

    console.log("Hello")
});

//for closing the modal
document.querySelector("dialog").addEventListener("click", (event) => {
    const dialog = event.target
    dialog.close()
})
