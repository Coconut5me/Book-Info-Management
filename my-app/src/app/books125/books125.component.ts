import { Component } from '@angular/core';
import { BookAPIService } from '../book125-api.service';
import { Book } from '../interfaces/Book125';
import { HttpEventType } from '@angular/common/http';
import { Subscription, finalize } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books125',
  templateUrl: './books125.component.html',
  styleUrls: ['./books125.component.css']
})
export class Books125Component {
  book = new Book();
  books125: any;
  errMessage: string = ''
  selectedBook: any = null; // Track the selected book for editing
  requiredFileType: any;
  fileName = '';
  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription();
  http: any;
  selectedBookDetails: any = null; // Property to store details of the selected book

  constructor(private _service: BookAPIService, private router: Router, private route: ActivatedRoute) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books125 = data },
      error: (err) => { this.errMessage = err }
    })
  }
  
  editBook(book: any): void {
    // Make a copy of the book to avoid changing the original while editing
    this.selectedBook = { ...book };
  }

  updateSelectedBook(): void {
    if (this.selectedBook) {
      this._service.putBook(this.selectedBook).subscribe({
        next: (updatedBook) => {
          const index = this.books125.findIndex((b: any) => b.CDCode === updatedBook.CDCode);
          if (index !== -1) {
            this.books125[index] = updatedBook;
          }
  
          this.selectedBook = null; // Clear the selected book after updating
        },
        error: (err) => {
          console.error('Error updating book:', err);
        }
      });
    }
  }

  cancelUpdate(): void {
    this.selectedBook = null;
  }

  putBook() {
    this._service.putBook(this.book).subscribe({
      next: (data) => { this.books125 = data },
      error: (err) => { this.errMessage = err }
    })
  }
  

  deleteBook(bookId: any): void {
    // Implement the logic for deleting a book, e.g., show a confirmation dialog
    if (confirm('Are you sure you want to delete this book?')) {
      this._service.deleteBook(bookId).subscribe({
        next: () => {
          // Refresh the book list after successful deletion
          this._service.getBooks().subscribe({
            next: (data) => { this.books125 = data },
            error: (err) => { this.errMessage = err }
          });
        },
        error: (err) => {
          console.error('Error deleting book:', err);
        }
      });
    }
  }

showBookDetails(book: any): void {
  this.selectedBookDetails = book;
}
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    this.fileName = file.name;
    const formData = new FormData();
    formData.append("image", file);
    const upload$ = this.http.post("/upload", formData, {
      reportProgress: true,
      observe: 'events'
    })
      .pipe(
        finalize(() => this.reset())
      );
    this.uploadSub = upload$.subscribe((event: { type: HttpEventType; loaded: number; total: any; }) => {
      if (event.type == HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(100 * (event.loaded /
          event.total!));
      }
    })
  }
}
cancelUpload() {
  this.uploadSub.unsubscribe();
  this.reset();
}
reset() {
  this.uploadProgress = 0;
  this.uploadSub = new Subscription();
}
}
