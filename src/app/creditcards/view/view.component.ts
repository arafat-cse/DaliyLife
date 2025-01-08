import { Component } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { CreditcardsService } from '../../services/creditcards.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  creditCardDetails!:CreditCard;
  creditCardId!: number;

  private destory$:Subject<void> = new Subject<void>();


  constructor(private creditCardsServices: CreditcardsService,
  private router:ActivatedRoute,
  private matSnackBar: MatSnackBar){
   this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || '');

    this.creditCardsServices.getCreditCardById(this.creditCardId)
    .pipe(takeUntil(this.destory$))
    .subscribe((data:CreditCard)=>{
      this.showSuccessMessage("Credit Card Loaded Successfully")
      this.creditCardDetails = data;
    })
  }
  showSuccessMessage(message: string){
    this.matSnackBar.open(message, 'close',{
      duration:3000
    })
  }
  ngOnDestory()
  {
    this.destory$.next();
    this.destory$.complete();
  }
}
