import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CreditcardsService } from '../../services/creditcards.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  creditCardId!: number;
  constructor(private router:ActivatedRoute,
    private route: Router,
    private creditcardsService:CreditcardsService){
    this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || '');

      //Delete Functionality
      this.creditcardsService.deleteCreditCard(this.creditCardId).subscribe(data =>{
         // console.log("Deleted this credit cards"))
         alert("Credit Card Deleted")
         this.route.navigate(['creditCards']);
      })
  }
}
