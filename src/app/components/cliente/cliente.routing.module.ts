import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteRegisterComponent } from './cliente-register/cliente-register.component';
import { ClienteUpdateComponent } from './cliente-update/cliente-update.component';

const routes: Routes = [
  { path: 'cliente-list', component: ClienteListComponent },
  { path: 'cliente-register', component: ClienteRegisterComponent },
  { path: 'cliente-update/:id', component: ClienteUpdateComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
