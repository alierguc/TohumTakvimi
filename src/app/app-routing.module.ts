import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//#region Routes
const routes: Routes = [
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'hayvanekle',
    loadChildren: () => import('./hayvanekle/hayvanekle.module').then( m => m.HayvaneklePageModule)
  },
  {
    path: 'hayvanara',
    loadChildren: () => import('./hayvanara/hayvanara.module').then( m => m.HayvanaraPageModule)
  },
  {
    path: 'bilgiduzenle',
    loadChildren: () => import('./bilgiduzenle/bilgiduzenle.module').then( m => m.BilgiduzenlePageModule)
  },
  {
    path: 'kullanimk',
    loadChildren: () => import('./kullanimk/kullanimk.module').then( m => m.KullanimkPageModule)
  },
  {
    path: 'isletmebilgileri',
    loadChildren: () => import('./isletmebilgileri/isletmebilgileri.module').then( m => m.IsletmebilgileriPageModule)
  },
  {
    path: 'isletmeolmayanlar',
    loadChildren: () => import('./isletmeolmayanlar/isletmeolmayanlar.module').then( m => m.IsletmeolmayanlarPageModule)
  },
  {
    path: 'veteriner',
    loadChildren: () => import('./veteriner/veteriner.module').then( m => m.VeterinerPageModule)
  },
  {
    path: 'hayvanlar',
    loadChildren: () => import('./hayvanlar/hayvanlar.module').then( m => m.HayvanlarPageModule)
  },
  {
    path: 'hekimmodal',
    loadChildren: () => import('./hekimmodal/hekimmodal.module').then( m => m.HekimmodalPageModule)
  },
  {
    path: 'gsut',
    loadChildren: () => import('./gsut/gsut.module').then( m => m.GsutPageModule)
  },
  {
    path: 'sutmodal',
    loadChildren: () => import('./sutmodal/sutmodal.module').then( m => m.SutmodalPageModule)
  },
  {
    path: 'hayvandurum',
    loadChildren: () => import('./hayvandurum/hayvandurum.module').then( m => m.HayvandurumPageModule)
  },
  {
    path: 'hayvanlistesi',
    loadChildren: () => import('./hayvanlistesi/hayvanlistesi.module').then( m => m.HayvanlistesiPageModule)
  },
  {
    path: 'sutlistemodal',
    loadChildren: () => import('./sutlistemodal/sutlistemodal.module').then( m => m.SutlistemodalPageModule)
  },
  {
    path: 'kizginlikmodal',
    loadChildren: () => import('./kizginlikmodal/kizginlikmodal.module').then( m => m.KizginlikmodalPageModule)
  },
  {
    path: 'tohumlamamodal',
    loadChildren: () => import('./tohumlamamodal/tohumlamamodal.module').then( m => m.TohumlamamodalPageModule)
  },
  {
    path: 'buzagimodal',
    loadChildren: () => import('./buzagimodal/buzagimodal.module').then( m => m.BuzagimodalPageModule)
  },
  {
    path: 'asilamamodal',
    loadChildren: () => import('./asilamamodal/asilamamodal.module').then( m => m.AsilamamodalPageModule)
  },
  {
    path: 'hastalikmodal',
    loadChildren: () => import('./hastalikmodal/hastalikmodal.module').then( m => m.HastalikmodalPageModule)
  },
  {
    path: 'hayvanbakimilist',
    loadChildren: () => import('./hayvanbakimilist/hayvanbakimilist.module').then( m => m.HayvanbakimilistPageModule)
  },




  {
    path: 'hbkizginlik',
    loadChildren: () => import('./hbkizginlik/hbkizginlik.module').then( m => m.HbkizginlikPageModule)
  },
  {
    path: 'hbtohumlama',
    loadChildren: () => import('./hbtohumlama/hbtohumlama.module').then( m => m.HbtohumlamaPageModule)
  },
  {
    path: 'hbasilama',
    loadChildren: () => import('./hbasilama/hbasilama.module').then( m => m.HbasilamaPageModule)
  },
  {
    path: 'hbhastalik',
    loadChildren: () => import('./hbhastalik/hbhastalik.module').then( m => m.HbhastalikPageModule)
  },
  {
    path: 'hbtartim',
    loadChildren: () => import('./hbtartim/hbtartim.module').then( m => m.HbtartimPageModule)
  },
  {
    path: 'tartimmodal',
    loadChildren: () => import('./tartimmodal/tartimmodal.module').then( m => m.TartimmodalPageModule)
  },
  {
    path: 'isletmedencikarmodal',
    loadChildren: () => import('./isletmedencikarmodal/isletmedencikarmodal.module').then( m => m.IsletmedencikarmodalPageModule)
  },
  {
    path: 'tohumlamahayvanliste',
    loadChildren: () => import('./tohumlamahayvanliste/tohumlamahayvanliste.module').then( m => m.TohumlamahayvanlistePageModule)
  },
  {
    path: 'bilgiduzenle',
    loadChildren: () => import('./bilgiduzenle/bilgiduzenle.module').then( m => m.BilgiduzenlePageModule)
  },
  {
    path: 'tohumguncelle',
    loadChildren: () => import('./tohumguncelle/tohumguncelle.module').then( m => m.TohumguncellePageModule)
  },
  {
    path: 'tartimguncelle',
    loadChildren: () => import('./tartimguncelle/tartimguncelle.module').then( m => m.TartimguncellePageModule)
  },
  {
    path: 'kizginlikguncelle',
    loadChildren: () => import('./kizginlikguncelle/kizginlikguncelle.module').then( m => m.KizginlikguncellePageModule)
  },
  {
    path: 'hastalikguncelle',
    loadChildren: () => import('./hastalikguncelle/hastalikguncelle.module').then( m => m.HastalikguncellePageModule)
  },
  {
    path: 'asiguncelle',
    loadChildren: () => import('./asiguncelle/asiguncelle.module').then( m => m.AsiguncellePageModule)
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'loginpage', loadChildren: './loginpage/loginpage.module#LoginpagePageModule' },
  { path: 'hayvanekle', loadChildren: './hayvanekle/hayvanekle.module#HayvaneklePageModule' },
  { path: 'hayvanara', loadChildren: './hayvanara/hayvanara.module#HayvanaraPageModule' },
  { path: 'kullanimk', loadChildren: './kullanimk/kullanimk.module#KullanimkPageModule' },
  { path: 'hekimmodal', loadChildren: './hekimmodal/hekimmodal.module#HekimmodalPageModule' },
  { path: 'gsut', loadChildren: './gsut/gsut.module#GsutPageModule' },
  { path: 'sutmodal', loadChildren: './sutmodal/sutmodal.module#SutmodalPageModule' },
  { path: 'hayvandurum', loadChildren: './hayvandurum/hayvandurum.module#HayvandurumPageModule' },
  { path: 'hayvanlistesi', loadChildren: './hayvanlistesi/hayvanlistesi.module#HayvanlistesiPageModule' },
  { path: 'sutlistemodal', loadChildren: './sutlistemodal/sutlistemodal.module#SutlistemodalPageModule' },
  { path: 'kizginlikmodal', loadChildren: './kizginlikmodal/kizginlikmodal.module#KizginlikmodalPageModule' },
  { path: 'tohumlamamodal', loadChildren: './tohumlamamodal/tohumlamamodal.module#TohumlamamodalPageModule' },
  { path: 'buzagimodal', loadChildren: './buzagimodal/buzagimodal.module#BuzagimodalPageModule' },
  { path: 'asilamamodal', loadChildren: './asilamamodal/asilamamodal.module#AsilamamodalPageModule' },
  { path: 'hastalikmodal', loadChildren: './hastalikmodal/hastalikmodal.module#HastalikmodalPageModule' },
  { path: 'hayvanbakimilist', loadChildren: './hayvanbakimilist/hayvanbakimilist.module#HayvanbakimilistPageModule' },
  { path: 'hbkizginlik', loadChildren: './hbkizginlik/hbkizginlik.module#HbkizginlikPageModule' },
  { path: 'hbtohumlama', loadChildren: './hbtohumlama/hbtohumlama.module#HbtohumlamaPageModule' },
  { path: 'hbasilama', loadChildren: './hbasilama/hbasilama.module#HbasilamaPageModule' },
  { path: 'hbhastalik', loadChildren: './hbhastalik/hbhastalik.module#HbhastalikPageModule' },
  { path: 'hbtartim', loadChildren: './hbtartim/hbtartim.module#HbtartimPageModule' },
  { path: 'tartimmodal', loadChildren: './tartimmodal/tartimmodal.module#TartimmodalPageModule' },
  { path: 'isletmedencikarmodal', loadChildren: './isletmedencikarmodal/isletmedencikarmodal.module#IsletmedencikarmodalPageModule' },
  { path: 'tohumlamahayvanliste', loadChildren: './tohumlamahayvanliste/tohumlamahayvanliste.module#TohumlamahayvanlistePageModule' },
  { path: 'bilgiduzenle', loadChildren: './bilgiduzenle/bilgiduzenle.module#BilgiduzenlePageModule' },
  { path: 'tohumguncelle', loadChildren: './tohumguncelle/tohumguncelle.module#TohumguncellePageModule' },
  { path: 'tartimguncelle', loadChildren: './tartimguncelle/tartimguncelle.module#TartimguncellePageModule' },
  { path: 'kizginlikguncelle', loadChildren: './kizginlikguncelle/kizginlikguncelle.module#KizginlikguncellePageModule' },
  { path: 'hastalikguncelle', loadChildren: './hastalikguncelle/hastalikguncelle.module#HastalikguncellePageModule' },
  { path: 'asiguncelle', loadChildren: './asiguncelle/asiguncelle.module#AsiguncellePageModule' },
  {
    path: 'android',
    loadChildren: () => import('./android/android.module').then( m => m.AndroidPageModule)
  },


];
//#endregion

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
