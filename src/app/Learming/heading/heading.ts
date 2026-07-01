import { Component,  EventEmitter,  Input ,Output} from '@angular/core';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.html',
  styleUrl: './heading.css',
})
export class Heading {
    //@Input() title='Title Default';
    @Input() user:User | undefined;

    @Output() success:EventEmitter<boolean>=new EventEmitter(); 

    onSubmit(){
    this.success.emit(true);
}
}


