$(document).ready(function(){
    $('#popPw').popover();
    $('[data-toggle=popover]').on('shown.bs.popover', function () {})
});


function img_create(){
    var bub = document.getElementById('bubble'),
    imagePath = 'img/contentTextBubble.png',
    img;

    for (var i = 0; i < 10; i++) {
    img = new Image();
    img.src = imagePath;
    bub.appendChild(img);
    }
}

function scrollWin(x,y){
  window.scrollBy(x,y);
}
