// https://api.openweathermap.org/data/2.5/weather?q=ANKARA&appid=d05a40a07d0a11705e0cd93dc33af6d5&lang=tr&units=metric
let submit = document.getElementById("submitbutton");
let inputbox = document.getElementById("inputbox");
let cities = document.querySelector(".cities");

async function getApi(url) {
    let state1 = await fetch(url);
    let state2 = await state1.json();
    return state2
}

// getApi("https://api.openweathermap.org/data/2.5/weather?q=ANKARA&appid=d05a40a07d0a11705e0cd93dc33af6d5&lang=tr&units=metric").then(item => console.log(item.main.temp))




submit.addEventListener("click", (e) => {
    e.preventDefault();
    getApi(`https://api.openweathermap.org/data/2.5/weather?q=${inputbox.value[0].toUpperCase() + inputbox.value.substring(1)}&appid=d05a40a07d0a11705e0cd93dc33af6d5&lang=tr&units=metric`).then(item => 
    cities.innerHTML += `
    <li>
          <div class="card">
            <h2> ${item.name} </h2>
            <h1>${item.main.temp} C</h1>
            <h3> ${item.weather[0].description} </h3>
          </div>
        </li>
    
    `)
    
})