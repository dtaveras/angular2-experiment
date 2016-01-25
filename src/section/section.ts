import {Component} from 'angular2/core';
import {ItemIntf} from './itemintf'

@Component({
  selector: 'section',
  inputs: ['sectitle'],
  template:
  `<div class="app-section">
    <div *ngFor="#item of itemList">{{item | json}}</div>
    <div class="row">
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
      <div class="col-md-1">.col-md-1</div>
    </div>
  </div>
  `,
  styles: [
    `.row col-md-1{
      border-style: solid!important;
    }
    `
  ]
  //templateUrl: 'src/sidebar/sidebar.html'
})

export class Section {
  _secTitle: string;
  itemList: ItemIntf = [];
  constructor(){
    var itemObj0 = {title: "Hello World0", description: "imglink0", footnote: "foot note me0"};
    var itemObj1 = {title: "Hello World1", description: "imglink1", footnote: "foot note me1"};
    this.itemList.push(itemObj0);
    this.itemList.push(itemObj1);
  }
  get sectitle(){
    return this._secTitle;
  }
  set sectitle(title: string){
    this._secTitle = title;
  }
}
