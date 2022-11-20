import { Component, OnInit } from '@angular/core';
import { CompanyMgmtService } from '../company-mgmt.service';
import EnterpriseVO from '../model/DepartmentVO';

@Component({
  selector: 'app-admin-enterprise',
  templateUrl: './admin-enterprise.component.html',
  styleUrls: ['./admin-enterprise.component.css']
})
export class AdminEnterpriseComponent implements OnInit {

  enterpriseAll: EnterpriseVO[]= [];
  constructor(private companyMgmtService:CompanyMgmtService) { }


  ngOnInit(): void {
    this.getAllEnterprises();
  }


  getAllEnterprises(){
    this.companyMgmtService.getAllEnterprises().subscribe(resp =>{
      this.enterpriseAll=resp;
      console.warn('ENTERPRISES ALL',this.enterpriseAll);
    })

}

}
