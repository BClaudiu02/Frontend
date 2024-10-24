import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service/photo.service';

@Component({
  selector: 'app-author-filter',
  templateUrl: './author-filter.component.html',
  styleUrls: ['./author-filter.component.css']
})
export class AuthorFilterComponent implements OnInit {
  @Output() authorSelected = new EventEmitter<string>();
  authors: string[] = []; 

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(data => {
      console.log(data); 
      this.authors = [...new Set(data.map(photo => photo.author))];
    });
  }

  onAuthorChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; 
    this.authorSelected.emit(selectElement.value); 
  }
}
