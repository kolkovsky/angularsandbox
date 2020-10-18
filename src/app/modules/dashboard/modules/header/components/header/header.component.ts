import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  
  @Output() public openSidebarChange: EventEmitter<void> = new EventEmitter<void>();
  public showBurgerMenu: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,) { }

  ngOnInit(): void {
  }

  public openSidebar(): void {
    this.openSidebarChange.emit();
  }
}
