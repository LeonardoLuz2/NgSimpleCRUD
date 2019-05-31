import { NgModule } from "@angular/core";

import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';
import { ClienteRegisterComponent } from './cliente-register/cliente-register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
      MatButtonModule, 
      MatFormFieldModule, 
      MatOptionModule, 
      MatCheckboxModule, 
      MatTableModule,
      MatSelectModule,
      MatInputModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClienteListComponent,
    ClienteUpdateComponent,
    ClienteRegisterComponent
  ],
  imports: [
    ClienteRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class ClienteModule { }
