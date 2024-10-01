import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';
import { cilHospital } from '@coreui/icons';
import { IconDirective, IconComponent } from '@coreui/icons-angular';
import {
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular';

import { DefaultFooterComponent, DefaultHeaderComponent } from './';
import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  standalone: true,
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    RouterLink,
    IconDirective,
    NgScrollbar,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    DefaultHeaderComponent,
    ShadowOnScrollDirective,
    ContainerComponent,
    RouterOutlet,
    DefaultFooterComponent,
    IconComponent
  ]
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  icons = { cilHospital };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.refresh();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.refresh();
      }
    });
  }

  filterNavItems(): void {
    const currentUrl = this.router.url;

    if (currentUrl.startsWith('/admin')) {
      this.navItems = navItems.filter(item =>
        (typeof item.url === 'string' && item.url.startsWith('/admin')) ||
        (typeof item.title === 'string' && item.title === 'Admin')
      );
    } else if (currentUrl.startsWith('/doctor')) {
      this.navItems = navItems.filter(item =>
        (typeof item.url === 'string' && item.url.startsWith('/doctor')) ||
        (typeof item.title === 'string' && item.title === 'Doctor')
      );
    } else if (currentUrl.startsWith('/patient')) {
      this.navItems = navItems.filter(item =>
        (typeof item.url === 'string' && item.url.startsWith('/patient')) ||
        (typeof item.title === 'string' && item.title === 'Patient')
      );
    }
  }

  refresh() {
    this.filterNavItems();
  }

  onScrollbarUpdate($event: any) {
    if ($event.verticalUsed) {
      console.log('verticalUsed', $event.verticalUsed);
    }
  }
}
