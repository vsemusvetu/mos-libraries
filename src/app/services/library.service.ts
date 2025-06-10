import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LibraryService {
  private API_URL = 'https://apidata.mos.ru/v1/datasets/843/rows';
  private API_KEY = '61e27126-c04d-4e81-bda8-6715f7cf3dee';

  constructor(private http: HttpClient) {}

  getLibraries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}?api_key=${this.API_KEY}`, { observe: 'body' });
  }
}