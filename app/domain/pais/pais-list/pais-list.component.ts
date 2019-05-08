import { PaisService } from './../pais.service';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  //Declarações de variaveis

  paises: Pais[];


  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.paisService.findAll()
    .subscribe(paises => this.paises = paises 
      );
  }
  //Método de deletar pais
  onDelete(id:number){
    this.paisService.deleteById(id)
    .subscribe(()=>{
      console.log("Pais deletado com sucesso");

      //Remove o pais da lista
      this.paises = this.paises.filter(pais=> pais.id !== id);
    });
  }
}
