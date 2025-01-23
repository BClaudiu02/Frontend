import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expense Tracker';
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  currentView: string = 'day';
  currentDay: string = '2025-01-10';

  changeDay(day: string): void {
    this.currentDay = day;
    this.currentView = 'day';
  }

  showSummary(): void {
    this.currentView = 'summary';
  }
}
