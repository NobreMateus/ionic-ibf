import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderBooksComponent } from './slider-books.component';
import { BookComponent } from './book/book.component'

@NgModule({
    imports: [ CommonModule ],
    declarations: [SliderBooksComponent, BookComponent],
    exports:[SliderBooksComponent]
  })
  export class SliderBooksModule {}
  