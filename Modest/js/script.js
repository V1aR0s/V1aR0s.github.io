document.getElementById('menu').addEventListener('click', () => {
    let x = document.getElementById('myTopnav');

    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
})