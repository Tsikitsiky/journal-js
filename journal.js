console.log('it works');
let listOfEntry = [// An array of oject which stores the journals
    { title: "First",
     content: "My first journal is this sentence."
},
     {title:"Second",
     content:"It is the test day."
}
];

function startMenu() {
    let homePage = Number(prompt("Welcome to my journal program! \nChoose 1 to show the entry list \nChoose 2 to add a new entry \nChoose 3 to quit \nChoose 4 to delete the last entry"));// Home page asking for what activithy they want to do
        if(homePage === 1) {
        showList()
        } else if(homePage === 2) {
        addingNewJournal();
        } else if(homePage === 4) {
            listOfEntry.pop();
            startMenu();
        } else {
            alert("Thank you");
        }
}

function showList() {// showing the list of the existing journal
    for(let i = 0; i < listOfEntry.length; i++) {// Loop through the array and console the journals in it
        alert(`Title: ${listOfEntry[i].title} \nContent: ${listOfEntry[i].content}`);
    }
    startMenu();
}

function addingNewJournal() {// prompt for the title and content
    let title = prompt("Enter a title:");
    let  content = prompt("Type here the content");
    let newJournal = {title, content}; // new array to add into the list
    listOfEntry.push(newJournal);// adding the new array to the journal list
    startMenu();
}

startMenu ();
