import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {nav} from '../nav';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.css']
})
export class SidenavMenuComponent implements OnInit {
  @Output() linkClicked = new EventEmitter();
  navLinks = nav;
  constructor() { }

  ngOnInit() {
  }

  clickLink() {
    this.linkClicked.emit();
  }
}
