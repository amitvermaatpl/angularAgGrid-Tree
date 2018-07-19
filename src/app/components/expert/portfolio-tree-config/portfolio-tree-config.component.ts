import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface portfolioTreeConfigModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-portfolio-tree-config',
  templateUrl: './portfolio-tree-config.component.html',
  styleUrls: ['./portfolio-tree-config.component.css']
})
export class PortfolioTreeConfigComponent extends  DialogComponent<portfolioTreeConfigModel,  boolean>  implements  portfolioTreeConfigModel {
  title: string;
  message: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  confirm() {
    this.result = true;
    this.close();
  }

  ngOnInit() {
  }

}
