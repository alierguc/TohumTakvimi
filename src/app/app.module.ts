import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './api/request.service';
import { LoginpagePage } from './loginpage/loginpage.page';
import { HayvaneklePage } from './hayvanekle/hayvanekle.page';
import { HomePage } from './home/home.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { File } from "@ionic-native/file/ngx";
import { IonicStorageModule } from '@ionic/storage';
import { from } from 'rxjs';
import { HekimmodalPageModule } from './hekimmodal/hekimmodal.module';
import {SutmodalPageModule} from './sutmodal/sutmodal.module';
import {SutlistemodalPageModule} from './sutlistemodal/sutlistemodal.module';
import { HayvandurumPageModule } from './hayvandurum/hayvandurum.module';
import { KizginlikmodalPageModule  } from './kizginlikmodal/kizginlikmodal.module';
import { TohumlamamodalPageModule } from './tohumlamamodal/tohumlamamodal.module';
import { HastalikmodalPageModule } from './hastalikmodal/hastalikmodal.module';
import { BuzagimodalPageModule } from './buzagimodal/buzagimodal.module';
import { AsiguncellePageModule } from './asiguncelle/asiguncelle.module';
import { KizginlikguncellePageModule } from './kizginlikguncelle/kizginlikguncelle.module';
import { TohumguncellePageModule } from './tohumguncelle/tohumguncelle.module';
import { HastalikguncellePageModule } from './hastalikguncelle/hastalikguncelle.module';
import { TartimguncellePageModule } from './tartimguncelle/tartimguncelle.module';
import { AsilamamodalPageModule } from './asilamamodal/asilamamodal.module';
import { HayvanlistesiPageModule } from './hayvanlistesi/hayvanlistesi.module';
import { HayvanbakimilistPageModule } from './hayvanbakimilist/hayvanbakimilist.module';
import {HbasilamaPageModule} from './hbasilama/hbasilama.module';
import {HbhastalikPageModule} from './hbhastalik/hbhastalik.module';
import {HbkizginlikPageModule} from './hbkizginlik/hbkizginlik.module';
import {BilgiduzenlePageModule} from './bilgiduzenle/bilgiduzenle.module';
import {HbtohumlamaPageModule} from './hbtohumlama/hbtohumlama.module';
import {HbtartimPageModule} from './hbtartim/hbtartim.module';
import {TartimmodalPageModule} from './tartimmodal/tartimmodal.module';
import { IsletmedencikarmodalPageModule } from './isletmedencikarmodal/isletmedencikarmodal.module';
import { HTTP } from '@ionic-native/http';

const routes:Routes = [
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'loginpage', loadChildren: './loginpage/loginpage.module#LoginpagePageModule' },
  { path: 'hayvanekle', loadChildren: './hayvanekle/hayvanekle.module#HayvaneklePageModule' },
  { path: 'hayvanara', loadChildren: './hayvanara/hayvanara.module#HayvanaraPageModule' },
  { path: 'kullanimk', loadChildren: './kullanimk/kullanimk.module#KullanimkPageModule' },
  { path: 'hekimmodal', loadChildren: './hekimmodal/hekimmodal.module#HekimmodalPageModule' }
]

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: PreloadAllModules
      }),
    HttpClientModule,
    BrowserModule,
    SutmodalPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    BilgiduzenlePageModule,
    AppRoutingModule,
    AsiguncellePageModule,
    HekimmodalPageModule,
    HbasilamaPageModule,
    HastalikguncellePageModule,
    BuzagimodalPageModule,
    TohumguncellePageModule,
    HbtohumlamaPageModule,
    HbtartimPageModule,
    KizginlikguncellePageModule,
    TartimguncellePageModule,
    HbkizginlikPageModule,
    IsletmedencikarmodalPageModule,
    AsilamamodalPageModule,
    HbhastalikPageModule,
    TartimmodalPageModule,
    HayvanlistesiPageModule,
    HayvanbakimilistPageModule,
    TohumlamamodalPageModule,
    HastalikmodalPageModule,
    SutlistemodalPageModule,
    HayvandurumPageModule,
    KizginlikmodalPageModule
  ],
  providers: [
    StatusBar,
    LoginpagePage,
    File,
    RequestService,
    HayvaneklePage,
    HTTP,
    OneSignal,
    HomePage,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
