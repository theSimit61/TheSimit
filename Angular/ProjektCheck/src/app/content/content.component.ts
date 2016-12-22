import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

 scrollWin(x,y){
    window.scrollBy(x,y);
  }

  img_create(){
    var bub = document.getElementById('bubble'),
    imagePath = '../img/contentTextBubble.png',
    img;

    for (var i = 0; i < 10; i++) {
    img = new Image();
    img.src = imagePath;
    bub.appendChild(img);
    }
  }
  ngOnInit() {
this.img_create();
  }

}
