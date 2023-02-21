import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/pages/products/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000/products';
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
