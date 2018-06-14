import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        NotfoundComponent,
        BreadcrumbsComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        NotfoundComponent,
        BreadcrumbsComponent
    ]
})

export class SharedModule { }
