import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  asNativeElements,
} from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css'],
})
export class ReproductorComponent {
  @Input() repro = '';
  @ViewChild('audio') miAudio: ElementRef = new ElementRef(asNativeElements);
}
