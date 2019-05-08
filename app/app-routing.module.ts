import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'pais', loadChildren: './domain/pais/pais.module#PaisModule'},
  {path: 'mantenedora', loadChildren: './domain/mantenedora/mantenedora.module#MantenedoraModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
