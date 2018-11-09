import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GlobalnavComponent } from './globalnav.component';
import { GlobalnavService } from './globalnav.service';
import { NavItemComponent } from './nav-item/nav-item.component';
import { PrimaryNavItemComponent } from './primary-nav-item/primary-nav-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        FontAwesomeModule,
        MatButtonModule,
        MatDividerModule,
        MatExpansionModule,
        MatListModule,
        MatSidenavModule
    ],
    declarations: [
        GlobalnavComponent,
        NavItemComponent,
        PrimaryNavItemComponent,
        FooterComponent
    ],
    exports: [
        GlobalnavComponent
    ],
    providers: [
        GlobalnavService
    ]
})
export class GlobalnavModule { }
