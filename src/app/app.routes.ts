import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuardService } from '../app/services/auth-guard.service';


const ROUTES: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Precios', component: PreciosComponent },
    { path: 'Protegida', component: ProtegidaComponent ,canActivate: [AuthGuardService]},      
    { path: '**', component: HomeComponent },
];
export const APPROUTING = RouterModule.forRoot(ROUTES);
