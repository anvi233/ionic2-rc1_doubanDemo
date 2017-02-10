import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IndexPage } from '../pages/index/index';
import { MyData } from '../providers/my-data';
import { ListDetail } from '../pages/list-detail/list-detail';
import { ListPage } from '../pages/list-page/list-page';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IndexPage,
    ListDetail,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IndexPage,
    ListDetail,
    ListPage
  ],
  providers: [MyData]
})
export class AppModule {}
