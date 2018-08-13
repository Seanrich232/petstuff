import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  {path: 'pets', component: InfoComponent},
  {path: 'pets/new', component: NewComponent},
  {path: 'pets/:id/edit', component: EditComponent},
  {path: 'pets/:id', component: PetsComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/pets'},
  {path: '', pathMatch: 'full', redirectTo: '/pets'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
