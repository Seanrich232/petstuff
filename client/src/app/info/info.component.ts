import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  pets: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getPets();
  }
  getPets()
  {
    const obs = this._http.getPets();
    obs.subscribe(data => { 
      this.pets = data
      this.pets.sort((a, b) => {
        if (a.type < b.type) {
          return 1;
        }
        if (a.type > b.type) {
          return -1;
        }
        return 0;
    });
  })
  }
}
