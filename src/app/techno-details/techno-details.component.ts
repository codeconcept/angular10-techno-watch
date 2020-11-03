import { Component, Input, OnInit } from '@angular/core';
import { Technology } from '../models/Technology';

@Component({
  selector: 'app-techno-details',
  templateUrl: './techno-details.component.html',
  styleUrls: ['./techno-details.component.css']
})
export class TechnoDetailsComponent implements OnInit {
  @Input() tech: Technology;
  constructor() { }

  ngOnInit(): void {
  }

}
