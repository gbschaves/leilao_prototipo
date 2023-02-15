import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent {
  @Input() select = {} as any;

  constructor() { }

  ngOnInit(): void {
  }
}
