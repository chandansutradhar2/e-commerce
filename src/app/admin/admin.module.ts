import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticCardComponent } from './dashboard/statistic-card/statistic-card.component';
import { GraphComponent } from './dashboard/graph/graph.component';
import { PieComponent } from './dashboard/pie/pie.component';
import { RouterModule, Routes } from '@angular/router';
import { UIModule } from '../uimodule/uimodule.module';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
];
@NgModule({
  declarations: [
    DashboardComponent,
    StatisticCardComponent,
    GraphComponent,
    PieComponent,
  ],
  imports: [UIModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AdminModule {}
