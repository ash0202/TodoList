import { Component, Input, OnInit } from '@angular/core';
import { Lists } from 'src/file';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() myData={
    
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
