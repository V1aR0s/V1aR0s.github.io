let windowInnerWidth = window.innerWidth

check()

let indexBlock = 1
showBlock(indexBlock)


function check(){
    if(windowInnerWidth <= 600){
        document.getElementById('menu').classList.add('none')
        document.getElementById('menubut').classList.remove('none')
    }
    else{
        document.getElementById('menu').classList.remove('none')
        document.getElementById('menubut').classList.add('none')
    }
}

window.addEventListener("resize", function() {
    windowInnerWidth = window.innerWidth
    check()
});

function myFunction(x) {

    x.classList.toggle("change");
    
    let menu = document.getElementById('menu')
    if(menu.classList.contains('none')){
        menu.classList.remove('none')
        document.getElementById('navbar').classList.add('navback')
    }
    else{
        menu.classList.add('none')
        document.getElementById('navbar').classList.remove('navback')
    }
}

//слайдер
function nextBlock(){
    showBlock(indexBlock += 1)
}
function prevBlock(){
    showBlock(indexBlock -= 1)
}

function currentBlock(n){
    showBlock(n)
}

function showBlock(n){
    let i;
    var blocks = document.getElementsByClassName('slide')
    var list = document.getElementsByClassName("slideNum");

    if(n > blocks.length){
        indexBlock = 1
        n = 1
    }
    if(n < 1){
        indexBlock = blocks.length
        n = blocks.length
    }
    for(i = 0; i < blocks.length; i++){
        blocks[i].classList.add('display_none')
    }
    for(i = 0; i < blocks.length; i++){
        list[i].classList.remove('active')
    }
    blocks[n - 1].classList.remove('display_none')
    list[n - 1].classList.add('active')
}

