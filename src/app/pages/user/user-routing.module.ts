import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from '../../resolvers/user.resolver';
import { UserComponent } from './page/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    resolve: {
      users: UserResolver,
    },
    // Exemplo atualizado passando uma função
    // resolve: { users: () => inject(UserResolver).resolve() },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
