import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AnalysisContentsListComponent } from "./analysis-contents/analysis-contents-list.component";

const routes: Routes = [
  {
    path: "analysis-list",
    component: AnalysisContentsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
