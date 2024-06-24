import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs', // Redirige al tab por defecto
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tabs/tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tabs/tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tabs/tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'recordatorio-medicamento',
    loadChildren: () => import('./pages/recordatorio-medicamento/recordatorio-medicamento.module').then(m => m.RecordatorioMedicamentoPageModule)
  },
  {
    path: 'cantidad-medicamento',
    loadChildren: () => import('./pages/cantidad-medicamento/cantidad-medicamento.module').then(m => m.CantidadMedicamentoPageModule)
  },
  {
    path: 'recordatoriodeotraspersonasomascotas',
    loadChildren: () => import('./pages/recordatoriodeotraspersonasomascotas/recordatoriodeotraspersonasomascotas.module').then(m => m.RecordatoriodeotraspersonasomascotasPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.registerPageModule)
  },
  {
    path: 'medicamentos',
    loadChildren: () => import('./pages/medicamentos/medicamentos.module').then( m => m.MedicamentosPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./pages/maps/maps.module').then( m => m.MapsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
