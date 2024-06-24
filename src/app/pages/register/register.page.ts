import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from '../../services/bd.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  usuarioRecibido: string = '';
  passwordRecibido: string = '';
  nombre: any = '';
  apellido: any = '';
  selectedOption: any = '';
  selectedDate: any = '';
  usuario: any = '';
  password: any = '';
  profileImage: string | null = null;
  isDBReady: boolean = false;

  constructor(private router: Router,
              private activateroute: ActivatedRoute, 
              private alertController: AlertController,
              private dbService: DbService) {
    this.activateroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado']; 
      }
    });
  }

  ngOnInit() {
    this.dbService.getIsDBReady().subscribe(isReady => {
      this.isDBReady = isReady;
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  guardar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacíos');
    } else {
      this.guardarDatos();
    }
  }

  guardarDatos() {
    this.dbService.insertUsuario(this.nombre, this.apellido, this.usuario, this.password, this.selectedOption, this.selectedDate, this.profileImage!)
      .then(() => {
        this.presentAlert('Datos guardados exitosamente');
      })
      .catch(error => {
        this.presentAlert('Error al guardar datos:' + error);
      });
  }
}
