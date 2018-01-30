import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayListComponent,
    IngredientListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
