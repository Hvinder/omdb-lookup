import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [DataService]
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
