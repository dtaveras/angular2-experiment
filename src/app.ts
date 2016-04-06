import {Component, ElementRef, provide} from 'angular2/core'
import {bootstrap} from 'angular2/platform/browser'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router'

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
    <a [routerLink]="['Loadsect']">ClickMe!</a>
    <router-outlet></router-outlet>
    <!--<section sectitle="Technology"></section>-->
    <!--<input id="myinp" style="border-style:solid; border-color: red;" type="text" [value]="yourName">-->
   </div>`,
  directives: [AppHeader, SideBar, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/loadsect',as:'Loadsect', component: Section, useAsDefault: true}
])
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

//Adding hashlocation strategy allows the location to be updated correctly with the hashtag
bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy }), provide(APP_BASE_HREF, {useValue: '/hey'}]);
