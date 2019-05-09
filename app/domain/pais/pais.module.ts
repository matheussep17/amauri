import { CoreModule } from './../core/core.module';
import { FieldComponent } from './../core/field/field.component';
import { PaisService } from './pais.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { PaisListComponent } from './pais-list/pais-list.component';
import { PaisFormComponent } from './pais-form/pais-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaisListComponent, PaisFormComponent],
  imports: [
    CommonModule,
    PaisRoutingModule,
    ReactiveFormsModule,
    CoreModule
  
  ],
  providers: [PaisService] 
})
export class PaisModule { }
