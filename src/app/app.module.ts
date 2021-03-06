import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-md';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PisteComponent} from './piste/piste.component';
import {ToolsComponent} from './tools/tools.component';
import {CycleComponent} from './cycle/cycle.component';
import {HomeComponent} from './home/home.component';
import {IdentityService} from './service/identity.service';
import {CheckToolsService} from './service/check-tools.service';
import {NgModule} from '@angular/core';
import {SlideComponent} from './slide/slide.component';


@NgModule({
  declarations: [
    AppComponent,
    PisteComponent,
    ToolsComponent,
    HomeComponent,
    CycleComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [IdentityService, CheckToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
