import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { DayViewComponent } from './components/day-view/day-view.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CommonModule } from '@angular/common';
import { ExpenseService } from './services/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    DayViewComponent,
    SummaryComponent
  ],
  exports: [
    AppComponent,
    DayViewComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule 
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
