import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepositoriesComponent }      from './repositories/repositories.component';
import { DevelopersComponent } from './developers/developers.component';

const routes: Routes = [
  { path: '', redirectTo: '/repositories', pathMatch: 'full' },
  { path: 'developers', component: DevelopersComponent },
  { path: 'repositories', component: RepositoriesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
