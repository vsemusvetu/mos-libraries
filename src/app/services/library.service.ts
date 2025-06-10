import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LibraryService {
  private API_URL = 'url';
  private API_KEY = 'key';

  constructor(private http: HttpClient) {}

  getLibraries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}?api_key=${this.API_KEY}`, { observe: 'body' });
  }
}
