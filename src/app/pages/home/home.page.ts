import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {
  reminders = [
    { name: 'Paracetamol', time: '08:00 AM' },
    { name: 'Ibuprofeno', time: '12:00 PM' },
    { name: 'Antibiótico', time: '06:00 PM' }
  ];

  constructor(private router: Router, private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    const element = document.querySelector('.reminder-list');
    if (element) {
      const animation = this.animationCtrl.create()
        .addElement(element)
        .duration(1500)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(100px)', 'translateY(0px)');
      animation.play();
    }
  }

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
