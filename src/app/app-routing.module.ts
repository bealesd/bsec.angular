import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsOnComponent } from './whats-on/whats-on.component';
import { ServicesComponent } from './services/services.component';
import { PreSchoolComponent } from './pre-school/pre-school.component';
import { YouthClubComponent } from './youth-club/youth-club.component';
import { HomeGroupsComponent } from './home-groups/home-groups.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'whatsOn', component: WhatsOnComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'event/Services', component: ServicesComponent },
  { path: 'event/services/:type', component: ServicesComponent },
  { path: 'event/Pre School', component: PreSchoolComponent },
  { path: 'event/Youth Club', component: YouthClubComponent },
  { path: 'event/Home Groups', component: HomeGroupsComponent },
  { path: 'calendar', component: CalendarComponent },
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }