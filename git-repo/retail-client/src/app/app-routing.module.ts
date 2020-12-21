import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './start/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminMgmtComponent } from './admin-mgmt/admin-mgmt.component';
import { RetailGuard } from './guards/retail.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/start/login',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-mgmt/admin-mgmt.module').then((m) => m.AdminMgmtModule),
  },
  {
    path: 'retail',
    loadChildren: () =>
      import('./retail-management/retail-management.module').then(
        (m) => m.RetailManagementModule
      ),
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
