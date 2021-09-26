import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.models';
import { column } from 'src/app/models/column.moduls';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('test Board', [

    new column('Ideas',[

      "some random idea",
      "build a awsome application",
      "this is another idea"
    ]),

    new column('Research',[

      "Lorem Ipsum",
      "build a awsome application",
      "this is another idea"
    ]),

    new column('Todo',[

      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
      
    ]),
    
    new column('done',[

      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
      
    ]),
 
    
  ]);

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }



}
