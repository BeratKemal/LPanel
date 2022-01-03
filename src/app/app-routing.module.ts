import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebModule } from './web/web.module'
import { WebComponent } from './web/web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: '',
        loadChildren:() => import( './web/web.module').then(x => x.WebModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }