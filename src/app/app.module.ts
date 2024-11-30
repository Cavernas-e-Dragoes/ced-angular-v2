import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ClassDetailComponent } from './components/class-detail/class-detail.component';
import { RaceDetailComponent } from './components/race-detail/race-detail.component';
import { RacesComponent } from './pages/races/races.component';
import { MagiasComponent } from './pages/magias/magias.component';
import { MagicDetailComponent } from './components/magic-detail/magic-detail.component';
import { LoadingComponent } from './components/loading/loading.component';
import { EquipamentosCategoriasComponent } from './pages/equipamentos/equipamentos-categorias/equipamentos-categorias.component';
import { AtaqueComponent } from './pages/equipamentos/ataque/ataque.component';
import { DefesaComponent } from './pages/equipamentos/defesa/defesa.component';
import { FerramentasComponent } from './pages/equipamentos/ferramentas/ferramentas.component';
import { MontariasEVeiculosComponent } from './pages/equipamentos/montarias-e-veiculos/montarias-e-veiculos.component';
import { ItensMagicosComponent } from './pages/equipamentos/itens-magicos/itens-magicos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ClassesComponent,
    ClassDetailComponent,
    RaceDetailComponent,
    RacesComponent,
    MagiasComponent,
    MagicDetailComponent,
    LoadingComponent,
    EquipamentosCategoriasComponent,
    AtaqueComponent,
    DefesaComponent,
    FerramentasComponent,
    MontariasEVeiculosComponent,
    ItensMagicosComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
