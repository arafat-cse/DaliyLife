import { Component, ViewChild, viewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


const TABLE_DATA: CreditCard[] = [
  {
    id: 1,
    name: 'Bank of America',
    description: "Bank of America offers",
    bankName: "Bank of America",
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: "Following are the terms and conditions",
    createDate: '2025-02-04',
    updateDate: '2025-02-04',
  },
  {
    id: 2,
    name: 'Bank of America',
    description: "Bank of America offers",
    bankName: "Bank of America",
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: "Following are the terms and conditions",
    createDate: '2025-02-04',
    updateDate: '2025-02-04',
  },
  {
    id: 3,
    name: 'Bank of America',
    description: "Bank of America offers",
    bankName: "Bank of America",
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: "Following are the terms and conditions",
    createDate: '2025-02-04',
    updateDate: '2025-02-04',
  }
];

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrl: './creditcards.component.css'
})
export class CreditcardsComponent {
  displayColumns = ["select","id","name","description","bankName","maxCredit","interestRate","active","recommendedScore","annualFee","termsAndConditions","createDate","updateDate"]
  // displayColumns = ["select","id",]
  dataSource = new MatTableDataSource(TABLE_DATA);

  selection = new SelectionModel(true,[]);
// @viewChild(MatPaginator) paginator: MatPaginator |undefined;

  // Corrected ViewChild decorators:
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  selectHandler(row: CreditCard){
    this.selection.toggle(row as never);
  }
}