import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() imageSrc: string = '';
  @Input() route: string = '';
  @Input() title: string = '';
}
