console.log('it works');
let listOfEntry = [// An array of oject which stores the journals
    ["First",
     "This is My first Journal"
    ],
     ["Second",
     "It is the test day"
    ]
];

function journalProgram() {
let homePage = Number(prompt("Welcome to my journal program! \nChoose 1 to show the entry list \n Choose 2 to add a new entry \n Choose 3 to quit"));// Home page asking for what activithy they want to do

if(homePage === 1) {
    for(let i = 0; i < listOfEntry.length; i++) {// Loop through the array and console the journals in it
        alert(`title: ${listOfEntry[i][0]} \ncontent: ${listOfEntry[i][1]}`);
    }
    journalProgram();

} else if(homePage === 2) {// prompt for the title and content
    let title = prompt("Enter a title:");
    let  content = prompt("Type here the content");
    let newJournal = [title, content]; // new array to add into the list
    listOfEntry.push(newJournal);
    for(let i = 0; i < listOfEntry.length; i++) {
        alert(`title: ${listOfEntry[i][0]} \ncontent: ${listOfEntry[i][1]}`);
    }
    journalProgram();
    
} else {
    alert("Thank you");
}
}

journalProgram ();
