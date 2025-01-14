import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CreditcardsService } from '../../services/creditcards.service';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  creditCardId!: number;
  private destory$:Subject<void> = new Subject<void>();



  constructor(private router:ActivatedRoute,
    private route: Router,
    private matSnackBar: MatSnackBar,
    private creditcardsService:CreditcardsService){
    this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || '');

      //Delete Functionality
      this.creditcardsService.deleteCreditCard(this.creditCardId)
   
      .pipe(takeUntil(this.destory$))
      .subscribe(data =>{
     this.showSuccessMessage("Credit Card Deleted Successfully");
        
         this.route.navigate(['creditcards']);
      })
      alert("Credit Card Delelete Yes?");
  }
  showSuccessMessage(message: string){
    this.matSnackBar.open(message, 'close',{
      duration:3000,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }
  ngOnDestory()
  {
    this.destory$.next();
    this.destory$.complete();
  }
}
