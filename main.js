let stringSaveForm = document.querySelector("#string-save-form");
let stringInput = document.querySelector("#string-input");
let savedStringDiv = document.querySelector("#saved-string");

let savedStringValue = localStorage.getItem("savedStringValue");

if (savedStringValue === null) {
    savedStringDiv.innerText = "Nothing was saved, submit an item into the form";
}
else {
    savedStringDiv.innerText = savedStringValue;
}

stringSaveForm.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.setItem("savedStringValue", stringInput.value);
    console.log(localStorage.getItem('savedStringValue'));
    savedStringValue = localStorage.getItem("savedStringValue");
    savedStringDiv.innerText = savedStringValue
})

// challenge 2
let counter = document.querySelector("#counter");

let savedCount = localStorage.getItem("savedCount");

if (savedCount === null) {
    savedCount = 0;
    counter.innerHTML = savedCount;
}
else {
    counter.innerHTML = savedCount;
}

savedCount++
localStorage.setItem("savedCount", savedCount);

//challenge 3
let listForm = document.querySelector("#list-builder-form");
let listInput = document.querySelector("#list-input");
let listOutputDiv = document.querySelector("#list-output");
let listDisplay = document.querySelector("#list-display");

listDisplay.innerText = "You have nothing in your list.";

listForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let newItem = listInput.value;

    // add new list items to the saved array
    let items = localStorage.getItem("items");

    if (items === null) {
        listDisplay.innerText = "";
        items = [newItem];
        localStorage.setItem("items", JSON.stringify(items))
    }
    else {
        items = JSON.parse(items)
        items.push(newItem);
        localStorage.setItem("items", JSON.stringify(items))
    }
    for (let string of items) {
        let listItem = document.createElement("li");
        listItem.innerText = string;
        listDisplay.appendChild(listItem);
    }



})