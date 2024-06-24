import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from '../../services/bd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: any = "";
  password: string = ""; 
  sesion_activa: any = "";
  mensaje: string = '';

  constructor(private alertController: AlertController, 
              private router: Router,
              private dbService: DbService) { }

  ngOnInit() {}

  async login() {
    const usuario = await this.dbService.validarUsuario(this.usuario, this.password);
    if (usuario) {
      // Usuario válido, realizar acciones de inicio de sesión
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }
      }; 
      this.router.navigate(['/home'], navigationExtras);
    } else {
      // Usuario inválido, mostrar mensaje de error
      this.presentAlert('No existe el usuario en la base datos');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  crear_cuenta() {
    this.router.navigate(['/register']); // Redirigir al registro
  }
}
