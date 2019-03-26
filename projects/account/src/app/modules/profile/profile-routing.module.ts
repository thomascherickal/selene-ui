import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountResolverService } from '../../core/guards/account-resolver.service';
import { MembershipResolverService } from '../../core/guards/membership-resolver.service';
import { EditComponent } from './pages/edit/edit.component';
import { NewComponent } from './pages/new/new.component';

const profileRoutes: Routes = [
    {
        path: 'new',
        component: NewComponent,
        resolve: {
            membershipTypes: MembershipResolverService
        }
    },
    {
        path: 'profile',
        component: EditComponent,
        resolve: {
            account: AccountResolverService,
            membershipTypes: MembershipResolverService
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRoutingModule { }
