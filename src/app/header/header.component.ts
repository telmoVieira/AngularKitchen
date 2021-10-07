import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header = "/assets/tenor.gif "

  @Output() featureSelected = new EventEmitter<string>();
  
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
