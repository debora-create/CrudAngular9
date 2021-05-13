import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-servico-crud',
  templateUrl: './servico-crud.component.html',
  styleUrls: ['./servico-crud.component.css']
})
export class ServicoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Serviços',
      icon: 'storefront',
      routeUrl: '/servicos'
    }
  }

  ngOnInit(): void {
  }

  navigateToServicoCreate(): void {
    this.router.navigate(['/servicos/create'])
  }

}
