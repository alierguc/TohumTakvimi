import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http:HttpClient) {}
  
    headerData()
    {
      /*
      var headers = new Headers();
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('content-type','application/json');
      */
    
    }

    /* headerData = Token */
    getDataDelete(url): Observable<any> {
    let deleteDataAnimal = this.http.get(url);
    return deleteDataAnimal;
    /* Hayvan Sil */
    }

    getDataAdd(url): Observable<any> {
      let addDataAnimal = this.http.get(url);
      return addDataAnimal;
      /* Hayvan Ekle */
   }

   getSearchData(url): Observable<any> {
    let searchRequestListener = this.http.get(url);
    return searchRequestListener;
    /* Arama İşlemi */
   }

   getDataLogin(url): Observable<any> {
      let loginRequestListener = this.http.get(url);
      return loginRequestListener;
      /* Login işlemi */
   }
  
   getDataHome(url): Observable<any> {
    let homeRequestListener = this.http.get(url);
    return homeRequestListener;
    /* Anasayfa Verilerini getir */
  }
  
}



