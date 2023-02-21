import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navItems = [
    {
      title: 'Home',
      items: [
        'Action1',
        'Action2',
        'Action3'
      ]
    },
    {
      title: 'Shop',
      items: [
        'Action1',
        'Action2',
        'Action3'
      ]
    },
    {
      title: 'Blog',
      items: [
        'Action1',
        'Action2',
        'Action3'
      ]
    },
    {
      title: 'Pages',
      items: [
        'Action1',
        'Action2',
        'Action3'
      ]
    },
    {
      title: 'Contact',
      items: [
        'Contact'
      ]
    }

  ]
}
