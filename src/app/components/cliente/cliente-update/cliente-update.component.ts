import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteRepositoryService } from 'src/app/repository/clienteRepository.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  id: any;
  form: FormGroup;

  constructor(public formBuilder: FormBuilder, public route: Router, public activatedRoute: ActivatedRoute, public clienteRepository: ClienteRepositoryService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
    })

    this.form = this.formBuilder.group({
      nome: '',
      email: ''
    })

    this.populate()
  }

  populate(){
    this.clienteRepository.getById(this.id).subscribe(
      ok => {
        this.form.get('nome').setValue(ok.nome)
        this.form.get('email').setValue(ok.email)
      }
    )
  }

  update() {
    this.clienteRepository.update(this.id, this.form.value).subscribe(
      ok => this.route.navigateByUrl('/cliente-list')
    )
  }

}
