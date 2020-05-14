import { Component } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.items,
      event.previousIndex,
      event.currentIndex);
  }
}
