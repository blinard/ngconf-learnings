import { Injectable } from "@angular/core";
import { Item } from "./item";

@Injectable()
export class ItemDataService {
  private items = [
    new Item(1, "Thing 1", null),
    new Item(2, "Thing 2", null)
  ];
  constructor() { }

  getItems(): Array<Item> {
    return this.items;
  }
}
