let nameInput = document.getElementById("name");
let dob = document.getElementById("date");
let btn = document.getElementById("btn");
let resultDiv = document.getElementById("generation");

function calculateGen(){
    let nameValue = nameInput.value;
    let dateValue = dob.value;

    if(nameValue == "" || dateValue == ""){
        resultDiv.textContent = "Please enter your details";
        setTimeout(()=>{
            resultDiv.textContent = "";
        },2000)
        return;
    }

    let dateOfBirth = new Date(dateValue).getFullYear();
    let generation;

    if(dateOfBirth >= 2013){
        generation = "Gen Alpha";
    }else if(dateOfBirth >= 1997){
        generation = "Gen Z"
    }else if(dateOfBirth >= 1981){
        generation = "Millenial"
    }else if(dateOfBirth >= 1965){
        generation = "Gen X"
    }else if(dateOfBirth >= 1945){
        generation = "Baby Boomer"
    }else{
        generation = "Silent generation"
    }

    console.log("submited successfuly")

    resultDiv.textContent = "Hi! " + nameValue + ". Your generation is " + generation;

    setTimeout(() =>{
        resultDiv.textContent = "";
    },3000)

    nameInput.value = "";
    dob.value = "";
}