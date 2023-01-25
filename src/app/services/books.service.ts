import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http
      .get<{ [key: string]: Book}>('http://localhost:4000/books')
      .pipe(
        map((res) => {
          const books = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              books.push({ ...res[key] });
            }
          }
          return books;
        })
      );
  }

  updateBook(book: Book): Observable<void> {
    console.log('update called')
    
    return this.http.put<void>(
      'http://localhost:4000/update', book
    );
  }

  addBook(book: Book) {

  }

  deleteBook(book: Book) {

  }


}
