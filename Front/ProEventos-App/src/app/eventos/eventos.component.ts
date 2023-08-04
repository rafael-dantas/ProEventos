import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  public eventos: any = [];
  public eventosFiltrados: any = [];
  widthImg: number = 100;
  marginImg: number = 2;
  exibirImagem: boolean = false;
  private _filtroLista: string = '';

  public get filtro(): string{
    return this._filtroLista;
  }

  public set filtro(value: string){
    this._filtroLista = value;
    this.eventos = this.filtro ? this.filtrarEventos(this.filtro) : this.eventosFiltrados;
  }

  public filtrarEventos(filtrarPor: string): any{
    filtrarPor = filtrarPor.toLocaleUpperCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleUpperCase().indexOf(filtrarPor) !== -1 ||
      evento.local.toLocaleUpperCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  alterarImagem(){
    this.exibirImagem = !this.exibirImagem;
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/evento').subscribe(
      response => { this.eventos = response; this.eventosFiltrados = this.eventos;},
      error => console.log(error)
  );
  }
}
