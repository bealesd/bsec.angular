import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { WhatsOnComponent } from './whats-on/whats-on.component';
import { AppRoutingModule } from './app-routing.module';
import { ServicesComponent } from './services/services.component';
import { PreSchoolComponent } from './pre-school/pre-school.component';
import { YouthClubComponent } from './youth-club/youth-club.component';
import { HomeGroupsComponent } from './home-groups/home-groups.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OurLocationComponent } from './our-location/our-location.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component'
import { ServiceAudioComponent   } from './service-audio/service-audio.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ServiceProvider } from "../providers/serviceProvider";

// import {AudioResampler} from "../../node_modules/audio-resampler"

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    WhatsOnComponent,
    ServicesComponent,
    PreSchoolComponent,
    YouthClubComponent,
    HomeGroupsComponent,
    MenuBarComponent,
    HomeComponent,
    CalendarComponent,
    OurLocationComponent,
    ContactUsComponent,
    UpcomingEventsComponent,
    ServiceAudioComponent
  ],
  imports: [
    HttpClientModule,
    FlexLayoutModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],

  providers: [ServiceProvider],
  bootstrap: [AppComponent]
})

export class AppModule { }
