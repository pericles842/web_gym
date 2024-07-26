import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { DetailServiceComponent } from './components/detail-service/detail-service.component';

export const routes: Routes = [
    { path: 'home', component: LayoutComponent },
    { path: 'service/:id', component: DetailServiceComponent }
];
