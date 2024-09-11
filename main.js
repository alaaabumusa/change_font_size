

function increaseFontSize(){
    var divElement = document.getElementById('text'); 
    divElement.style.fontSize = '40px';
}

function decreaseFontSize(){
    var divElement = document.getElementById('text'); 
    divElement.style.fontSize = '10px';
}


document.querySelector('.increaseFontSize').onclick=increaseFontSize;
document.querySelector('.decreaseFontSize').onclick=decreaseFontSize;

