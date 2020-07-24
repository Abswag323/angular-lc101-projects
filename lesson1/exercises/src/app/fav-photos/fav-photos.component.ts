import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'A Few of My Favorite Things';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKkGuf0epiqiSK9ekosxZ0uNKhj2FrDDNlWQ&usqp=CAU';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnwr1BUFeA0dtMfjJ4oXR6EvBsDWO5o_3kHQ&usqp=CAU';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4QyjwAyLDLnTKZe1KlBmITOnd3qYbyt7Acw&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}