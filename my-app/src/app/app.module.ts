import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Books125Component } from './books125/books125.component';
import { Book125DetailComponent } from './book125-detail/book125-detail.component';
import { Book125NewComponent } from './book125-new/book125-new.component';
import { Book125UpdateComponent } from './book125-update/book125-update.component';
import { Book125DeleteComponent } from './book125-delete/book125-delete.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    Books125Component,
    Book125DetailComponent,
    Book125NewComponent,
    Book125UpdateComponent,
    Book125DeleteComponent,
    RoutingComponents,
    FileUploadComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
