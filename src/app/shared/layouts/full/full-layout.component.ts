import {Component} from '@angular/core';
import {MENU_ITEMS} from "../../menu/side-menu";

@Component({
  selector: 'app-full',
  styleUrls: ['./full-layout.component.scss'],
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent {
  menu = MENU_ITEMS;
}
