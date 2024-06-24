import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private reminders: any[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.reminders = (await this.storage.get('reminders')) || [];
  }

  async addReminder(reminder: any) {
    this.reminders.push(reminder);
    await this.storage.set('reminders', this.reminders);
  }

  async getReminders() {
    return await this.storage.get('reminders') || [];
  }
}
