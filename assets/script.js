var cityState = document.querySelector('input');
var searchBtn = document.querySelector('.btn');

console.log(searchBtn);
console.log(cityState);






//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//var geoLocation = http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid={API key}


searchBtn.addEventListener('click', function() {
    var cityStateEl = cityState.value.split(', ');






    console.log(cityStateEl);
    console.log(cityState.value);
    console.log(cityStateEl[0]);
    console.log(cityStateEl[1]);
});