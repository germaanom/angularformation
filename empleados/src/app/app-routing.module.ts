import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-empleados', pathMatch: 'full'},
  { path: 'lista-empleados', component: ListaEmpleadosComponent},
  { path: 'create-empleado', component: CreateEmpleadoComponent},
  { path: 'editEmpleado/:id', component: CreateEmpleadoComponent}, 
  { path: '**', redirectTo: 'lista-empleados', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
