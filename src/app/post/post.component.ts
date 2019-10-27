import {Component} from '@angular/core'

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {

    now = new Date()

    // arr = [1, 1, 2, 3, 5, 8, 13]
    //
    // objs = [
    //     {
    //         title: 'Post 1', author: 'Vitalii', comments: [
    //             {name: 'Max', text: 'lorem 1'},
    //             {name: 'Max', text: 'lorem 2'},
    //             {name: 'Max', text: 'lorem 3'},
    //         ]
    //     },
    //     {
    //         title: 'Post 2', author: 'Nastya', comments: [
    //             {name: 'Max 3', text: 'lorem 1'},
    //             {name: 'Max 3', text: 'lorem 2'},
    //             {name: 'Max 3', text: 'lorem 3'},
    //         ]
    //     }
    // ]

    // title = 'initial'
    //
    // toggle = false

    // toggleBackground = false

    // onInput(event: any) {
    //     this.title = event.target.value
    // }

//     title = 'My new post title'
//
//     inputValue = ''
//     // number = 12
//     // img = 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
//
//     constructor() {
//         // setTimeout(() => {
//         //   console.log('Timeout')
//         //     this.img = 'https://res.cloudinary.com/teepublic/image/private/s--eF-l8J9P--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1539378444/production/designs/3308909_0.jpg'
//         // }, 5000)
//     }
//
//     onInput(event: KeyboardEvent) {
//         this.inputValue = ( <HTMLInputElement> event.target).value
//     }
//
//     onClick() {
//         console.log('Click')
//     }
//
//     onBlur(str: string) {
//         this.inputValue = str
//     }
}


