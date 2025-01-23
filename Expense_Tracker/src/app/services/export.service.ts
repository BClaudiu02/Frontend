import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Expense } from '../models/expense.model';

@Injectable()
export class ExportService {
  exportToExcel(expenses: Expense[]) {
    const worksheet = XLSX.utils.json_to_sheet(expenses);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Expenses');
    XLSX.writeFile(workbook, 'expenses.xlsx');
  }
}
