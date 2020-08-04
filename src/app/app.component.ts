import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    console.log('-->' + JSON.stringify(postData));
    // Send Http request
    this.http.post('https://ng-complete-guide-9702c.firebaseio.com/posts.json', postData).subscribe(
      responseData => {
        console.log(responseData);

      }
    );
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
