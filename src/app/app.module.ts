import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AnalysisContentsListComponent } from "./analysis-contents/analysis-contents-list.component";
import { StockDetailComponent } from "./analysis-contents/stock-detail/stock-detail.component";
import { AppRoutingModule } from "./app-routing.module";
import { AnalysisRegistrationComponent } from "./analysis-contents/analysis-registration/analysis-registration.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AnalysisContentsService } from "./analysis-contents/analysis-contents.service";
import { AngularFireModule } from "@angular/fire";
import { environment } from "./environment";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    AnalysisContentsListComponent,
    StockDetailComponent,
    AnalysisRegistrationComponent
  ],
  bootstrap: [AppComponent],
  providers: [AnalysisContentsService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
