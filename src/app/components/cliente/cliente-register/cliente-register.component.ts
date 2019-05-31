import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteRepositoryService } from 'src/app/repository/clienteRepository.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente-register',
  templateUrl: './cliente-register.component.html',
  styleUrls: ['./cliente-register.component.css']
})
export class ClienteRegisterComponent implements OnInit {

  form: FormGroup;

  constructor(public formBuilder: FormBuilder, 
    public clienteRepository: ClienteRepositoryService,
    public route: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: '',
      email: ''
    })
  }

  addCliente() {
    this.clienteRepository.register(this.form.value).subscribe(
      ok => {
        console.log(ok)
        this.route.navigateByUrl('/cliente-list')
      },
      err => { 
        console.error(err)
      }
    )
  }

}
