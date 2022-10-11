import {Component, OnInit} from '@angular/core';

interface ISolucoes {
  titulo: string,
  descricao: string,
  icone: string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public solucoes: ISolucoes[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.solucoes = [
      {
        titulo: 'Terceirização de TI',
        descricao: 'Tranquilidade, confiança e segurança no seu ambiente de tecnológico',
        icone: 'uil uil-book-reader'
      },
      {
        titulo: 'Suporte Remoto',
        descricao: 'Agilidade e eficiência para resolver as demandas de sua empresa sem perder tempo',
        icone: 'uil uil-comment-message'
      },
      {
        titulo: 'Redes e Infraestrutura',
        descricao: 'Cabeamentos estruturados, redes lógicas e projetos personalizados para seu negócio',
        icone: 'uil uil-cloud-computing'
      },
      {
        titulo: 'Cloud',
        descricao: 'Migração de dados e software para a Nuvem gerando maior escalabilidade',
        icone: 'uil uil-docker'
      },
      {
        titulo: 'Plataforma Proativa',
        descricao: 'Alta disponibilidade e prevenção proativa de falhas em seu ambiente de TI',
        icone: 'uil uil-clock'
      },
      {
        titulo: 'Google Workspaces',
        descricao: 'Serviços empresariais do Google para aumento de produtividade e comunicação\n',
        icone: 'uil uil-google'
      }
    ];
  }

}
