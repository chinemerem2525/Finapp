import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './dashboard/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransactionDetailComponent } from './pages/transaction-detail/transaction-detail.component';
import { NotificationDetailComponent } from './pages/notification-detail/notification-detail.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { TransactionVerificationComponent } from './pages/transaction-verification/transaction-verification.component';
import { CardsComponent } from './pages/cards/cards.component';
import { SavingsComponent } from './pages/savings/savings.component';
import { BillsComponent } from './pages/bills/bills.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CryptoComponent } from './crypto/crypto.component';
import { CryptoHomeComponent } from './crypto/crypto-home/crypto-home.component';
import { CoinDetailComponent } from './crypto/coin-detail/coin-detail.component';
import { ExchangeComponent } from './crypto/exchange/exchange.component';
import { PortfolioComponent } from './crypto/portfolio/portfolio.component';
import { CryptoTransactionsComponent } from './crypto/crypto-transactions/crypto-transactions.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { SmsVerificationComponent } from './authentication/sms-verification/sms-verification.component';
import { QrCodeComponent } from './authentication/qr-code/qr-code.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCategoryComponent } from './blog/blog-category/blog-category.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { ComponentsComponent } from './components/components.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { OthersComponent } from './others/others.component';
import { AboutComponent } from './others/about/about.component';
import { ContactComponent } from './others/contact/contact.component';
import { FaqComponent } from './others/faq/faq.component';
import { FourZeroFourComponent } from './others/four-zero-four/four-zero-four.component';
import { SplashIconComponent } from './others/splash-icon/splash-icon.component';
import { SplashImageComponent } from './others/splash-image/splash-image.component';

import { AccordionComponent } from './components/accordion/accordion.component';
import { ActionSheetComponent } from './components/action-sheet/action-sheet.component';
import { AddToHomeComponent } from './components/add-to-home/add-to-home.component';
import { AlertComponent } from './components/alert/alert.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MyCardsComponent } from './components/my-cards/my-cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
import { ContentboxComponent } from './components/contentbox/contentbox.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FullpageSliderComponent } from './components/fullpage-slider/fullpage-slider.component';
import { GridComponent } from './components/grid/grid.component';
import { IconsComponent } from './components/icons/icons.component';
import { ImagesComponent } from './components/images/images.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { ListviewComponent } from './components/listview/listview.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ModalAndPanelsComponent } from './components/modal-and-panels/modal-and-panels.component';
import { ComponentNotificationComponent } from './components/component-notification/component-notification.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { RadioComponent } from './components/radio/radio.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { TypographyComponent } from './components/typography/typography.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Pages', component: PagesComponent},
  {path: 'Transactions', component: TransactionsComponent},
  {path: 'TransactionDetail', component: TransactionDetailComponent},
  {path: 'NotificationDetail', component: NotificationDetailComponent},
  {path: 'TransactionVerification', component: TransactionVerificationComponent},
  {path: 'Cards', component: CardsComponent},
  {path: 'Savings', component: SavingsComponent},
  {path: 'Bills', component: BillsComponent},
  {path: 'Notifications', component: NotificationsComponent},
  {path: 'Settings', component: SettingsComponent},
  {path: 'Crypto', component: CryptoComponent},
  {path: 'CryptoHome', component: CryptoHomeComponent},
  {path: 'CoinDetail', component: CoinDetailComponent},
  {path: 'Exchange', component: ExchangeComponent},
  {path: 'Portfolio', component: PortfolioComponent},
  {path: 'CryptoTransactions', component: CryptoTransactionsComponent},
  {path: 'Authentication', component: AuthenticationComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'ForgetPassword', component: ForgetPasswordComponent},
  {path: 'SmsVerification', component: SmsVerificationComponent},
  {path: 'QrCode', component: QrCodeComponent},
  {path: 'Blog', component: BlogComponent},
  {path: 'BlogCategory', component: BlogCategoryComponent},
  {path: 'BlogPost', component: BlogPostComponent},
  {path: 'Components', component: ComponentsComponent},
  {path: 'Discover', component: DiscoverComponent},
  {path: 'Others', component: OthersComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Faq', component: FaqComponent},
  {path: 'FourZeroFour', component: FourZeroFourComponent},
  {path: 'SplashIcon', component: SplashIconComponent},
  {path: 'SplashImage', component: SplashImageComponent},
  {path: 'Accordion', component: AccordionComponent},
  {path: 'ActionSheet', component: ActionSheetComponent},
  {path: 'AddToHome', component: AddToHomeComponent},
  {path: 'Alert', component: AlertComponent},
  {path: 'BottomMenu', component: BottomMenuComponent},
  {path: 'AppHeader', component: AppHeaderComponent},
  {path: 'Badges', component: BadgesComponent},
  {path: 'Buttons', component: ButtonsComponent},
  {path: 'MyCards', component: MyCardsComponent},
  {path: 'Carousel', component: CarouselComponent},
  {path: 'Charts', component: ChartsComponent},
  {path: 'Checkbox', component: CheckboxComponent},
  {path: 'Chips', component: ChipsComponent},
  {path: 'Contentbox', component: ContentboxComponent},
  {path: 'Dialog', component: DialogComponent},
  {path: 'Dropdown', component: DropdownComponent},
  {path: 'FullpageSlider', component: FullpageSliderComponent},
  {path: 'Grid', component: GridComponent},
  {path: 'Icons', component: IconsComponent},
  {path: 'Images', component: ImagesComponent},
  {path: 'Inputs', component: InputsComponent},
  {path: 'Listview', component: ListviewComponent},
  {path: 'Messages', component: MessagesComponent},
  {path: 'ModalAndPanels', component: ModalAndPanelsComponent},
  {path: 'ComponentNotification', component: ComponentNotificationComponent},
  {path: 'Preloader', component: PreloaderComponent},
  {path: 'Progressbar', component: ProgressbarComponent},
  {path: 'Radio', component: RadioComponent},
  {path: 'Search', component: SearchComponent},
  {path: 'Table', component: TableComponent},
  {path: 'Tabs', component: TabsComponent},
  {path: 'Timeline', component: TimelineComponent},
  {path: 'Toast', component: ToastComponent},
  {path: 'Toggle', component: ToggleComponent},
  {path: 'Tooltips', component: TooltipsComponent},
  {path: 'Typography', component: TypographyComponent},






































]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    TransactionsComponent,
    TransactionDetailComponent,
    NotificationDetailComponent,
    FooterComponent,
    TransactionVerificationComponent,
    CardsComponent,
    SavingsComponent,
    BillsComponent,
    NotificationsComponent,
    SettingsComponent,
    CryptoComponent,
    CryptoHomeComponent,
    CoinDetailComponent,
    ExchangeComponent,
    PortfolioComponent,
    CryptoTransactionsComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    SmsVerificationComponent,
    QrCodeComponent,
    BlogComponent,
    BlogCategoryComponent,
    BlogPostComponent,
    ComponentsComponent,
    DiscoverComponent,
    OthersComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    FourZeroFourComponent,
    SplashIconComponent,
    SplashImageComponent,

    AccordionComponent,
    ActionSheetComponent,
    AddToHomeComponent,
    AlertComponent,
    BottomMenuComponent,
    AppHeaderComponent,
    BadgesComponent,
    ButtonsComponent,
    MyCardsComponent,
    CarouselComponent,
    ChartsComponent,
    CheckboxComponent,
    ChipsComponent,
    ContentboxComponent,
    DialogComponent,
    DropdownComponent,
    FullpageSliderComponent,
    GridComponent,
    IconsComponent,
    ImagesComponent,
    InputsComponent,
    ListviewComponent,
    MessagesComponent,
    ModalAndPanelsComponent,
    ComponentNotificationComponent,
    PreloaderComponent,
    ProgressbarComponent,
    RadioComponent,
    SearchComponent,
    TableComponent,
    TabsComponent,
    TimelineComponent,
    ToastComponent,
    ToggleComponent,
    TooltipsComponent,
    TypographyComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({}),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
