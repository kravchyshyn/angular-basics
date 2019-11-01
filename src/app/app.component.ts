import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import {ModalComponent} from "./modal/modal.component";
import {RefDirective} from "./ref.directive";
import {Meta, Title} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @ViewChild(RefDirective, {static: false}) refDir: RefDirective

    constructor(
        private resolver: ComponentFactoryResolver,
        private title: Title,
        private meta: Meta
    ) {
        this.title.setTitle('App Component Page!')
        this.meta.addTags([
            {name:'keywords', content:'angular, google, appcomponet'},
            {name: 'description', content: 'My angular application'}
        ])
    }

    showModal() {
        const modelFactory = this.resolver.resolveComponentFactory(ModalComponent)
        this.refDir.containerRef.clear()

        const component = this.refDir.containerRef.createComponent(modelFactory)

        component.instance.title = 'My custom Title'
        component.instance.close.subscribe(() => {
            this.refDir.containerRef.clear()
        })
    }
}

