import { Component } from '@angular/core';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-library-search',
  templateUrl: './library-search.component.html',
  styleUrls: ['./library-search.component.css'],
})
export class LibrarySearchComponent {
  query = '';
  libraries: any[] = [];
  filtered: any[] = [];
  selected: any = null;

  constructor(private libraryService: LibraryService) {}

search(): void {
  this.libraryService.getLibraries().subscribe((data) => {
    console.log('Полученные библиотеки:', data); // <== ВАЖНО
    this.libraries = data;
    this.filtered = data.filter((item) =>
      item.Cells.FullName?.toLowerCase().includes(this.query.toLowerCase())
    );
  });
}

  selectLibrary(lib: any): void {
    this.selected = lib.Cells;
  }

  highlight(text: string): string {
    if (!this.query) return text;
    const re = new RegExp(`(${this.query})`, 'gi');
    return text.replace(re, `<span class="highlight">$1</span>`);
  }

  clearSelection(): void {
    this.selected = null;
  }
}