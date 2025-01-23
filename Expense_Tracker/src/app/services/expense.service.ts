import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../models/expense.model';

@Injectable()
export class ExpenseService {
  private expenses: Expense[] = [];
  private expensesSubject = new BehaviorSubject<Expense[]>(this.expenses);

  getExpenses() {
    return this.expensesSubject.asObservable();
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
    this.expensesSubject.next(this.expenses);
  }

  deleteExpense(id: number) {
    this.expenses = this.expenses.filter(e => e.id !== id);
    this.expensesSubject.next(this.expenses);
  }
}
