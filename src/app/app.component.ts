import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Learn angular components',
      text: 'Learning components'
    },
    {
      title: 'Next block',
      text: 'Will be about direrctives and pipes',
      id: 2
    }
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
