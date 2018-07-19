import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { appRouterModule } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './app/components/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LeftnavComponent } from './shared/components/leftnav/leftnav.component';
import { StaticConfigurationsComponent } from './app/components/static-configurations/static-configurations.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        LoginComponent,
        LeftnavComponent,
        StaticConfigurationsComponent
      ],
      imports: [
        BrowserModule,
        appRouterModule,
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
/*   it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
 */});
