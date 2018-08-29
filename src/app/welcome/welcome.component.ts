import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  items = [
    {
      title: 'Activity',
      description: 'Stay active and enjoy better health and more fun!'
    },
    {
      title: 'Community',
      description: 'Get to know other people who share your passion!'
    },
    {
      title: 'Challenges',
      description: 'Never stop! Dive into new challenges every day'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
