import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelPastSimulationComponent } from '../model-past-simulation/model-past-simulation.component';
import { DialogService } from "ng2-bootstrap-modal";
import { ActionRendererComponent } from '../../../shared/components/action-renderer/action-renderer.component';

@Component({
  selector: 'app-past-simulations',
  templateUrl: './past-simulations.component.html',
  styleUrls: ['./past-simulations.component.css']
})
export class PastSimulationsComponent implements OnInit {

  personalportfolio: Boolean = true;
  linkactive: String = 'pastsimulations';
  context: any;
  frameworkComponents: any;
  private columnDefs;

  constructor(private http: HttpClient, private dialogService: DialogService) {
    this.columnDefs = [
      { headerName: 'Simulation Id', field: 'simulationid', width: 160, filter: "agTextColumnFilter" },
      { headerName: 'Simulation Date', field: 'simulationdate', width: 160, filter: "agTextColumnFilter" },
      { headerName: 'Portfolio', field: 'portfolio', width: 160, filter: "agTextColumnFilter" },
      { headerName: 'ISIN(S)', field: 'isins', width: 160, filter: "agTextColumnFilter" },
      { headerName: 'Assessment Type', field: 'assessmenttype', width: 160, filter: "agTextColumnFilter" },
      { headerName: 'Result', field: 'result', width: 160, filter: "agTextColumnFilter" },
      { headerName: 'Assessment Report', field: 'simulationreport', width: 160, filter: "agTextColumnFilter",
        cellRenderer: 'actionRenderer', cellStyle: { 'text-align': 'center' } }
    ];
    this.context = { componentParent: this };
    this.frameworkComponents = { actionRenderer: ActionRendererComponent };
  }


  rowData: any;

  ngOnInit() {
    this.http.get('./assets/mockjson/past_simulations_data.json').subscribe(data => {
      this.rowData = data;
    });
  }

  modelPastSimulation() {
    let disposable = this.dialogService.addDialog(ModelPastSimulationComponent, {
      title: 'Confirm title',
      message: 'Confirm message'
    })
      .subscribe((isConfirmed) => { });
  }
}
