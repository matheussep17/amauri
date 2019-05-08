import { MantenedoraFormComponent } from './mantenedora-form/mantenedora-form.component';
import { MantenedoraListComponent } from './mantenedora-list/mantenedora-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: MantenedoraListComponent},
  {path: 'novo', component: MantenedoraFormComponent},
  {path: 'editar/:id', component: MantenedoraFormComponent},
  {path: 'visualizar/:id', component: MantenedoraFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenedoraRoutingModule { }
