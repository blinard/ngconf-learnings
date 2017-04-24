import { Component, OnInit } from "@angular/core";
import { Item } from "../item";
import { ItemDataService } from "app/item-data.service";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.css"]
})
export class ItemListComponent implements OnInit {
  items: Array<Item>;
  constructor(public itemDataService: ItemDataService) { }

  ngOnInit() {
    this.items = this.itemDataService.getItems();
  }

}
