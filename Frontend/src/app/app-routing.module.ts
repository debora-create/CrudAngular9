import { ServicoDeleteComponent } from './components/servico/servico-delete/servico-delete.component';
import { ServicoUpdateComponent } from './components/servico/servico-update/servico-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ServicoCrudComponent } from "./views/servico-crud/servico-crud.component";
import {ServicoCreateComponent } from './components/servico/servico-create/servico-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "servicos",
    component: ServicoCrudComponent
  },
  {
    path: "servicos/create",
    component: ServicoCreateComponent
  },
  {
    path: "servicos/update/:id",
    component: ServicoUpdateComponent
  },
  {
    path: "servicos/delete/:id",
    component: ServicoDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
