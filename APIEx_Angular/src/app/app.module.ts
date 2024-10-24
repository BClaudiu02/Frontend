import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './photo-gallery/photo.gallery.component';
import { AuthorFilterComponent } from './author-filter/author-filter.component';
import { PhotoService } from './photo.service/photo.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    PhotoGalleryComponent,
    AuthorFilterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
