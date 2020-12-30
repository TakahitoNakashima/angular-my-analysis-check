import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-analysis-registration",
  templateUrl: "./analysis-registration.component.html",
  styleUrls: ["./analysis-registration.component.css"]
})
export class AnalysisRegistrationComponent implements OnInit {
  constructor(private db: AngularFireDatabase) {}

  analysisSymbol: string;
  startPrice: number;
  analysisReason: string;

  analysisForm = new FormGroup({
    analysisSymbol: new FormControl(""),
    analysisReason: new FormControl(""),
    startPrice: new FormControl()
  });

  ngOnInit() {}

  onClickMe() {
    const tutorialsRef = this.db.list("userAnalysis");
    const currentDate = new Date().toLocaleDateString();
    tutorialsRef.push({
      analysisSymbol: this.analysisForm.value.analysisSymbol,
      startPrice: this.analysisForm.value.startPrice,
      startDate: currentDate,
      analysisReason: this.analysisForm.value.analysisReason
    });
  }
}
