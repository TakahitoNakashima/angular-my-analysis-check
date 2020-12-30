import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-stock-detail",
  templateUrl: "./stock-detail.component.html",
  styleUrls: ["./stock-detail.component.css"]
})
export class StockDetailComponent implements OnInit {
  constructor(private http: HttpClient, private db: AngularFireDatabase) {}

  currentPrice: number;
  buyPrice: number;
  startDate: string;
  endDate: string = "";
  analysisReason: string = "";

  ngOnInit() {
    let list = [];
    this.db.database.ref("userAnalysis").on("value", data => {
      if (data) {
        const rootList = data.val();
        const key = data.key;
        // データオブジェクトを配列に変更する
        if (rootList != null) {
          Object.keys(rootList).forEach((val, key) => {
            rootList[val].id = val;
            // Todo シンボル毎にデータを振り分けられるようにする
            if (rootList[val].analysisSymbol === "u") {
              this.startDate = rootList[val].startDate;
              this.analysisReason = rootList[val].analysisReason;
              this.buyPrice = rootList[val].startPrice;
            }
          });
        }
      }
    });
    this.getStockInfo().subscribe(resp => {
      console.log(resp);
      console.log(resp["price"].regularMarketPrice.raw);
      resp["price"].regularMarketPrice.raw;
      this.currentPrice = resp["price"].regularMarketPrice.raw;
    });
    this.buyPrice = 107;
  }

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
