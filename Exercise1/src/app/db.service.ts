import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DbService {
  private data: Array<any>;
  constructor() {
    this.data = [
      { _id: 1, Farm: "Natural Prairie", produce: ["lettuce", "tomato"] },
      { _id: 2, Farm: "Green Planet", produce: ["potato", "rice"] },
      { _id: 3, Farm: "Walmart", produce: ["orange"] },
      { _id: 4, Farm: "Everybody", produce: ["coffee", "banana"] },
      { _id: 5, Farm: "Trader Joes", produce: ["vegetables"] }
    ];
  }

  getData() {
    return this.data;
  }

  getDataById(id: number) {
    if (this.data.find(x => x._id == id))
      return this.data.find(x => x._id == id);
    else return null;
  }
}
