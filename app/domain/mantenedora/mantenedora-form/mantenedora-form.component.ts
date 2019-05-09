import { PaisService } from './../../pais/pais.service';
import { MantenedoraService } from './../mantenedora.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Mantenedora } from './../mantenedora';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Validation from '../../core/util/validation';
import { Pais } from '../../pais/pais';

@Component({
  selector: 'app-mantenedora-form',
  templateUrl: './mantenedora-form.component.html',
  styleUrls: ['./mantenedora-form.component.css']
})
export class MantenedoraFormComponent implements OnInit {

  //Declaração de variáveis
  mantenedora: Mantenedora;
  mantenedoraForm: FormGroup;
  titulo: string;
  paises: Pais[];

  constructor(private paisService:PaisService, private mantenedoraService: MantenedoraService, private router:Router, private route:ActivatedRoute, private builder: FormBuilder) { }

  ngOnInit() {
    //Instanciar uma nova mantenedora
    this.mantenedora = new Mantenedora();

    //Obter ID pela URL
    this.mantenedora.id = this.route.snapshot.params['id'];

    //Titulo da pagina
    this.titulo =(this.mantenedora.id) ? 'Editar' : 'Cadastrar';

    // Reactive Form
    this.mantenedoraForm = this.builder.group({
      id: [],
      nome: ['', [ Validators.required,]],
      razaoSocial: ['',Validators.required],
      cnpj:['', Validators.required],
      endereco: this.builder.group({
        id:[],
        logradouro: ['', Validators.required],
        complemento: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado:['', Validators.required],
        pais: ['', Validators.required]
       
      })
    },{});

    if(this.mantenedora.id){
      this.mantenedoraService.findById(this.mantenedora.id)
      .subscribe(mantenedora => {
        this.mantenedoraForm.patchValue(mantenedora)
      });
    }

    if (this.mantenedora.id != null){
      this.mantenedoraService.findById(this.mantenedora.id)
      .subscribe(pais => this.mantenedoraForm.patchValue(pais));
    }

if (this.route.snapshot.url[0].path == 'visualizar'){
  this.mantenedoraForm.disable();
  //Altera o titulo da pagina
  this.titulo = 'Visualizar'
}

     //Busca Lista de Paises
     this.paisService.findAll()
     .subscribe(paises => this.paises = paises);
  }

  compareFn(c1,c2):boolean{
    return c1 && c2 ? c1.id === c2.id : c1===c2;
  }
//Metodo salvar
  onSave (mantenedora: Mantenedora){
    if(this.mantenedoraForm.invalid){
      Validation.allFormFields(this.mantenedoraForm);
    } else {
      this.mantenedoraService.save(mantenedora).subscribe(mantenedora => {
        console.log("Mantenedora salva com sucesso! ");

        //Redireciona para lista de pais
        this.router.navigate(['/mantenedora']);
      },
      (exception)=>{
        console.log(exception.error);     
      });
    }
  }
    //
    get form (){
      return this.mantenedoraForm.controls;
    }

   
  }
  

