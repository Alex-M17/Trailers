import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailersComponent } from './trailers/trailers.component';

const routes: Routes = [
  {path: 'trailers', component: TrailersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
