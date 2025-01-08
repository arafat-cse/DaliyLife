import { Component } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { CreditcardsService } from '../../services/creditcards.service';
import { Route, Router } from '@angular/router';
import { Subscriber, Subscription, Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  private subcription: Subscription | undefined;
  constructor( private creditcardsService:CreditcardsService,
    private router:Router ){
    
  }


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
  creditCards:CreditCard[]=[];

  saveCreditCard(){
    this.creditcardsService.getCreditCards().subscribe((data:CreditCard[])=>{
      this.creditCards = data;
      this.newCreditCard.id=this.creditCards.length+1;
      this.subcription= this.creditcardsService.createCreditCard(this.newCreditCard).subscribe(data=>{
        alert("Create Card add");
        this.router.navigate(['creditcards']);
      })
    });
 
  


 
  }
  ngOnDestroy(){
    if(this.subcription){
      this.subcription.unsubscribe();
    }
  }
}
