import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  showDescription: boolean = false;

  quotes: Quote[] = [
    {
      publisher: "John Opana",
      quote: `A room without books is like a body without a soul.” 
`,
      author: "_Marcus Tullius Cicero"
    },
    {
      publisher: "John Opana",
      quote: `Be yourself; everyone else is already taken. `,
      author: "_Oscar Wilde"
    },
    {
      publisher: "John Opana",
      quote: `So many books, so little time.” 
  `,
      author: "_Frank Zappa"
    }
  ];

  // addQuote(quotes) {
  //   quotes.completeDate = new Date(quotes.completeDate);
  //   this.quotes.push(quotes);
  // }
  deleteQuote(index) {
    this.quotes.splice(index, 1);
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;
  }

  constructor() {}
  ngOnInit() {}
}
