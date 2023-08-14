import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css'],
  providers: [ClienteService]
})
export class CrearClienteComponent {
  clienteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpCliente: ClienteService) {
    this.clienteForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  crearCliente() {
    if (this.clienteForm.valid) {
      const nuevoCliente = this.clienteForm.value;
      this.httpCliente.crearClientes(nuevoCliente).subscribe(res => {
          console.log('Cliente creado:', res);
          this.clienteForm.reset();
        }, (error) => {
          console.error('Error al crear cliente:', error);
        }
      );
    }
  }
}
