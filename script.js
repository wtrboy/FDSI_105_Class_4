// create object literal for the pet salon (one)
// include name, phone, address(street,number)

const salon = {
    name: "The Fashion Pet",
    phone: "555-555-5555",
    address: {
        street: "S. University Avenue",
        number: "528-K"
    },
    counter: function () {
        alert("A pet was registered!");
    },
    pets: []
}

// use object destructuring
let {
    name,
    phone,
    address: {
        street,
        number
    },
    counter,
    pets
} = salon;
document.getElementById("footer-info").innerHTML = `
    <p class="text-center">${name} ${phone} <br> ${street}, ${number} </p> 
    `;

//console.log(pets);

// object constructor for the pets (multiple)
// name, age, breed, gender, service, ownersName, contactPhone

var petId = 0;

class Pet {
    constructor(name, age, breed, gender, service, ownerName, contactPhone) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;
        this.id = petId;
        petId += 1;
    }
}

// create pets
const scooby = new Pet("Scooby", 60, "Dane", "Male", "Full Service", "Shaggy", "556-666-4444");
pets.push(scooby);

// getting the values from the HTML inputs
var txtName = document.getElementById('petName');
var txtAge = document.getElementById('petAge');
var txtBreed = document.getElementById('petBreed');
var txtGender = document.getElementById('petGender');
var txtService = document.getElementById('petService');
var txtOwner = document.getElementById('ownerName');
var txtPhone = document.getElementById('contactPhone');

const frankie = new Pet("Frankie", 4, "French Bulldog", "Male", "Fancy Service", "Lane", "556-666-4445");
pets.push(frankie);

const gracie = new Pet("Gracie", 12, "Basset Hound", "Female", "Primping&Clipping Service", "Suzanne", "556-666-4446");
pets.push(gracie);

displayTable(scooby);
displayTable(frankie);
displayTable(gracie);

//register function
function register() {

    const thePet = new Pet(txtName.value, txtAge.value, txtBreed.value, txtGender.value, txtService.value, txtOwner.value, txtPhone.value);
    console.log(thePet);
    //push the pet to the array
    pets.push(thePet);
    console.log(pets);
    //call the counter function
    // counter();
    clear();
    //display on the HTML the pets 
    displayTable(thePet);

}

function clear() {
    txtName.value = "";
    txtAge.value = "";
    txtBreed.value = "";
    txtGender.value = "";
    txtOwner.value = "";
    txtPhone.value = "";
}

function status() {
    alert("Registered pets:" + pets.length);
    console.log("Registered pets:" + pets.length);

    //travel the array to display pets' name
    for (i = 0; i < 3; i++) {
        console.log(pets[i].name);
    }
}

// status ();

function displayList(thePet) {
    //select the HTML element petList
    var list = document.getElementById('petList');
    //create the li code for the pet
    var li = `
    <li id="${aPet.id}"> ${aPet.name} ${aPet.age} ${aPet.breed} ${aPet.gender} ${aPet.service} ${aPet.ownerName} ${aPet.contactPhone}<button> Delete </button onclick="deletePet(${aPet.id});> </li>
    `;
    //insert li in the petList
    list.innerHTML += li;
}

//displayTable(scooby); // display the pet in a list item (li)

function displayTable(aPet) {
    // ** register.html create a <table id=""> </table> ** without rows

    // select the table $(jquery) or js (getElementById)
    var table = document.getElementById('petTable');
    // create a <tr> <td> name of pet </td> <td> age </td> <tr>
    var tr = `
    <tr id="${aPet.id}"><td>${aPet.name}</td><td>${aPet.age}</td><td>${aPet.breed}</td><td>${aPet.gender}</td><td>${aPet.service}</td><td>${aPet.ownerName}</td><td>${aPet.contactPhone}</td><td><button onclick="deletePet(${aPet.id});"> Delete </button></td></tr>
    `
    // insert the tr in table
    table.innerHTML += tr;
}

function deletePet(petId) {
    console.log("delete pet" + petId);
    // add an id to the tr/li and add a delete button 
    var indexDelete;
    var tr = document.getElementById(petId);
    //search the pet (travel array an find the pet)
    for (var i = 0; i < pets.length; i++) {
        var selectedId = pets[i].id;
        if (selectedId === petId) {
            indexDelete = i;
        }
    }
    //delete from the array splice()
    pets.splice(indexDelete, 1)
    //delete from the html using the remove()
    tr.remove();
}

function search() {
    // get the info from the input and save it in a var .value
    // txtsearch
    var ss = document.getElementById("searchPet").value;
    console.log(ss);
    for (var i = 0; i < pets.length; i++) {
        var foundPet = pets[i];
        if (foundPet.name.toLowerCase() == ss.toLowerCase()) {
            console.log("Found" + foundPet.id);
            //CR homework // Do something to highlight the result on the tabled
            //use the id (foundPet.id) and setAttribute function ('class','highlight');
            //add css to the inputs and to the table (can use bootstrap);
            document.getElementById(foundPet.id).setAttribute("style", "background-color: yellow;");
        } else {
            console.log("It doesn't exist");
        }
    }
}

