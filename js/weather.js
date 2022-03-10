

var button = document.querySelector('.button');

var inputText = document.querySelector('.inputText');

var cityName = document.querySelector('.cityName');

var description = document.querySelector('.description');

var temperature = document.querySelector('.temperature');

button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputText.value+'&appid=9361bd03ec7175e9eea92fdf7a717518')
.then(resolve => resolve.json())
.then(data => {
    var cityNameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    cityName.innerHTML = cityNameValue;
    temperature.innerHTML = tempValue;
    description.innerHTML = descValue;

})
.catch(err=> alert("Hmm, I cannot seem to find that city. Please try again."))
})