import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-library-details',
  templateUrl: './library-details.component.html',
  styleUrls: ['./library-details.component.css']
})
export class LibraryDetailsComponent {
  @Input() library: any;
  @Output() close = new EventEmitter<void>();
}