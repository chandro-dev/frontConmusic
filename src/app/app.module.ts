import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { LetraComponent } from './letra/letra.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConfigComponent,
    RecomendacionesComponent,
    ReproductorComponent,
    LetraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
