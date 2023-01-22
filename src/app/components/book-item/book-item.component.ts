import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input() author: string = '';
  @Input() issueStatus: string = '';
  @Input() description: string = '';

  shortenDescription(): string {
    let maxLength = 100;
    return this.description.length > maxLength
      ? this.description.slice(0, maxLength - 1) + '...'
      : this.description;
  }
}
