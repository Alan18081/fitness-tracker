import { Component, EventEmitter, Output } from '@angular/core';
import { nav } from '../nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sidenavToggled = new EventEmitter();
  navLinks = nav;
  toggleMenu() {
    this.sidenavToggled.emit();
  }

}
