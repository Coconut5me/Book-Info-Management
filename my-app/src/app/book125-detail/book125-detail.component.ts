import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookAPIService } from '../book125-api.service';

@Component({
  selector: 'app-book125-detail',
  templateUrl: './book125-detail.component.html',
  styleUrls: ['./book125-detail.component.css'],
})
export class Book125DetailComponent implements OnInit {
  book: any;
  errMessage: string = '';

  constructor(
    private _service: BookAPIService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Retrieve CDCode from the route parameters
    this.route.paramMap.subscribe((params) => {
      const CDCode = params.get('CDCode');

      // Check if CDCode is not null before making the request
      if (CDCode !== null) {
        this._service.getBook(CDCode).subscribe({
          next: (data) => {
            this.book = data;
          },
          error: (err) => {
            this.errMessage = err;
          }
        });
      } else {
        // Handle the case where CDCode is null (e.g., redirect, display an error)
        this.errMessage = 'CDCode is missing.';
      }
    });
  }
}
