import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { ExportService } from '../../services/export.service';

@Component({
  selector: 'app-summary',
  template: `
    <h2>Summary</h2>
    <button (click)="exportExpenses()">Export to Excel</button>
  `
})
export class SummaryComponent {
  constructor(private expenseService: ExpenseService, private exportService: ExportService) {}

  exportExpenses() {
    this.expenseService.getExpenses().subscribe(expenses => {
      this.exportService.exportToExcel(expenses);
    });
  }
}