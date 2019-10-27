import {Component} from "@angular/core";

@Component({
  selector: 'app-post4',
  template: `
      <div class='post4'>
          <h2> Hello from post 4</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, doloribus!</span>
      </div>
  `,
  styles: [`
    .post4{
        border: 1px dotted #cccc;
        width: 500px;
        padding: 1rem;
    }
    span {
        font-size: 1rem;
    }
  `]
})
export class Post4Component {}
