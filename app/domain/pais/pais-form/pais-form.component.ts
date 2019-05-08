import { PaisService } from './../pais.service';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Validation from '../../core/util/validation';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent implements OnInit {
  
  // Declaração de variáveis
  pais:Pais;
  titulo: string;
  paisForm: FormGroup;

  constructor(private paisService: PaisService, private builder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    // Instanciar novo pais
    this.pais = new Pais();

    // Obter o ID pela URL
    this.pais.id = this.route.snapshot.params['id'];

    // Define o título
    this.titulo = (this.pais.id) ? 'Editar': 'Cadastrar';

    // Reactive Forms
    this.paisForm = this.builder.group({
      id: [],
      nome: ['', Validators.required],
    },{});
    // Busca os dados do pais caso seja editar ou visualizar
    if(this.pais.id)
    {
      this.paisService.findById(this.pais.id)
      .subscribe( pais => this.paisForm.patchValue(pais))
    }
    // Desabilitar todos os campos do formulário caso seja visualizar
    if(this.route.snapshot.url[0].path == 'visualizar'){
      // Desabilita o formulário
      this.paisForm.disable();
      // Altera o titulo da pagina
      this.titulo= 'Visualizar';
    }
  }
  
  onSave(pais:Pais){
    // Verificar se o formulario esta inválido

    if(this.paisForm.invalid){
      console.log("Formulário inválido");
      Validation.allFormFields(this.paisForm);

    } else {
      this.paisService.save(pais)
      .subscribe(pais => {
        console.log("Pais salvo com sucesso!");
        this.router.navigate(['/pais']);
      });
    } 
  }
}

