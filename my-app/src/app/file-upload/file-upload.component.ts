import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Input() requiredFileType: any;
  fileName = '';
  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription();
  uploadedImageUrl: string = '';
  latestUploadedImageUrl: string = ''; // New property to track the latest uploaded image

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.updateLatestUploadedImage(); // Initial update
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const uniqueFileName = this.generateUniqueFileName(file.name);
      this.fileName = uniqueFileName;

      const formData = new FormData();
      formData.append("image", file, uniqueFileName);

      const upload$ = this.http.post("/upload", formData, {
        reportProgress: true,
        observe: 'events'
      })
      .pipe(
        finalize(() => this.reset())
      );

      this.uploadSub = upload$.subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total!));
        }

        // If the upload is complete, update the image URL and the latest uploaded image
        if (event.type == HttpEventType.Response) {
          const body = event.body as { filename: string };
          this.uploadedImageUrl = `/uploads/${body.filename}`;
          this.updateLatestUploadedImage();
        }
      });
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

  private generateUniqueFileName(originalFileName: string): string {
    const timestamp = new Date().getTime();
    return `${timestamp}_${originalFileName}`;
  }

  private updateLatestUploadedImage() {
    this.http.get<string>('/getLatestUploadedImage').subscribe((filename: string) => {
      this.latestUploadedImageUrl = `/uploads/${filename}`;
    });
  }
}
