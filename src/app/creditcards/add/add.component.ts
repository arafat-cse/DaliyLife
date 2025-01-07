import { Component } from '@angular/core';
import { CreditCard } from '../../models/credit-card';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  newCreditCard:CreditCard={
    id:0,
    name: "",
    bankName: "",
    description: "",
    maxCredit: 5000,
    interestRate: 12,
    active: true,
    recommendedScore: "100-200",
    annualFee: 12,
    termsAndConditions: "terms and condition for the credit card",
    createDate:  Date(),
    updateDate: Date()

  };


  saveCreditCard(){
    console.log("form Submitted");
    console.log(this.newCreditCard);
  }
}
