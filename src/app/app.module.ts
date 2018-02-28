import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ClonesComponent } from './clones/clones.component';
import { CloneDetailComponent } from './clone-detail/clone-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ClonesComponent,
    CloneDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }