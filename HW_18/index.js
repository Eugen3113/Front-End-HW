const CARCONTAINER = document.getElementById("car-container");

async function loadCars() {
    const respons = await fetch('ttps://eugen3113.github.io/Front-End-HW/')
    const cars = await respons.json();
    cars.forEach((car) =>{

    })
}