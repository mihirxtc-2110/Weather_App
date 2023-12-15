getWeather = () => {
    let weather = document.getElementById("weather").value;
    console.log(weather);

    let suggestion = document.getElementById("suggestion");

    if (weather == "rainy" || weather == "Rainy" ) { 
        suggestion.innerHTML = "<h2>It looks like weather is " + weather + ", Please carry your umbrealla ☔ with you.</h2>"
    } else if (weather == "sunny" || weather == "Sunny" ) {
        suggestion.innerHTML = "<h2>It looks like weather is " + weather + ", Please wear your sunglasees 😎.</h2>"
    } else {
        suggestion.innerHTML = "<h2>Please enter a valid weather condition, you entered " + weather +"</h2>";
    }
}
