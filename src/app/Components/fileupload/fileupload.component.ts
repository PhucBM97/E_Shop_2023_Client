import { HttpClient } from '@angular/common/http';
import { Component, afterNextRender } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileService } from 'src/app/Services/file.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {
  //constructor(private fileUploadService : FileService) {}

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   this.fileUploadService.uploadFile(file).subscribe(
  //     response => {
  //       console.log('File uploaded successfully', response);
  //     },
  //     error => {
  //       console.error('Error uploading file', error);
  //     }
  //   );
  // } 1 file


  // nhiều file
  // selectedFiles: File[] = [];

  // constructor(private http: HttpClient) { }

  // onFileChange(event: any) {
  //   this.selectedFiles.push(event.target.files[0]);
  // }

  // onSubmit() {
  //   const formData = new FormData();
  //   for (let i = 0; i < this.selectedFiles.length; i++) {
  //     formData.append('files', this.selectedFiles[i]);
  //   }
  //   formData.append('productName','adidas nmd');
  //   this.http.post<any>(`${environment.apiUrl}File`, formData).subscribe(
  //     response => {
  //       console.log('Files uploaded successfully', response);
  //     },
  //     error => {
  //       console.error('Error uploading files', error);
  //     }
  //   );
  // }
  objectForm: FormGroup;
  selectedImages!: File[];

  constructor(private fb: FormBuilder, private file: FileService) {
    this.objectForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      images: ['']
    });
  }

  onSelectImages(event: any): void {
    this.selectedImages = event.target.files;
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('name', this.objectForm.value.name);
    formData.append('description', this.objectForm.value.description);
    for (let i = 0; i < this.selectedImages.length; i++) {
      formData.append('images', this.selectedImages[i]);
    }
    this.file.createObject(formData).subscribe({
      next:(res: any) => {
        console.log('Object created successfully:', res);
      },
      error: (err: any) => {
        console.error('Error creating object:', err);
      }
  });
  }
}
