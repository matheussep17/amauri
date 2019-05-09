import { MantenedoraService } from './../mantenedora.service';
import { Mantenedora } from './../mantenedora';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenedora-list',
  templateUrl: './mantenedora-list.component.html',
  styleUrls: ['./mantenedora-list.component.css']
})
export class MantenedoraListComponent implements OnInit {
//Declarações de variáveis

mantenedoras: Mantenedora[];

  constructor(private mantenedoraService: MantenedoraService) { }

  ngOnInit() {
    this.mantenedoraService.findAll()
    .subscribe(mantenedoras =>  this.mantenedoras = mantenedoras)
  }
  
  onDelete(id:number){
    this.mantenedoraService.deleteById(id).subscribe(()=>{
      this.mantenedoras = this.mantenedoras.filter(mantenedora => mantenedora.id !== id);
    });
  }
}
