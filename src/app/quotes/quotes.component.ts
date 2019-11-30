import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

quotes : Quote [] = [

{ publisher:"John Opana",
quote : `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don\'t deserve me at my best.`,
author :"Marilyn Monroe"
},
{
publisher :"John Opana",
quote :`Be yourself; everyone else is already taken. `,
author :"Oscar Wilde"
},
{
  publisher :"John Opana",
  quote :`Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
  author :"Albert Einstein"
}
]

constructor(){}
  ngOnInit() {
  }

}
