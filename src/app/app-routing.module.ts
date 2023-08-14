import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductoComponent } from './components/producto/producto.component';
import { EnvioComponent } from './components/envio/envio.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'envios', component: EnvioComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
