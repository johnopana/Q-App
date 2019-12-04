export class Quote {

  constructor(
    public quote: string,
    public publisher: string,
    public author: string,
    public upvote: number,
    public downvote: number,
    public date: Date
  ) {}
}
