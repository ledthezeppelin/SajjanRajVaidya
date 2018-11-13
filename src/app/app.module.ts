import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SocialBarComponent } from './social-bar/social-bar.component';
import { TourComponent } from './tour/tour.component';
import { ListenComponent } from './listen/listen.component';
import { WatchComponent } from './watch/watch.component';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PhotosComponent } from './photos/photos.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    SocialBarComponent,
    TourComponent,
    ListenComponent,
    WatchComponent,
    AboutComponent,
    LandingPageComponent,
    PhotosComponent,
    FooterComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TourComponent
      },
      {
        path: 'tour',
        component: TourComponent
      },
      {
        path: 'listen',
        component: ListenComponent
      },
      {
        path: 'watch',
        component: WatchComponent
      },
      {
        path: 'photos',
        component: PhotosComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
