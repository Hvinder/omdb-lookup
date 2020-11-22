import { Component, Input, OnInit } from '@angular/core';
import { Search } from '../../../types/api-response.type';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {
  @Input() searchResult: Search = null;

  constructor() { }

  ngOnInit() {
  }

}
