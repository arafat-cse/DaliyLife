import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCard } from '../../models/credit-card';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditcardsService } from '../../services/creditcards.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  editCreditCardForm!: FormGroup;

  creditCardData:CreditCard | null =null;
  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private creditCardsService:CreditcardsService)
    {
      this.editCreditCardForm = this.formBuilder.group({
        // name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        name: ['', [Validators.required, Validators.minLength(3)]],
        description:['',Validators.required],
        bankName:['',Validators.required],
        maxCredit:['',Validators.required],
        interestRate:['',Validators.required],
        active:[false,Validators.required],
        recommendedScore:['',Validators.required],
        annualFee:['',Validators.required],
        termsAndConditions:['',Validators.required],
        // createDate:['',Validators.required],
        // updateDate:['',Validators.required],
      });
    }
    ngOnInit(){
      const id = parseInt(this.route.snapshot.paramMap.get("id") || '');
      if(id !==0)
      {
        this.creditCardsService.getCreditCardById(id).subscribe(data=>{
          this.creditCardData = data;

          this,this.editCreditCardForm.patchValue(this.creditCardData);
        });
      }
    }
    onSubmit(){
      console.log(this.editCreditCardForm.valid);

     if(this.editCreditCardForm.valid){
        const updatedFormDate: CreditCard = this.editCreditCardForm.value;
        console.log(updatedFormDate);
        this.creditCardsService.updateCreditCard(updatedFormDate);
     }
    }
}
