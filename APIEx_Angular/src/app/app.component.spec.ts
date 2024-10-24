import { Component } from '@angular/core';
import { PhotoService } from './photo.service/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredPhotos: any[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(data => {
      this.filteredPhotos = data;
    });
  }

  onAuthorSelected(author: string): void {
    this.photoService.getPhotos().subscribe(data => {
      this.filteredPhotos = author ? data.filter(photo => photo.author === author) : data;
    });
  }
}
