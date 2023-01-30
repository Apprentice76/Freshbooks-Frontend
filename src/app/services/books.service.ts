import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  BACKEND_URI = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http
      .get<{ [key: string]: Book }>(`${this.BACKEND_URI}/books`)
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

  updateBook(book: Book) {
    return this.http.put(`${this.BACKEND_URI}/update`, book);
  }

  addBook(book: Book) {
    return this.http.post(`${this.BACKEND_URI}/add-book`, book);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.BACKEND_URI}/remove-book/${id}`);
  }
}
