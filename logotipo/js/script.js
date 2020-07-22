let x = document.getElementById('img1');
let y = document.getElementById('img2');
let z = document.getElementById('img3');

document.getElementById('but1').addEventListener('click', fun = () => {
    name(x, y, z);
})

document.getElementById('but2').addEventListener('click', fun = () => {
    name(y, x, z);
})
document.getElementById('but3').addEventListener('click', fun = () => {
    name(z, x, y);
})

const name = (x, y, z) => {
    x.className += " hide";
    y.className += " hide";
    z.className += " hide";

    if (x.className === "") {
        x.className += " hide";
    }
    else {
        x.className = "";
    }
}