import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techno-details',
  templateUrl: './techno-details.component.html',
  styleUrls: ['./techno-details.component.css']
})
export class TechnoDetailsComponent implements OnInit {
  @Input() tech;
  constructor() { }

  ngOnInit(): void {
  }

}
