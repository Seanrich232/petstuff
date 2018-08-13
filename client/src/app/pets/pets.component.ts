import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

    id: any;
    pet: any;
    errors: String = "";
    liked = false;

  constructor(private _http: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = params['id']);
    this.getPet();
  }
  getPet(){
    const obs = this._http.getPetById(this.id);
    obs.subscribe(data => {
      this.pet = data;
    })
  }
  deletePet()
  {
    const obs = this._http.deletePetById(this.id);
    obs.subscribe(data => {
      if('errors' in data)
      {
        console.log("errors");
        this.errors = data['errors']['name']['message'];
      }else{
        this._router.navigate(['/pets/'])
      }
      console.log("this is data", data)
    })
  }
  likePet()
  {
    this.liked = true;
    this.pet.likes += 1;
    this.updatePet();
  }
  updatePet()
  {
    const obs = this._http.likePet(this.id, this.pet);
    obs.subscribe(data => {
      if('errors' in data)
      {
        console.log("errors");
        this.errors = data['errors']['name']['message'];
      }else{
        this.pet = data;
      }
      console.log("this is data", data)
    })
  }

}
