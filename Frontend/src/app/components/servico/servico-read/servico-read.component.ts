import { ServicoService } from './../servico.service';
import { Servico } from './../servico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-read',
  templateUrl: './servico-read.component.html',
  styleUrls: ['./servico-read.component.css']
})
export class ServicoReadComponent implements OnInit {

  servicos: Servico[]
  displayedColumns = ['id', 'name', 'price', 'action']
  
  constructor(private servicoService: ServicoService) { }

  ngOnInit(): void {
    this.servicoService.read().subscribe(servico => {
      this.servicos = servico
    })
  }

}
