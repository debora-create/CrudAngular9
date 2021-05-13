import { Servico } from "./../servico.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ServicoService } from "./../servico.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servico-update",
  templateUrl: "./servico-update.component.html",
  styleUrls: ["./servico-update.component.css"],
})
export class ServicoUpdateComponent implements OnInit {
  servico: Servico;

  constructor(
    private servicoService: ServicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.servicoService.readById(id).subscribe((servico) => {
      this.servico = servico;
    });
  }

  updateServico(): void {
    this.servicoService.update(this.servico).subscribe(() => {
      this.servicoService.showMessage("servico atualizado com sucesso!");
      this.router.navigate(["/servicos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/servicos"]);
  }
}
