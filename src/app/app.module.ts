import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './landing/components/home/home.component';
import { NavbarComponent } from './landing/components/navbar/navbar.component';
import { ContactComponent } from './landing/components/contact/contact.component';
import { BlogComponent } from './landing/components/blog/blog.component';
import { ExpriencesComponent } from './landing/components/expriences/expriences.component';
import { AboutComponent } from './landing/components/about/about.component';
import { FooterComponent } from './landing/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    BlogComponent,
    ExpriencesComponent,
    AboutComponent,
    FooterComponent
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
