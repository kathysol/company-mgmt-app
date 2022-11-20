import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { constants } from 'src/constants/constants';
@Injectable({
  providedIn: 'root'
})
export class CompanyMgmtService {

  autenticationService: any;
  constructor(private http:HttpClient) {
    this.autenticationService='Basic '+btoa(constants.SERVICES.USER + ':' + constants.SERVICES.PASSWORD);
  }

  public get(){

    const headers = new HttpHeaders({ Authorization: this.autenticationService });
    return this.http.get('/api/enterprise/',{headers});
  }
}
