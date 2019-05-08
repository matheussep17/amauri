import { MantenedoraListComponent } from './mantenedora-list/mantenedora-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenedoraRoutingModule } from './mantenedora-routing.module';

@NgModule({
  declarations: [MantenedoraListComponent],
  imports: [
    CommonModule,
    MantenedoraRoutingModule
    
  ]
})
export class MantenedoraModule { }
