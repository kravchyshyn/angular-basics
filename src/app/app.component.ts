import {Component} from '@angular/core';

export interface Post {
    title: string
    text: string
    id?: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts: Post[] = [
        // {title: 'Хочу вивчити Angular компоненти', text: 'Я все ще вчу компоненти', id: 1},
        {title: 'Наступний блок', text: 'Буде про директиви та про пайпи бла бла блаі', id: 2}
    ]

    updatePosts(post: Post) {
        this.posts.unshift(post)
    }

    removePost(id: number) {
        this.posts = this.posts.filter(post => post.id !== id)
    }

}
