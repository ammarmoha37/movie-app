import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs-bar',
  templateUrl: './tabs-bar.component.html',
  styleUrl: './tabs-bar.component.css'
})
export class TabsBarComponent implements OnInit{
  activePage: string;

  constructor( private router: Router) { }

  ngOnInit() {
    const segments = this.router.url.split('/');
    const path = segments[1];
    this.activePage = path;
  }
}
