import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() pageName = new EventEmitter<string>();
  isOpen = false;
  toggleOpen() {
    this.isOpen = true;
  }
  constructor() {}
  displayPage(name: string) {
    this.pageName.emit(name);
  }
  ngOnInit(): void {}
}
