import { Component, Input, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {
  @Input() date: string = '';
  dailyExpenses: Expense[] = [];
  newExpense: Partial<Expense> = { category: '', amount: 0 };

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe(expenses => {
      this.dailyExpenses = expenses.filter(e => e.date === this.date);
    });
  }

  addExpense(): void {
    if (!this.newExpense.category || !this.newExpense.amount) {
      alert('Please fill in both the category and amount!');
      return;
    }

    const expense: Expense = {
      id: Date.now(),
      date: this.date,
      category: this.newExpense.category!,
      amount: this.newExpense.amount!
    };

    this.expenseService.addExpense(expense);
    this.newExpense = { category: '', amount: 0 };
    this.loadExpenses();
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id);
    this.loadExpenses();
  }
}
