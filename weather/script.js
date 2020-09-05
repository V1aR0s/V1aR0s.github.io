let now = new Date();
let d = now.getDay();



//Погода(массивы с названием погоды)
let Thunderstorm = [
    {
        'name':'thunderstorm with light rain',
        'img':'<img src="icons_weather/icon_30.png" alt="">'
    },
    {
        'name':'thunderstorm with rain',
        'img':'<img src="icons_weather/icon_30.png" alt="">' 
    },
    {
        'name':'thunderstorm with heavy rain',
        'img':'<img src="icons_weather/icon_30.png" alt="">' 
    },
    {
        'name':'light thunderstorm',
        'img':'<img src="icons_weather/icon_13.png" alt="">'
    },
    {
        'name':'thunderstorm',
        'img':'<img src="icons_weather/icon_12.png" alt="">'
    },
    {
        'name':'heavy thunderstorm',
        'img':'<img src="icons_weather/icon_26.png" alt="">'
    },
    {
        'name':'ragged thunderstorm',
        'img':'<img src="icons_weather/icon_26.png" alt="">'
    },
    {
        'name':'thunderstorm with light drizzle',
        'img':'<img src="icons_weather/icon_30.png" alt="">'
    },
    {
        'name':'thunderstorm with drizzle',
        'img':'<img src="icons_weather/icon_30.png" alt="">'
    },
    {
        'name':'thunderstorm with heavy drizzle',
        'img':'<img src="icons_weather/icon_30.png" alt="">'
    }

]; 
let Drizzle = [
    {
        'name': 'light intensity drizzle',
        'img': '<img src="icons_weather/icon_28.png" alt="">'
    },
    {
        'name': 'drizzle',
        'img': '<img src="icons_weather/icon_28.png" alt="">'
    },
    {
        'name': 'heavy intensity drizzle',
        'img': '<img src="icons_weather/icon_28.png" alt="">'
    },
    {
        'name': 'light intensity drizzle rain',
        'img': '<img src="icons_weather/icon_28.png" alt="">'
    },
    {
        'name': 'drizzle rain',
        'img': '<img src="icons_weather/icon_28.png" alt="">'
    },
    {
        'name': 'heavy intensity drizzle rain',
        'img': '<img src="icons_weather/icon_28.png" alt="">'
    },
    {
        'name': 'shower rain and drizzle',
        'img': '<img src="icons_weather/icon_28.png" alt="">'
    },
    {
        'name': 'heavy shower rain and drizzle',
        'img': '<img src="icons_weather/icon_28.png" alt="">'
    },
    {
        'name': 'shower drizzle',
        'img': '<img src="icons_weather/icon_28.png" alt="">'
    }
]
let Rain = [
    {
        'name' : 'light rain',
        'img' : '<img src="icons_weather/icon_9.png" alt="">'
    },
    {
        'name' : 'moderate rain',
        'img' : '<img src="icons_weather/icon_14.png" alt="">'
    },
    {
        'name' : 'heavy intensity rain',
        'img' : '<img src="icons_weather/icon_16.png" alt="">'
    },
    {
        'name' : 'very heavy rain',
        'img' : '<img src="icons_weather/icon_16.png" alt="">'
    },
    {
        'name' : 'extreme rain',
        'img' : '<img src="icons_weather/icon_16.png" alt="">'
    },
    {
        'name' : 'freezing rain',
        'img' : '<img src="icons_weather/icon_37.png" alt="">'
    },
    {
        'name' : 'light intensity shower rain',
        'img' : '<img src="icons_weather/icon_14.png" alt="">'
    },
    {
        'name' : 'shower rain',
        'img' : '<img src="icons_weather/icon_33.png" alt="">'
    },
    {
        'name' : 'heavy intensity shower rain',
        'img' : '<img src="icons_weather/icon_33.png" alt="">'
    },
    {
        'name' : 'ragged shower rain',
        'img' : '<img src="icons_weather/icon_33.png" alt="">'
    },

]
let Snow = [
    {
        'name': 'light snow',
        'img':'<img src="icons_weather/icon_37.png" alt="">'
    },
    {
        'name': 'Snow',
        'img':'<img src="icons_weather/icon_37.png" alt="">'
    },
    {
        'name': 'Heavy snow',
        'img':'<img src="icons_weather/icon_37.png" alt="">'
    },
    {
        'name': 'Sleet',
        'img':'<img src="icons_weather/icon_37.png" alt="">'
    },
    {
        'name': 'Light shower sleet',
        'img':'<img src="icons_weather/icon_37.png" alt="">'
    },
    {
        'name': 'Shower sleet',
        'img':'<img src="icons_weather/icon_37.png" alt="">'
    },
    {
        'name': 'Light rain and snow',
        'img':'<img src="icons_weather/icon_27.png" alt="">'
    },
    {
        'name': 'Rain and snow',
        'img':'<img src="icons_weather/icon_27.png" alt="">'
    },
    {
        'name': 'Light shower snow',
        'img':'<img src="icons_weather/icon_37.png" alt="">'
    },
    {
        'name': 'Shower snow',
        'img':'<img src="icons_weather/icon_37.png" alt="">'
    },
    {
        'name': 'Heavy shower snow',
        'img':'<img src="icons_weather/icon_37.png" alt="">'
    },


]
let Clear=[
    {
       'name': 'clear sky',
       'img':'<img src="icons_weather/icon_11.png" alt="">'
    }
]
let Clouds =[
    {
        'name':'few clouds',
        'img':'<img src="icons_weather/icon_24.png" alt="">'
    },
    {
        'name':'scattered clouds',
        'img':'<img src="icons_weather/icon_23.png" alt="">'
    },
    {
        'name':'broken clouds',
        'img':'<img src="icons_weather/icon_5.png" alt="">'
    },
    {
        'name':'overcast clouds',
        'img':'<img src="icons_weather/icon_3.png" alt="">'
    }
]

// 
function func_() {
    // получаем данные о городе
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('.city_input').value}&appid=9b0d5e9aa48174fa4516e6574bac9ea4`)
    .then(function (resp) {return resp.json()})
    .then(function(data){
        //&#176; градус

        Fun__(data);
    })
    .catch(function () {
        
    })
}

function Fun__(data) {
    if(data.cod == "404"){
        alert('The city not found');
        return;
    }

    console.log(data);
    // температура мин-макс
    let min_temp = document.querySelector('.min');
    let max_temp = document.querySelector('.max');

    min_temp.innerHTML = `<p style = "font-size: 28px;" >⇓${Math.round(data.main.temp_min - 273)}&#176;</p>`;
    max_temp.innerHTML = `<p style = "font-size: 28px;" >⇑${Math.round(data.main.temp_max - 273)}&#176;</p>`;

    // имя города
    let name_city = document.querySelector('.name_of_city');
    name_city.innerHTML = `${data.name}`;

    // дата
    let arr_week_days = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];
    let name_day = '';
    for (let index = 0; index < arr_week_days.length; index++) {
        if(d == index){
            name_day = arr_week_days[index];
        }
    }
    document.querySelector('.day_name').innerHTML = ` ${name_day} `
    document.querySelector('.date_full').innerHTML = `${now.getDay()}/${now.getMonth()}/${now.getFullYear()}`

    // скорость ветра и влажность
    document.querySelector('.wind_').innerHTML = `Wind: ${data.wind.speed}km/h`;
    document.querySelector('.water_in_wind').innerHTML = `<img src="icons_weather/icon_36.png" alt="">:${data.main.humidity}%`;

    // Иконки(это будет сложно)
    if (data.weather[0].main == 'Rain') {
        document.querySelector('body').style.background = `url(icons/713d750e34eecdaad099c01138e41a0c.gif)`;
        for (let index = 0; index < Rain.length; index++) {
            // description
            if(data.weather[0].description == Clear[index].name){
                document.querySelector('.main_img_from_weather').innerHTML = `${Clear[index].img} <h3>${data.weather[0].description}</h3>`;
            }
        }
    }
    else if (data.weather[0].main == 'Clear') {
        let hours = now.getHours()
        if(hours > 4 && hours < 20){
            document.querySelector('body').style.background = `url(icons/54738-les_polyana_cvety_rassvet.jpg)`;
        }
        else{
            document.querySelector('body').style.background = `url(icons/Live-Wallpaper-Gfif-Siboneycubancuisine.com.gif)`;
        }
        if(data.weather[0].description == 'clear sky'){
            document.querySelector('.main_img_from_weather').innerHTML = `${Clear[0].img} <h3>${data.weather[0].description}</h3>`;
        }
    }
    else if (data.weather[0].main == 'Thunderstorm') {
        document.querySelector('body').style.background = `url(https://lookw.ru/1/252/1380318572-groza-i-molniya-neri_88.jpg)`;

        for (let index = 0; index < Thunderstorm.length; index++) {
            // description
            if(data.weather[0].description == Thunderstorm[index].name){
                document.querySelector('.main_img_from_weather').innerHTML = `${Thunderstorm[index].img} <h3>${data.weather[0].description}</h3>`;
            }
        }
    }
    else if (data.weather[0].main == 'Drizzle') {
        document.querySelector('body').style.background = `url(icons/713d750e34eecdaad099c01138e41a0c.gif)`;

        for (let index = 0; index < Drizzle.length; index++) {
            // description
            if(data.weather[0].description == Drizzle[index].name){
                document.querySelector('.main_img_from_weather').innerHTML = `${Drizzle[index].img} <h3>${data.weather[0].description}</h3>`;
            }
        }
    }
    else if (data.weather[0].main == 'Snow') {
        document.querySelector('body').style.background = `url(https://wallpaperaccess.com/full/946111.jpg)`;

        for (let index = 0; index < Snow.length; index++) {
            // description
            if(data.weather[0].description == Snow[index].name){
                document.querySelector('.main_img_from_weather').innerHTML = `${Snow[index].img} <h3>${data.weather[0].description}</h3>`;
            }
        }
    }
    else if (data.weather[0].main == 'Clouds') {
        document.querySelector('body').style.background = `url(https://i.pinimg.com/originals/4f/77/d5/4f77d52b3506966b7a94155e45e6ba56.jpg)`;

        for (let index = 0; index < Clouds.length; index++) {
            // description
            if(data.weather[0].description == Clouds[index].name){
                document.querySelector('.main_img_from_weather').innerHTML = `${Clouds[index].img} <h3>${data.weather[0].description}</h3>`;
            }
        }
    }
    else{
        document.querySelector('body').style.background = `url(https://images.wallpaperscraft.com/image/forest_trees_fog_110131_1920x1080.jpg)`;
        document.querySelector('.main_img_from_weather').innerHTML = `<img src="https://image.flaticon.com/icons/svg/2446/2446001.svg " alt=""><h3>${data.weather[0].description}</h3>`;
    }




    // Температура на данный момент
    let main_temp = document.querySelector('.h2_temp');
    main_temp.innerHTML = `${Math.round(data.main.temp - 273)}&#176;`;
}