import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  private apiUrl = "http://localhost:3000/Creditcards";
  constructor( private httpClient: HttpClient) { }

  //CRUD Functionallity
  //Create New Credit Card
  createCreditCard( CreditCard: CreditCard): Observable<CreditCard>{
    return this.httpClient.post<CreditCard>(this.apiUrl,CreditCard);
  }
  //Get All Credit Cards
getCreditCards():Observable<CreditCard[]>{
  return this.httpClient.get<CreditCard[]>(this.apiUrl);
}
//get Specific Credit Cards
getCreditCardById(id:number):Observable<CreditCard>{
  const url = `${this.apiUrl}/${id}`;
  return this.httpClient.get<CreditCard>(url);
}
//update Functionality
updateCreditCard( CreditCard: CreditCard):Observable<CreditCard>{
  const url = `${this.apiUrl}/${CreditCard.id}`
  return this.httpClient.put<CreditCard>(url,CreditCard);
}

//Delete Functionality

deleteCreditCard(id:number):Observable<void>{
  const url = `${this.apiUrl}/${id}`;
  return this.httpClient.delete<void>(url);
}


}
