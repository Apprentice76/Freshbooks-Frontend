import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { IssuedBooksComponent } from './components/issued-books/issued-books.component';
import { ReturnedBooksComponent } from './components/returned-books/returned-books.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'issue-history',
    component: IssuedBooksComponent,
  },
  {
    path: 'return-history',
    component: ReturnedBooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
