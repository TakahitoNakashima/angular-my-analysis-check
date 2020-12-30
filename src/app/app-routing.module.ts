import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnalysisContentsListComponent } from "./analysis-contents/analysis-contents-list.component";
import { AnalysisRegistrationComponent } from "./analysis-contents/analysis-registration/analysis-registration.component";
import { StockDetailComponent } from "./analysis-contents/stock-detail/stock-detail.component";

const routes: Routes = [
  { path: "", component: AnalysisContentsListComponent },
  {
    path: "analysis-list",
    component: AnalysisContentsListComponent
  },
  {
    path: "stock-detail",
    component: StockDetailComponent
  },
  {
    path: "analysis-registration",
    component: AnalysisRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
