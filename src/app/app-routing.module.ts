import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { Page404Component } from './components/page404/page404.component';
import { OffersComponent } from './components/offers/offers.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "**", component: Page404Component },
  { path: "offers", component: OffersComponent },
  { path: "book:/id", component: DetailsBookComponent },
  { path: "admin/list-books", component: ListBooksComponent },
  { path: "user/login", component: LoginComponent },
  { path: "user/register", component: RegisterComponent },
  { path: "user/profile", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
