import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'second/:genericId', loadChildren: './pages/second/second.module#SecondPageModule' },
  // { path: 'modal1', loadChildren: './pages/modal1/modal1.module#Modal1PageModule' },
  // { path: 'modal2', loadChildren: './pages/modal2/modal2.module#Modal2PageModule' },
  // { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
