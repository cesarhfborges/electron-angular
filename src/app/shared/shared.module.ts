import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {PageNotFoundComponent} from './components/';
import {WebviewDirective} from './directives/';
import {BasicLayoutComponent, FullLayoutComponent} from "./layouts";
import {FooterComponent, HeaderComponent} from "./layouts/components";

import {NbSecurityModule} from "@nebular/security";
import {NbEvaIconsModule} from "@nebular/eva-icons";

import {
  CORPORATE_THEME,
  COSMIC_THEME,
  DARK_THEME,
  DEFAULT_THEME,
  NbActionsModule,
  NbButtonModule, NbCardModule, NbCheckboxModule,
  NbContextMenuModule,
  NbIconModule, NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule,
  NbUserModule
} from "@nebular/theme";
import {NbAuthModule} from '@nebular/auth';

const NB_MODULES: any[] = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbAuthModule,
  NbCardModule,
  NbInputModule,
  NbCheckboxModule
];

const COMPONENTS: any[] = [
  PageNotFoundComponent,
  FullLayoutComponent,
  BasicLayoutComponent,
  HeaderComponent,
  FooterComponent
];
const PIPES: any[] = [
  // CapitalizePipe,
  // PluralPipe,
  // RoundPipe,
  // TimingPipe,
  // NumberWithCommasPipe,
];

const DIRECTIVES: any[] = [
  WebviewDirective,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    ...NB_MODULES,
  ],
  exports: [
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ...DIRECTIVES,
    ...PIPES,
    ...COMPONENTS,
    ...NB_MODULES
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    const themeProviders = NbThemeModule.forRoot(
      {name: 'default'},
      [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]
    );
    return {
      ngModule: SharedModule,
      providers: themeProviders.providers,
    };
  }
}
