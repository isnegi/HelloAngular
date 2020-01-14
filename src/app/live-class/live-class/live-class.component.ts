import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-class',
  templateUrl: './live-class.component.html',
  styleUrls: ['./live-class.component.css']
})
export class LiveClassComponent implements OnInit {

  isEditorVisible: boolean;
  constructor() { }

  ngOnInit() {
  }
  
  toggleEditor() {
    this.isEditorVisible = !this.isEditorVisible;
  }

}
