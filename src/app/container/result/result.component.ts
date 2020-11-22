import { Component, Input, OnInit } from '@angular/core';
import { Search } from '../../types/api-response.type';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input() searchResults: Search[];

  constructor() {}

  ngOnInit() {}
}
