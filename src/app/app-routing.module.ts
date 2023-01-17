import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'projects/reflexes',
    loadChildren: () =>
      import('./projects/reflexes/reflexes.module').then(
        (m) => m.ReflexesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
