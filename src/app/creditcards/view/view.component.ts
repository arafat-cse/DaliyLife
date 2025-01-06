import { Component } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { CreditcardsService } from '../../services/creditcards.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  creditCardDetails!:CreditCard;
  creditCardId!: number;



  constructor(private creditCardsServices: CreditcardsService,

  private router:ActivatedRoute )
  {
   this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || '');

    this.creditCardsServices.getCreditCardById(this.creditCardId).subscribe((data:CreditCard)=> {
      this.creditCardDetails = data;
    })
  }
}
