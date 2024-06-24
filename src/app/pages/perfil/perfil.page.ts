import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';
import { DbService } from '../../services/bd.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  profileImage: string | null = null;
  nombre: string = '';
  apellido: string = '';
  usuario: string = '';
  password: string = '';
  nivel_de_estudios: string = '';
  fecha_nacimiento: string = '';

  constructor(
    private router: Router,
    private dbService: DbService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Aquí podrías cargar los datos del usuario logueado
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    if (image && image.dataUrl) {
      this.profileImage = image.dataUrl;
    } else {
      this.presentAlert('Error al tomar la foto. Intenta de nuevo.');
    }
  }

  guardar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacíos');
    } else {
      this.guardarDatos();
    }
  }

  guardarDatos() {
    this.dbService.insertUsuario(this.nombre, this.apellido, this.usuario, this.password, this.nivel_de_estudios, this.fecha_nacimiento, this.profileImage!)
      .then(() => {
        this.presentAlert('Datos guardados exitosamente');
      })
      .catch(error => {
        this.presentAlert('Error al guardar datos: ' + error);
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
}
