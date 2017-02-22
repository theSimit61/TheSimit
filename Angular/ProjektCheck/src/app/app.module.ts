import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import {DataService} from './data.service';
import {LoginService} from './login.service';


import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ChangePwComponent } from './change-pw/change-pw.component';
import { DeleteProfilComponent } from './delete-profil/delete-profil.component';
import { ChangeAvatarComponent } from './change-avatar/change-avatar.component';
import { DropKompetenzComponent } from './drop-kompetenz/drop-kompetenz.component';
import { DropFoerderplanComponent } from './drop-foerderplan/drop-foerderplan.component';
import { DropErreichtComponent } from './drop-erreicht/drop-erreicht.component';
import { DropProfilComponent } from './drop-profil/drop-profil.component';
import { DropSchuleComponent } from './drop-schule/drop-schule.component';
import { DropKlasseComponent } from './drop-klasse/drop-klasse.component';
import { DropFragenComponent } from './drop-fragen/drop-fragen.component';
import { LoginComponent } from './login/login.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { DropLogoutComponent } from './drop-logout/drop-logout.component';
import { EducationPlanComponent } from './education-plan/education-plan.component';
import { CompetenceReachedComponent } from './competence-reached/competence-reached.component';

const appRoutes: Routes = [
 { path: 'login', component: LoginComponent },
 { path: 'changeAvatar', component: ChangeAvatarComponent },
  { path: 'changePassword', component: ChangePwComponent},
  { path: 'deleteProfil', component: DeleteProfilComponent},
   { path: 'educationPlan/:id', component: EducationPlanComponent },
   { path: 'reachedCompetence/:id', component: CompetenceReachedComponent },
   { path: 'allCompetence/:id', component: ContentComponent },
{ path: '**', component: PagenotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ChangePwComponent,
    DeleteProfilComponent,
    ChangeAvatarComponent,
    DropKompetenzComponent,
    DropFoerderplanComponent,
    DropErreichtComponent,
    DropProfilComponent,
    DropSchuleComponent,
    DropKlasseComponent,
    DropFragenComponent,
    LoginComponent,
    PagenotFoundComponent,
    DropLogoutComponent,
    EducationPlanComponent,
    CompetenceReachedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    LoginService,
    ContentComponent,
    EducationPlanComponent,
    CompetenceReachedComponent,
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
