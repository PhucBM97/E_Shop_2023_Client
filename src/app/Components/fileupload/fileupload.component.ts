import { Component } from '@angular/core';
import { FileService } from 'src/app/Services/file.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {
  constructor(private fileUploadService : FileService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileUploadService.uploadFile(file).subscribe(
      response => {
        console.log('File uploaded successfully', response);
      },
      error => {
        console.error('Error uploading file', error);
      }
    );
  }
}
