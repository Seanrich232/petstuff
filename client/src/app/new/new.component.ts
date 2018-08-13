import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors: String = "";
  pet = {
    'name': '',
    'type': '',
    'description': '',
    'skills': {
      'skill1': '',
      'skill2': '',
      'skill3': ''
    }
  };
  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
  }
  addPet(){
    const obs = this._http.addPets(this.pet);
    obs.subscribe(data => {
      if('errors' in data)
      {
        console.log("errors");
        this.errors = data['errors']['name']['message'];
      }else{
        console.log("to all??")
        this._router.navigate(['/all'])
      }
      console.log("this is data", data)
    })
  }
}
