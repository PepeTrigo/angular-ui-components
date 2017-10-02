import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiChecklistComponent } from './ui-checklist/ui-checklist.component';
import { UiSelectComponent } from './ui-select/ui-select.component';

@NgModule({
  declarations: [
    AppComponent,
    UiChecklistComponent,
    UiSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
