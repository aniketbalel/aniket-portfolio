import { Routes } from '@angular/router';
import { FullStackPortfolio } from './full-stack-portfolio/full-stack-portfolio';
export const routes: Routes = [
    { path: '', component: FullStackPortfolio },
     { path: '**', redirectTo: '' }
];
