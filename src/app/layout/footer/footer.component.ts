import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements DoCheck {
  showAbout: boolean = true;
  showShopping: boolean = true;
  showHelp: boolean = true;

  ngOnInit(): void {
    if (window.innerWidth > 400) {
      this.showAbout = true;
      this.showShopping = true;
      this.showHelp = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    alert(window.innerWidth);

  }

  ngDoCheck(): void {
    alert(window.innerWidth);
  }
}
