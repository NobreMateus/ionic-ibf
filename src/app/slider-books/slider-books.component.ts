import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-books',
  templateUrl: './slider-books.component.html',
  styleUrls: ['./slider-books.component.scss']
})
export class SliderBooksComponent implements OnInit {

  @Input() titleSection: string;
  @Input() books :any[];
  
  constructor() { 
    this.books = ['livro1', 'livro2', 'livro3']
  }

  ngOnInit() {
  }

}
