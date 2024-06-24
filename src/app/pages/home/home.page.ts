import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReminderService } from '../../services/reminder.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  reminders: any[] = [];

  constructor(private router: Router, private reminderService: ReminderService) {}

  async ngOnInit() {
    this.reminders = await this.reminderService.getReminders();
  }

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
