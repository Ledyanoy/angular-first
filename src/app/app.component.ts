import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'first';
  number = 4345354;
  reactLogo = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';
  inputValue = '';
  secondTitle = 'Initial';
  backGroundToggle = true;
  paragraphCase = 2;
  newArray: Array<string> = [
    'vot first elem',
    'vot second elem',
    'vot third elem',
    'vot fourth elem',
    'vot fifth elem',
  ];
  arrayWithObjects = [
    {
      name: 'Alexander',
      post: 'Whats up bitches!',
      comments: [
        {name: 'Mike', comment: 'Bruh))'},
        {name: 'Rust88', comment: 'He'},
        {name: 'Kate', comment: 'Hi'},
      ]
    },
    {
      name: 'Tobias',
      post: 'Hi im here now',
      comments: [
        {name: 'Mike', comment: 'Great'},
        {name: 'Rust88', comment: 'Wow'},
        {name: 'Kate', comment: 'Hi'},
      ]
    }
  ];


  constructor() {
    setTimeout(() => {
      console.log('change image', this.reactLogo);
      this.reactLogo = 'https://angular.io/assets/images/logos/angular/angular.svg';
    }, 5000);
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement> event.target).value;
  }

  onBlur(str: string) {
    this.inputValue = str;
  }

  onClick() {
    console.log('clicked');
  }
}
