import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'first';
  number = 4345354;
  reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'

  constructor() {
    setTimeout(()=> {
      console.log('change image', this.reactLogo)
      this.reactLogo = 'https://angular.io/assets/images/logos/angular/angular.svg'
    }, 5000)
  }
}
