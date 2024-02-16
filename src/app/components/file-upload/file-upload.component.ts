import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Output('onFileSelect') onFileSelect: EventEmitter<string> =
    new EventEmitter();

  @ViewChild('fileInput', { static: true }) fileInput!: ElementRef;

  fileName: string | undefined;

  constructor() {}

  selectFile() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: File[]) {
    this.fileName = event[0]?.name;

    if (this.fileName) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const file = e.target?.result as string;
        this.onFileSelect.emit(file);
      };

      // Read the file as a Data URL
      reader.readAsDataURL(event[0]);
    }
  }
}
