import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <section>
      <div>
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
      </div>

      <h1 class="fontRaleway">SAKURA RAMEN</h1>
      <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
    </section>
  `,
  styleUrls: ['./landingPage.component.scss'],
})
export class LandingPageComponent {}
