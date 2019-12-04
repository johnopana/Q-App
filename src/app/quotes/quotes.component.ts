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
      publisher:"John Opana",
      quote:"A room without books is like a body without a soul.",
      author: "_Marcus Tullius Cicero",
      upvote: 0,
      downvote:0,
      date: new Date()
    },
    {
      publisher: "John Opana",
      quote: "Be yourself; everyone else is already taken.",
      author: "_Oscar Wilde",
      upvote: 0,
      downvote:0,
      date: new Date()
    },
    {
      publisher: "John Opana",
      quote: "So many books, so little time.",
      author: "_Frank Zappa",
      upvote: 0,
      downvote:0,
      date: new Date()
    }
  ];

  addQuote(quotes) {
    quotes.completeDate = new Date(quotes.completeDate);
    this.quotes.push(quotes);
  }
  deleteQuote(index) {
    this.quotes.splice(index, 1);
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() {}
  ngOnInit() {}
}
