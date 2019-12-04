import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  quote: string;
  author:string;
  publisher: string;


  newQuote = new Quote("", "", "", 0, 0, new Date());
  @Output() addQuote = new EventEmitter();

  submitQuote() {
    this.newQuote = new Quote(this.quote, this.author, this.publisher, 0, 0, new Date());
    this.addQuote.emit(this.newQuote);
  }

  constructor() {}

  ngOnInit() {}
}
