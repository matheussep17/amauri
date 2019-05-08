import { PaisService } from './pais.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { PaisListComponent } from './pais-list/pais-list.component';
import { PaisFormComponent } from './pais-form/pais-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaisListComponent, PaisFormComponent],
  imports: [
    CommonModule,
    PaisRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PaisService] 
})
export class PaisModule { }
