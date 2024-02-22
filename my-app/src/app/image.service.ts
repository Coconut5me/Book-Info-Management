import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  // Trong file image.service.ts

// ...

private latestImagePathSource = new BehaviorSubject<string>(''); 
latestImagePath$ = this.latestImagePathSource.asObservable();

// ...

getLatestImagePath(): string {
  return this.latestImagePathSource.getValue();
}

updateLatestImagePath(imagePath: string) {
  this.latestImagePathSource.next(imagePath);
}

}