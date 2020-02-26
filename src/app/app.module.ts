import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material module
import { MaterialModule } from './material.module';

//Angular maps
import { AgmCoreModule } from '@agm/core';

//Components
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQlFeB5COihzKnFCTEUKsOGILbdhheH5A'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
