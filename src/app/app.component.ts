import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 myState = 'AZ';
  states = [{code: 'AL', name: 'Alabama'},
              {code:'IND',name:'India'},
              {code:'HYD',name:'Hyderabad'},
              {code:'Tel',name:'Tenali'}
              ];
    onSubmit = function(user){
    console.log(user);
    }

}
