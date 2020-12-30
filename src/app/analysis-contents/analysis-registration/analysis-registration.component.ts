import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-analysis-registration",
  templateUrl: "./analysis-registration.component.html",
  styleUrls: ["./analysis-registration.component.css"]
})
export class AnalysisRegistrationComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStockInfo().subscribe(resp => {
      console.log(resp);
    });
    // .subscribe((data: Config) => this.config = {
    //     heroesUrl: data.heroesUrl,
    //     textfile:  data.textfile
    // });
    // fetch(
    //   "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=U&region=US",
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-key":
    //         "0f082554acmsh8697147bb1ff3f2p1d6f6cjsn74f8709eec57",
    //       "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    //     }
    //   }
    // )
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }

  // this.http.get(
  //     "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=U&region=US"
  //   );

  getStockInfo() {
    return this.http.get(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=U&region=US",
      {
        headers: {
          "x-rapidapi-key":
            "0f082554acmsh8697147bb1ff3f2p1d6f6cjsn74f8709eec57",
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
      }
    );
  }
}
