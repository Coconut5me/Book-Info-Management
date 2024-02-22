import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Book125NewComponent } from './book125-new/book125-new.component';
import { Book125DetailComponent } from './book125-detail/book125-detail.component';
import { Books125Component } from './books125/books125.component';
import { Book125UpdateComponent } from './book125-update/book125-update.component';


const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "new", component: Book125NewComponent },
  { path: "detail", component: Book125DetailComponent },
  { path: "edit", component: Book125UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  Book125NewComponent,
  Book125DetailComponent]
