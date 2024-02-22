import { Component } from '@angular/core';
import { BookAPIService } from '../book125-api.service';

@Component({
  selector: 'app-book125-delete',
  templateUrl: './book125-delete.component.html',
  styleUrls: ['./book125-delete.component.css']
})
export class Book125DeleteComponent {
  books125: any
  errMessage: string = ''
  constructor(private _service: BookAPIService) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books125 = data },
      error: (err) => { this.errMessage = err }
    })
  }
  deleteBook(CDCode: string): void {
    // Implement the logic for deleting a book, e.g., show a confirmation dialog
    if (confirm('Are you sure you want to delete this book?')) {
      this._service.deleteBook(CDCode).subscribe({
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
}
