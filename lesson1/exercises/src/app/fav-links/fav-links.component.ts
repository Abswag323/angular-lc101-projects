import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks =  ['https://smile.amazon.com/', 'https://www.pinterest.com/'];
  constructor() { }

  ngOnInit() {
  }

}
