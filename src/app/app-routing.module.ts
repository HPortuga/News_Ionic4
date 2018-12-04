import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'top-news', loadChildren: './top-news/top-news.module#TopNewsPageModule' },
  { path: 'headlines', loadChildren: './headlines/headlines.module#HeadlinesPageModule' },
  { path: 'sources', loadChildren: './sources/sources.module#SourcesPageModule' },
  { path: 'favourites', loadChildren: './favourites/favourites.module#FavouritesPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
