import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirective';
  isAvalable= true;
  changeIsAvailable()
  {
    this.isAvalable = !this.isAvalable;
    console.log("is available : ",this.isAvalable)
  }
}
