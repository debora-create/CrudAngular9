import { Servico } from './../servico.model';
import { ServicoService } from './../servico.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico-create',
  templateUrl: './servico-create.component.html',
  styleUrls: ['./servico-create.component.css']
})
export class ServicoCreateComponent implements OnInit {

  servico: Servico = {
    name: '',
    price: null
  }

  constructor(private servicoService: ServicoService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createServico(): void {
    this. servicoService .create(this.servico).subscribe(() => {
      this. servicoService .showMessage('Servico criado!')
      this.router.navigate(['/servicos'])
    })

  }

  cancel(): void {
    this.router.navigate(['/servicos'])
  }
}
