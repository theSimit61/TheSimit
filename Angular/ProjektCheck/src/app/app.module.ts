import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataService} from './data.service';

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
    DropFragenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
