//Globaly available
//string
var students = "Samir";
//int
var numBelts = 3;
//Array of strings
var stacks = ["Python","Java","MERN"];
//Ojects
var JobApp = {
    company:"Google",
    location:"Austin, TX",
    dateApplied:"2021-08-30",
    yearsExperianced: 36,
    experianceLevel: "entry",
    applyAnyways:"true",
    applicants:["Samir","Emile","Jacob","Alex"]
}

//has access to whatever is in the function and whatever is globaly available
function doSomething(){
    for (var i = 0; i < stacks.length; i++){
        console.log(stacks[i])
    }
    crap()
}

function crap(){
    var name = "Anna";
    var name2 = ["Samir","Emile","Jacob","Alex"]

    console.log("Hello" + " " + name);
    console.log("Hello" + " " + name2[2]);
}

//var--> functionality scoped
//let--> block scoped

doSomething()
crap()