import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({ // La clase proporcionará un servicio inyectable y también puede tener sus propias dependencias inyectadas
  providedIn: 'root' // dependency injection system
})
export class ProductService {

  private productsURL = '/api/pokemon.json';


  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsURL).pipe(
      catchError(err => {
        console.log('caught rethrown error, providing fallback value');
        return [];
      })
    );
  }

  getProductById(id: number): Observable<Product[]> {
    return this.http.get<Product []>(this.productsURL).pipe(
      catchError(err => {
        console.log('caught rethrown error, providing fallback value');
        return [];
      })
    );
  }
}
