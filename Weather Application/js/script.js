const button = document.querySelector(".btn")
const weatherContent = document.querySelector(".weatherContent")

// http://api.weatherapi.com/v1/current.json?key=a9bed099f17c4914a90135952250509&q=30,31
const apiKey = 'a9bed099f17c4914a90135952250509'
const url = 'http://api.weatherapi.com/v1/current.json?key=a9bed099f17c4914a90135952250509&q=30.0497,31.0872'
button.addEventListener("click", function () {

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        weatherContent.innerHTML = `
        <h2>Location: ${data.location.name}</h2>
        <p>Temperature: ${data.current.temp_c} C</p>
        <p>Weather: ${data.current.condition.text} </p>
        `
    })
    

})