import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicLayoutComponent, FullLayoutComponent} from "./shared/layouts";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    component: BasicLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    // component: PageNotFoundComponent
  },
  // {
  //   path: 'not-found',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
