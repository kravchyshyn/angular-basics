import {Component, OnInit} from '@angular/core';
import {interval, Subscription, Observable, observable, Subject} from 'rxjs'

// import {map, filter} from 'rxjs/operators'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})


export class AppComponent {
    sub: Subscription
    // stream$: Subject<void> = new Subject<void>()
    stream$: Subject<number> = new Subject<number>()

    counter = 0

    constructor() {
        this.sub = this.stream$.subscribe((value) => {
            console.log('Subscribe', value)
        })
    }

    stop() {
        this.sub.unsubscribe();
    }

    next() {
        this.counter++
        this.stream$.next(this.counter)
    }
}

// export class AppComponent {
//     sub: Subscription
//
//     constructor() {
//         const stream$ = new Observable(observer => {
//             setTimeout(()=> {
//                 observer.next(1)
//             }, 1500)
//
//             setTimeout(()=> {
//                 observer.complete()
//             }, 1900)
//
//             setTimeout(()=> {
//                 observer.error('Something went wrong')
//             }, 2000)
//
//
//             setTimeout(()=> {
//                 observer.next(2 )
//             }, 2500)
//         })
//
//         this.sub = stream$
//             .subscribe(value => { console.log(`Value ${value}`)},
//                 (error) => console.log('error', error),
//                 () => console.log('completed!')
//         )
//     }
//
//     stop() {
//         this.sub.unsubscribe();
//     }
// }


// export class AppComponent {
//
//     sub: Subscription
//
//     constructor() {
//
//         const intervalStream$ = interval(1000)
//
//         this.sub = intervalStream$
//             .pipe(
//                 filter((value) => value % 2 === 0),
//                 map((value)=> `Mapped value ${value}`)
//             )
//             .subscribe((value => {
//                 console.log(value)
//             }))
//
//     }
//
//     stop() {
//         this.sub.unsubscribe();
//     }
// }