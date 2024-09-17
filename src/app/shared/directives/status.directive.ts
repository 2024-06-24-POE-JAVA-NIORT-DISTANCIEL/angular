import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StatusDirective {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() {}

  ngOnChanges() {
    console.log(this.appState);
    this.tdClassName = `state-${this.appState.toLocaleLowerCase()}`;
    console.log(this.tdClassName);
  }
}
