import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloKaiasComponent } from './hello-kaias/hello-kaias.component';

const routes: Routes = [
  { path: '', redirectTo: '/hello-kaias', pathMatch: 'full' },
  { path: 'hello-kaias', component: HelloKaiasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

