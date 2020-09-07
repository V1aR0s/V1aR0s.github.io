



function but_fun() {
    fetch(`http://www.omdbapi.com/?s=${document.querySelector('.text').value}&apikey=3da90a89`)
    .then(function (resp) {return resp.json()})
    .then(function(data){
        console.log(data);
        if (data.Response != "False") {
            main_fun(data);
        }
        else{
            alert('Not found')
        }
    })
    .catch(function () {
        
    })
    

}

function main_fun(data) {
    let block_for_add = document.querySelector('.all_films');
    block_for_add.innerHTML = '';
    for (let i = 0; i < data.Search.length; i++) {
        if(data.Search[i].Poster != 'N/A'){
        block_for_add.innerHTML += `<div class = "film_poster" onclick = "fin_('${data.Search[i].Title}')" data-toggle="modal" data-target="#exampleModal">
            <img src="${data.Search[i].Poster}" alt="">
            <h3 class = "name">${data.Search[i].Title}</h3>
            <span>year:${data.Search[i].Year}</span>
        </div>`
        }
    }
}

function fin_(value) {
    fetch(`http://www.omdbapi.com/?t=${value}&apikey=3da90a89`)
    .then(function (resp) {return resp.json()})
    .then(function(data){
        console.log(data);
        modal_wind(data);
    })
    .catch(function () {
        
    })
}

function modal_wind(data_) {
    document.querySelector('.modal-title').innerHTML =`${data_.Title}`;
    document.querySelector('.modal-body').innerHTML = `
    <img src="${data_.Poster}" alt="">
    <div class = "text_modal_">
    <p>Year:${data_.Year}</p>
    <span class = "meat_score">Raiting:${data_.imdbRating}</span></span>

    <p>Actors:${data_.Actors}</p>
    <span>Released:${data_.Released}</span>
    
    <p>Type:${data_.Type}</p>
    <span>Budget:${data_.BoxOffice}</span>

    <p>Country:${data_.Country}</p>
    <span>Runtime:${data_.Runtime}</span>

    </div>
    `;
}