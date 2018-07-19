import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { TreeModule } from 'angular-tree-component';
import { StepsModule, ConfirmationService } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';

import { appRouterModule } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { LeftnavComponent } from './shared/components/leftnav/leftnav.component';
import { ActionRendererComponent } from './shared/components/action-renderer/action-renderer.component';
import { RequestAssessmentComponent } from './components/personal/request-assessment/request-assessment.component';
import { PastAssessmentsComponent } from './components/personal/past-assessments/past-assessments.component';
import { SimulateAssessmentComponent } from './components/personal/simulate-assessment/simulate-assessment.component';
import { PastSimulationsComponent } from './components/personal/past-simulations/past-simulations.component';
import { RequestAssessmentPlacedComponent } from './components/personal/request-assessment-placed/request-assessment-placed.component';
import { ModelPastAssessmentComponent } from './components/personal/model-past-assessment/model-past-assessment.component';
import { ModelSimulateAssessmentComponent } from './components/personal/model-simulate-assessment/model-simulate-assessment.component';
import { ModelPastSimulationComponent } from './components/personal/model-past-simulation/model-past-simulation.component';

import { DashboardExpertComponent } from './components/expert/dashboard-expert/dashboard-expert.component';
import { LiveAssessmentComponent } from './components/expert/live-assessment/live-assessment.component';
import { SimulateAssessmentExpertComponent } from './components/expert/simulate-assessment-expert/simulate-assessment-expert.component';
import { AssessmentReportComponent } from './components/expert/assessment-report/assessment-report.component';
import { DataTransferToDiskComponent } from './components/expert/data-transfer-to-disk/data-transfer-to-disk.component';
import { PortfolioTreeComponent } from './components/expert/portfolio-tree/portfolio-tree.component';
import { StaticConfigurationsComponent } from './components/expert/static-configurations/static-configurations.component';
import { EditStaticConfigurationsComponent } from './components/expert/edit-static-configurations/edit-static-configurations.component';
import { RuleActivationComponent } from './components/expert/rule-activation/rule-activation.component';
import { ScheduleAssessmentsComponent } from './components/expert/schedule-assessments/schedule-assessments.component';
import { LedExpertComponent } from './components/expert/led-expert/led-expert.component';
import { ModelSimulateAssessmentExpertComponent } from './components/expert/model-simulate-assessment-expert/model-simulate-assessment-expert.component';
import { ModelScheduleAssessmentComponent } from './components/expert/model-schedule-assessment/model-schedule-assessment.component';
import { LiveAssessmentDataSelectionComponent } from './components/expert/live-assessment-data-selection/live-assessment-data-selection.component';
import { UserstoreService } from './shared/services/userstore.service';
import { LiveAssessmentActionRenderComponent } from './components/expert/live-assessment-action-render/live-assessment-action-render.component';
import { RuleDesignActionRenderComponent } from './components/expert/rule-design-action-render/rule-design-action-render.component';
import { StaticConfigActionRenderComponent } from './components/expert/static-config-action-render/static-config-action-render.component';
import { PortfolioTreeConfigComponent } from './components/expert/portfolio-tree-config/portfolio-tree-config.component';
import { PortfolioTreeService } from './shared/services/portfolio-tree.service';
import { RuledesignService } from './shared/services/ruledesign.service';
import { TreePortfolioService } from './shared/services/tree-portfolio.service';
import { DropdownTreeviewSelectComponent } from './components/expert/live-assessment/dropdown-treeview-select.component';
import { HttpInterceptor } from './shared/services/httpinterceptor';
import { TreeviewModule } from 'ngx-treeview';
import { AddStaticConfigurationsComponent } from './components/expert/add-static-configurations/add-static-configurations.component';
import { ApproveStaticConfigurationsComponent } from './components/expert/approve-static-configurations/approve-static-configurations.component';
import { RuleDesignComponent } from './components/expert/rule-design/rule-design.component';
import { AddRuleSetComponent } from './components/expert/add-rule-set/add-rule-set.component';
import { EditRuleStepComponent } from './components/expert/edit-rule-step/edit-rule-step.component';
import { AddChildComponent } from './components/expert/add-child/add-child.component';
import { HttpModule, Http } from '@angular/http'; 
import { RuleStepService } from './shared/services/rulestep.service';
import { EditPortfolioComponent } from './components/expert/edit-portfolio/edit-portfolio.component';
import { StaticConfigurationService } from './shared/services/staticconfiguration.service';
import { RejectStaticConfigurationComponent } from './components/expert/reject-static-configuration/reject-static-configuration.component';
import { DeleteStaticConfigurationComponent } from './components/expert/delete-static-configuration/delete-static-configuration.component';
import { ConfirmationDialogsComponent } from './components/expert/confirmation-dialogs/confirmation-dialogs.component';
import { CustomValidators } from './shared/validations/common-validators';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LeftnavComponent,
    ActionRendererComponent,
    RequestAssessmentComponent,
    PastAssessmentsComponent,
    SimulateAssessmentComponent,
    PastSimulationsComponent,
    RequestAssessmentPlacedComponent,
    ModelPastAssessmentComponent,
    ModelSimulateAssessmentComponent,
    ModelPastSimulationComponent,
    DashboardExpertComponent,
    LiveAssessmentComponent,
    SimulateAssessmentExpertComponent,
    AssessmentReportComponent,
    DataTransferToDiskComponent,
    PortfolioTreeComponent,
    StaticConfigurationsComponent,
    EditStaticConfigurationsComponent,
    RuleDesignActionRenderComponent,
    StaticConfigActionRenderComponent,
    RuleActivationComponent,
    ScheduleAssessmentsComponent,
    LedExpertComponent,
    ModelSimulateAssessmentExpertComponent,
    ModelScheduleAssessmentComponent,
    LiveAssessmentDataSelectionComponent,
    LiveAssessmentActionRenderComponent,
    PortfolioTreeConfigComponent,
    DropdownTreeviewSelectComponent,
    AddStaticConfigurationsComponent,
    ApproveStaticConfigurationsComponent,
    RuleDesignComponent,
    AddRuleSetComponent,
    EditRuleStepComponent,
    AddChildComponent,
    EditPortfolioComponent,
    RejectStaticConfigurationComponent,
    DeleteStaticConfigurationComponent,
    ConfirmationDialogsComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    FormsModule, ReactiveFormsModule,
    TreeModule,
    HttpClientModule,
    BootstrapModalModule,
    AgGridModule.withComponents([
      ActionRendererComponent, 
      LiveAssessmentActionRenderComponent, 
      RuleDesignActionRenderComponent, 
      StaticConfigActionRenderComponent]),
    NgxMyDatePickerModule.forRoot(),
    StepsModule,
    HttpModule,
    TreeviewModule.forRoot()
  ],
  providers: [
    UserstoreService, 
    HttpInterceptor,  
    PortfolioTreeService, 
    RuledesignService, 
    RuleStepService, 
    TreePortfolioService, 
    StaticConfigurationService,
    CustomValidators
  ],
  entryComponents: [
    ModelPastAssessmentComponent,
    ModelSimulateAssessmentComponent,
    ModelPastSimulationComponent,
    ModelSimulateAssessmentExpertComponent,
    ModelScheduleAssessmentComponent,
    PortfolioTreeConfigComponent,
    EditStaticConfigurationsComponent,
    AddStaticConfigurationsComponent,
    ApproveStaticConfigurationsComponent,
    AddRuleSetComponent,
    EditRuleStepComponent,
    AddChildComponent,
    EditPortfolioComponent,
    ConfirmationDialogsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
