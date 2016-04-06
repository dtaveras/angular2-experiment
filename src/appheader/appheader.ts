import {Component, Input} from 'angular2/core';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'app-header',
  template:
  `<div class="appbar">
    <div class="appbar-entry appbar-menu" (click)="menuClick()">
      <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
    </div>
    <div class="appbar-entry appbar-title">
      <div>{{appTitle}}</div>
    </div>
    <div class="appbar-entry appbar-about" (click)="aboutClick()">
      <span class="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
    </div>
  </div>`,
   styleUrls: ['src/appheader/appheader.css'],
   inputs: ['username']
})

export class AppHeader {
  appTitle: string = 'Paterson Sales';
  _userName: string;

  get username(){
    console.log("Using this Get");
    return this._userName;
  }

  set username(username: string){
    console.log("Using this Set" + username);
    this._userName = username;
  }

  constructor(){
    console.log("Appheader constructor");
  }

  menuClick(){
    console.log("menuClick");
  }
  aboutClick(){
    console.log("aboutClick");
  }
}
