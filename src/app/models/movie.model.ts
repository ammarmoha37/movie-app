import { Cast } from "./cast.model";
import { Review } from "./review.model";

export class Movie {
  constructor(
    public id: number,
    public title: string,
    public img: string,
    public year: number,
    public duration: number,
    public type: string,
    public rate: number,
    public about: string,
    public reviews: Review[],
    public cast: Cast[]
  ) { }
}
