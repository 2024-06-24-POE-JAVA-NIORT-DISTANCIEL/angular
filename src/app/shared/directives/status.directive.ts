import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appStatus]',
})
export class StatusDirective {
  @Input() appState!: string;
  constructor() {}
}
