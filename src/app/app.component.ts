import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Mon CRM v1.0';

  // 1. Cold and unicast observables
  // obs$ = new Observable((sub) => {
  //   sub.next(Math.random());
  // });

  // constructor() {
  //   this.obs$.subscribe(function (data) {
  //     console.log('Abonné 1 : ', data);
  //   });

  //   this.obs$.subscribe((data) => {
  //     console.log('Abonné 2 : ', data);
  //   });

  //   this.obs$.subscribe((data) => {
  //     console.log('Abonné 3 : ', data);
  //   });
  // }

  // 2. Hot and multicast
  // 2.1. Subject
  // sub$ = new Subject();

  // constructor() {
  //   this.sub$.subscribe((data) => {
  //     console.log('Abonné 1 : ', data);
  //   });

  //   this.sub$.subscribe((data) => {
  //     console.log('Abonné 2 : ', data);
  //   });

  //   console.log('Première diffusion\n================');
  //   this.sub$.next(Math.random());

  //   this.sub$.subscribe((data) => {
  //     console.log('Abonné 3 : ', data);
  //   });

  //   console.log('Deuxième diffusion\n================');
  //   this.sub$.next(Math.random());
  // }

  // 2.2. BehaviorSubject

  // sub$ = new BehaviorSubject<number>(1);
  sub$ = new BehaviorSubject(Math.random());

  constructor() {
    this.sub$.subscribe((data) => {
      console.log('Abonné 1 : ', data);
    });

    this.sub$.subscribe((data) => {
      console.log('Abonné 2 : ', data);
    });

    console.log('Première diffusion\n================');
    this.sub$.next(Math.random());

    this.sub$.subscribe((data) => {
      console.log('Abonné 3 : ', data);
    });

    console.log('Deuxième diffusion\n================');
    this.sub$.next(Math.random());
  }
}
