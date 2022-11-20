import { Component, OnInit } from '@angular/core';
import { CompanyMgmtService } from '../company-mgmt.service';
@Component({
  selector: 'app-new-enterprise',
  templateUrl: './new-enterprise.component.html',
  styleUrls: ['./new-enterprise.component.css']
})
export class NewEnterpriseComponent implements OnInit {

  constructor(private companyMgmtService:CompanyMgmtService) { }

  ngOnInit(): void {

  }


  }
