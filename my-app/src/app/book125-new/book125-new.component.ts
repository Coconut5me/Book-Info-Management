import { Component } from '@angular/core';
import { BookAPIService } from '../book125-api.service';
import { Book } from '../interfaces/Book125';
import { Subscription, finalize } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ImageService } from '../image.service'; //


@Component({
  selector: 'app-book125-new',
  templateUrl: './book125-new.component.html',
  styleUrls: ['./book125-new.component.css']
})
export class Book125NewComponent {
  book = new Book();
  books125: any
  errMessage: string = ''
  requiredFileType: any;
  fileName = '';
  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription();
  http: any;
  constructor(private _service: BookAPIService, ) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books125 = data },
      error: (err) => { this.errMessage = err }
    })
  }
  postBook() {
    this._service.postBook(this.book).subscribe({
      next: (data) => { this.books125 = data },
      error: (err) => { this.errMessage = err }
    })
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
  getCurrentDate(): void {
    const currentDate = new Date();
    // Format ngày theo mong muốn, ví dụ: 'yyyy-MM-dd'
    const formattedDate = currentDate.toISOString().split('T')[0];
    this.book.UpdateAt = formattedDate;
  }
  ngOnInit(): void {
    this.getCurrentDate();
  }
  
}

