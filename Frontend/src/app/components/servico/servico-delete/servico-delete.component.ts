import { Router, ActivatedRoute } from "@angular/router";
import { ServicoService } from "./../servico.service";
import { Servico } from "./../servico.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servico-delete",
  templateUrl: "./servico-delete.component.html",
  styleUrls: ["./servico-delete.component.css"],
})
export class ServicoDeleteComponent implements OnInit {
  servico:Servico;

  constructor(
    private  servicoService: ServicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.servicoService.readById(id).subscribe((servico) => {
      this.servico = servico;
    });
  }

  deleteServico(): void {
    this.servicoService.delete(this.servico.id).subscribe(() => {
      this.servicoService.showMessage("Serviços excluído com sucesso!");
      this.router.navigate(["/servicos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/servicos"]);
  }
}
