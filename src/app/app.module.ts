import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MatsidenvComponent } from './matsidenv/matsidenv.component';
import { FormsModule } from '@angular/forms';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';



@NgModule({
  declarations: [
    AppComponent,
    MatsidenvComponent,
    DialogExampleComponent
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
