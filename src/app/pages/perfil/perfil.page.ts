import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  profileImage: string | null = null;
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  clave: string = '';

  constructor(private router: Router, private toastController: ToastController) {}

  async updateProfile() {
    const toast = await this.toastController.create({
      message: 'Perfil actualizado',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }

  async takePicture() {
    try {
      const image: Photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });

      this.profileImage = image.dataUrl ?? null; // Asegurarse de que nunca sea undefined
    } catch (error) {
      console.error('Error taking picture:', error);
      const toast = await this.toastController.create({
        message: 'Error al tomar la foto',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }
}
