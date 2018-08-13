import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getPets() {
    console.log("getPets")
    return this._http.get('/api/pets');
  }
  addPets(newPet) {
    return this._http.post('/api/pets', newPet);
  }
  getPetById(id: any) {
    return this._http.get('/api/pets/' + id);
  }
  updatePetById(id: any, petToEdit) {
    return this._http.patch('/api/pets/' + id, petToEdit);
  }
  deletePetById(id: any) {
    return this._http.delete('/api/pets/' + id);
  }
  likePet(id: any, petLike) {
    return this._http.patch('/api/pets/' + id, petLike);
  }
}