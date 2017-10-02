import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-checklist',
  templateUrl: './ui-checklist.component.html',
  styleUrls: ['./ui-checklist.component.scss']
})
export class UiChecklistComponent implements OnInit {
  @Input() checkgroup: String;
  @Input() checklist: Array<any>;
  @Output() update: EventEmitter<any> = new EventEmitter();

  checkedItems: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  onCheck() {
    this.checkedItems = this.getCheckedItems(this.checklist);
    this.updateItems();
  }

  getCheckedItems(items) {
    let itemsChecked = [];

    items.forEach( (item) => {
      if (item.checked) {
        itemsChecked.push(item);
      }
    });

    return itemsChecked;
  }

  toggleAllStatus() {
    let itemsChecked = this.checklist.reduce((acc: any, item: any) => {
      if (item.checked) {
        acc.push(item);
      }
      return acc;
    }, []);

    if (itemsChecked.length === this.checklist.length){
      return true;
    } else {
      return false;
    }
  }

  toggleAllCheked(event) {
    if (event.target.checked) {
      this.checkAllUnchecked();
    } else {
      this.uncheckAllChecked();
    };
  }

  checkAllUnchecked() {
    this.checklist.forEach((item) => {
      if (!item.checked) {
        item.checked = true;
      }
    });
    this.onCheck();
  }

  uncheckAllChecked() {
    this.checklist.forEach((item) => {
      if (item.checked) {
        item.checked = false;
      }
    });
    this.onCheck();
  }

  updateItems() {
    this.update.emit(this.checkedItems);
  }
}
