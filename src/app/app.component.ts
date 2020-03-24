import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angularmaterialhelp';
  numbers= [];
  constructor(public dialog: MatDialog) {
    for(let i =0; i<1000; i++) {
      this.numbers.push(i);
    }
  }
  public onOpenDialog() {
    console.log('clicked');
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name:'roma'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  public getNextBtch(e) {
    console.log(e);
  }
}
