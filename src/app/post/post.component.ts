import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() post: Post;
  @Output() onRemove = new EventEmitter<symbol>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngDoCheck(): void {}

  ngAfterContentInit(): void {}

  ngAfterContentChecked(): void {}

  ngAfterViewInit(): void {}

  ngAfterViewChecked(): void {}

  ngOnDestroy(): void {}

  removePost() {
    this.onRemove.emit(this.post.id);
  }

}
