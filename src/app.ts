import {Component, ElementRef} from 'angular2/core'
import {bootstrap} from 'angular2/platform/browser'

import {AppHeader} from './appheader/appheader'
import {SideBar} from './sidebar/sidebar'
import {Section} from './section/section'

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'app',
  // Location of the template for this component
  template:
  `<div id="main-content">
    <app-header username="Delvis"></app-header>
    <section sectitle="Technology"></section>
    <!--<input id="myinp" style="border-style:solid; border-color: red;" type="text" [value]="yourName">-->
   </div>`,
  directives: [AppHeader, SideBar, Section]
})

export class App {
  constructor(el: ElementRef){
    console.log(el.nativeElement);
    console.log("Constructing Hello WOrld Object");
  }
  changeTitle(){
    console.log("Changing the app title");
  }
  // Declaring the variable for binding with initial value
  yourName: string = 'hi';
}

bootstrap(App);
