import { FieldComponent } from './../core/field/field.component';
import { MantenedoraListComponent } from './mantenedora-list/mantenedora-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenedoraRoutingModule } from './mantenedora-routing.module';
import { MantenedoraFormComponent } from './mantenedora-form/mantenedora-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [MantenedoraListComponent, MantenedoraFormComponent],
  imports: [
    CommonModule,
    MantenedoraRoutingModule,
    ReactiveFormsModule,
    CoreModule
    
  ]
})
export class MantenedoraModule { }
