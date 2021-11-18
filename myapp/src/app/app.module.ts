import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UpperCapitalPipe } from './hello/upper-capital.pipe';
import { LoggerService } from './logger.service';
import { GreetingsService } from './greeting.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UpperCapitalPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [LoggerService, GreetingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
