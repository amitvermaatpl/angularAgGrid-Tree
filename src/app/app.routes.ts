import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

import { RequestAssessmentComponent } from './components/personal/request-assessment/request-assessment.component';
import { RequestAssessmentPlacedComponent } from './components/personal/request-assessment-placed/request-assessment-placed.component';
import { PastAssessmentsComponent } from './components/personal/past-assessments/past-assessments.component';
import { SimulateAssessmentComponent } from './components/personal/simulate-assessment/simulate-assessment.component';
import { PastSimulationsComponent } from './components/personal/past-simulations/past-simulations.component';

import { DashboardExpertComponent } from './components/expert/dashboard-expert/dashboard-expert.component';
import { LiveAssessmentComponent } from './components/expert/live-assessment/live-assessment.component';
import { LiveAssessmentDataSelectionComponent} from './components/expert/live-assessment-data-selection/live-assessment-data-selection.component';
import { SimulateAssessmentExpertComponent } from './components/expert/simulate-assessment-expert/simulate-assessment-expert.component';
import { AssessmentReportComponent } from './components/expert/assessment-report/assessment-report.component';
import { DataTransferToDiskComponent } from './components/expert/data-transfer-to-disk/data-transfer-to-disk.component';
import { PortfolioTreeComponent } from './components/expert/portfolio-tree/portfolio-tree.component';
import { StaticConfigurationsComponent } from './components/expert/static-configurations/static-configurations.component';
import { RuleActivationComponent } from './components/expert/rule-activation/rule-activation.component';
import { ScheduleAssessmentsComponent } from './components/expert/schedule-assessments/schedule-assessments.component';
import { LedExpertComponent } from './components/expert/led-expert/led-expert.component';
import { RuleDesignComponent } from './components/expert/rule-design/rule-design.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'requestassessment', component: RequestAssessmentComponent},
  {path: 'requestassessmentplaced', component: RequestAssessmentPlacedComponent},
  {path: 'pastassessments', component: PastAssessmentsComponent},
  {path: 'simulateassessment', component: SimulateAssessmentComponent},
  {path: 'pastsimulations', component: PastSimulationsComponent},
  {path: 'ruledesign', component: RuleDesignComponent},
  {path: 'Dashboard', component: DashboardExpertComponent},
  {path: 'liveassessment', component: LiveAssessmentComponent},
  {path: 'liveassessmentdataselection', component: LiveAssessmentDataSelectionComponent},
  {path: 'Simulateassessment', component: SimulateAssessmentExpertComponent},
  {path: 'assessmentreport', component: AssessmentReportComponent},
  {path: 'datatransfertodisk', component: DataTransferToDiskComponent},
  {path: 'portfoliotree', component: PortfolioTreeComponent},
  {path: 'staticConfig', component: StaticConfigurationsComponent},
  {path: 'ruleactivation', component: RuleActivationComponent},
  {path: 'scheduleassessments', component: ScheduleAssessmentsComponent},
  {path: 'ledexpert', component: LedExpertComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

export const appRouterModule = RouterModule.forRoot(appRoutes, {useHash: true});
