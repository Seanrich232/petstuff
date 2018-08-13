import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  pet: any;
  errors: String = "";

  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = params['id']);
    this.getPet();
  }
  getPet()
  {
    const obs = this._http.getPetById(this.id);
    obs.subscribe(data => {
      this.pet = data;
    })
  }
  editPet()
  {
    const obs = this._http.updatePetById(this.id, this.pet);
    obs.subscribe(data => {
      if('errors' in data)
      {
        console.log("errors");
        this.errors = data['errors']['name']['message'];
      }else{
        this._router.navigate(['/pets/' + this.id])
      }
      console.log("this is data", data)
    })
  }

}
