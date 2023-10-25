import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },

      {
        path: 'all-clients',
        loadChildren: () =>
          import('./all-clients/all-clients.module').then(
            (m) => m.AllClientsModule
          ),
      },
      {
        path: 'delete-checks',
        loadChildren: () =>
          import('./delete-checks/delete-checks.module').then(
            (m) => m.DeleteChecksModule
          ),
      },
      {
        path: 'to-do',
        loadChildren: () =>
          import('./to-do/to-do.module').then((m) => m.ToDoModule),
      },
      { path: 'profile', component: ProfileComponent },
    ],
  },

  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
