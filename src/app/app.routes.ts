import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';


const ROUTES: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Precios', component: PreciosComponent },
    { path: 'Protegida', component: ProtegidaComponent },
    { path: '**', component: HomeComponent },
];
export const APPROUTING = RouterModule.forRoot(ROUTES);
