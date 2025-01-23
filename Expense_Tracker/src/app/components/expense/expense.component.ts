import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe(expenses => {
      this.expenses = expenses;
    });
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id);
    this.expenses = this.expenses.filter(expense => expense.id !== id);
  }
}
