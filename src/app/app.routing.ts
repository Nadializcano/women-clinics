import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ReferencesListComponent } from './references-list/references-list.component';
import { ClinicDetailComponent } from './clinic-detail/clinic-detail.component';
import { ReferenceDetailComponent } from './reference-detail/reference-detail.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ForumComponent} from './forum/forum.component';
import { EditClinicComponent } from './edit-clinic/edit-clinic.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
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
        component: AdminComponent,
        canActivate: [AdminAuthGuardService]
    },
    {
        path: 'bookmark',
        component: BookmarkComponent
    },
    {
        path: 'public',
        component: PublicComponent
    },
    {
        path: 'private',
        component: PrivateComponent
    },
    {
        path: 'forum',
        component: ForumComponent
    },
    {
        path: 'edit-clinic/:id',
        component: EditClinicComponent,
        canActivate: [AdminAuthGuardService]
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
