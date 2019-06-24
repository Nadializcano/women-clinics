import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ReferencesListComponent } from './references-list/references-list.component';
import { ClinicDetailComponent } from './clinic-detail/clinic-detail.component';
import { ReferenceDetailComponent } from './reference-detail/reference-detail.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'clinics',
        component: ClinicListComponent
    },
    {
        path: 'references',
        component: ReferencesListComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'clinics/:id',
        component: ClinicDetailComponent
    },
    {
        path: 'references/:id',
        component: ReferenceDetailComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
