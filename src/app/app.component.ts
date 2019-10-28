import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

export interface Post {
    title: string
    text: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
    p: Promise<string> = new Promise<string>(resolve => {
        setTimeout(()=> {
            resolve('Promise resolve')
        }, 4000)
    })

    date$: Observable<Date> = new Observable<Date>(obs =>{
        setInterval(() => {
            obs.next(new Date())
        }, 1000)
    })

    // date: Date
    //
    ngOnInit(): void {
        // this.date$.subscribe( date => {
        //     this.date = date
        // })
    }
}

// export class AppComponent {
//
//     search = ''
//     searchField = 'title'
//
//     posts: Post[] = [
//         {title:'Beer', text:'The best 1beer in the world'},
//         {title:'Bread', text: 'The best 1bread in the world'},
//         {title:'Js', text:'The best 1language in the world'}
//     ]
//
//     addPost() {
//         this.posts.unshift({
//             title: 'Angular new post',
//             text:'the most unreal post'
//         })
//     }
// }
//


// export class AppComponent {
    // e: number = Math.E
    //
    // str: string = 'Hello World'
    //
    // date: Date = new Date()
    //
    // float: number = 0.42
    //
    // obj = {
    //     a: 1,
    //     b : {
    //         c: 2,
    //         d: {
    //             e: 3,
    //             f: 4
    //         }
    //     }
    // }
// }
