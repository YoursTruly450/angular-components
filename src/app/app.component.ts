import { Component, DoCheck, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id: symbol;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  posts: Post[] = [
    {
      title: 'Learn angular components',
      text: 'Learning components',
      id: Symbol(1)
    },
    {
      title: 'Next block',
      text: 'Will be about direrctives and pipes',
      id: Symbol(2)
    }
  ]

  maxId: number;

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: symbol) {
    this.posts = this.posts.filter(post => post.id !== id);
  }

  ngOnInit(): void {}

  ngDoCheck(): void {}
}
