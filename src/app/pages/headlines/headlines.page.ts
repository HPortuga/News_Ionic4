import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  categories = ['Brasil', 'Business', 'Entertainment', 'Health',
                'Science', 'Sports', 'Technology'];

  constructor() { }

  ngOnInit() {
  }

}
