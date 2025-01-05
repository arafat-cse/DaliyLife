import { Component } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { CreditcardsService } from '../../services/creditcards.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  creditCardDetails!:CreditCard;
  constructor(private creditCardsServices: CreditcardsService)
  {
    this.creditCardsServices.getCreditCardById(1).subscribe((data:CreditCard)=> {
      this.creditCardDetails = data;
    })
    console.log(this.creditCardDetails);
  }
}
