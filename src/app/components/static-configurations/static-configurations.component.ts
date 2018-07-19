import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-static-configurations',
  templateUrl: './static-configurations.component.html',
  styleUrls: ['./static-configurations.component.css']
})
export class StaticConfigurationsComponent implements OnInit {

  configurations: Boolean = true;
  linkactive: String = 'staticconfigurations';

  constructor(private http: HttpClient) { }

  columnDefs = [
    {headerName: 'Parameter', field: 'parameter', sort: "asc", width: 160, filter: "agTextColumnFilter"},
    {headerName: 'Current Value', field: 'currentvalue', width: 160, filter: "agTextColumnFilter"},
    {headerName: 'Valid From', field: 'validfrom', width: 160, filter: "agTextColumnFilter"},
    {headerName: 'Valid To', field:'validto', width: 160, filter: "agTextColumnFilter"},
    {headerName: 'Status', field:'status', width: 160, filter: "agTextColumnFilter"},
    {headerName: 'Action', field:'action', width: 160, filter: "agTextColumnFilter"}
  ];

  rowData:any;
  
  ngOnInit() {
    this.http.get('./assets/mockjson/static_config_data.json').subscribe( data => {
      this.rowData = data;
    }); 
  }
}
