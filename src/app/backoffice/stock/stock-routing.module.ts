import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { OperationstockComponent } from './operationstock/operationstock.component';
import { StockComponent } from './stock.component';
import { ArticleComponent } from './article/article.component';




const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: StockComponent,
    children: [
      { path: '', redirectTo: 'operationstock', pathMatch: 'full' },
      { path: 'article', component: ArticleComponent },
      { path: 'operationstock', component: OperationstockComponent },

      { path: 'home', component: StockComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
