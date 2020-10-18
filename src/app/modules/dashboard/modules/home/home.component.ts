import { Component } from "@angular/core";
import { Router } from '@angular/router';

export interface Tile {
    cols: number;
    rows: number;
    header: string;
    description: string;
    iconUrl: string;
    link?: string;
    styles?: any;
  }
  

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public tiles: Array<Tile> = [
        {header: 'One', cols: 3, rows: 1, description: '', link: 'tasks', iconUrl: '../../../../../assets/icons/archive-black-36dp.svg', styles: {
          background: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
        }},
        {header: 'Two', cols: 1, rows: 2, description: '', iconUrl: 'inbox', styles: {
          background: 'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
        }},
        {header: 'Three', cols: 1, rows: 1, description: '', iconUrl: 'delete_sweep', styles: {
          background: ' linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
        }},
        {header: 'Four', cols: 2, rows: 1, description: '', iconUrl: '../../../../../assets/icons/add-black-36dp.svg', styles: {
          background: 'linear-gradient( 292.9deg,  rgba(254,105,241,1) 28.8%, rgba(182,44,248,1) 70.4% )',
        }},
        {header: 'Four', cols: 4, rows: 1, description: '', iconUrl: 'archive', styles: {
          background: 'linear-gradient( 109.6deg,  rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% )',
        }},
      ];
    
    constructor(private router: Router) {}
    
    public navigateByUrl(link: string): void {
        this.router.navigateByUrl(`/dashboard/${link}`);
    }
}