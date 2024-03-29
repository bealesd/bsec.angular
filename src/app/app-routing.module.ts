import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsOnComponent } from './whats-on/whats-on.component';
import { ServicesComponent } from './services/services.component';
import { PreSchoolComponent } from './pre-school/pre-school.component';
import { YouthClubComponent } from './youth-club/youth-club.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { HomeGroupsComponent } from './home-groups/home-groups.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OurLocationComponent } from './our-location/our-location.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServiceAudioComponent   } from './service-audio/service-audio.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'whatsOn', component: WhatsOnComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'event/Services/:type', component: ServicesComponent },
  { path: 'event/Pre School', component: PreSchoolComponent },
  { path: 'event/Youth Club', component: YouthClubComponent },
  { path: 'event/Home Groups', component: HomeGroupsComponent },
  { path: 'event/Upcoming', component: UpcomingEventsComponent },
  { path: 'event/Calendar', component: CalendarComponent },
  { path: 'ourLocation', component: OurLocationComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'serviceAudio', component: ServiceAudioComponent },
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule, RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
