import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { APP_CONFIG } from '../config/routes';
import { TestService } from '../providers/test-service';
import { ConfigurationModule, ConfigToken, EnvToken } from '@ramonornela/configuration';
import { UrlResolverModule } from '@ramonornela/url-resolver';
import { HttpModule, DefaultPlugins } from '@ramonornela/http';
import { HttpPluginsIonicModule } from '@ramonornela/http-plugins-ionic';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ConfigurationModule,
    UrlResolverModule.initialize(),
    HttpModule.initialize(DefaultPlugins),
    HttpPluginsIonicModule
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    { provide: EnvToken, useValue: 'dev' },
    { provide: ConfigToken, useValue: APP_CONFIG },
    TestService
  ]
})
export class AppModule {
}
