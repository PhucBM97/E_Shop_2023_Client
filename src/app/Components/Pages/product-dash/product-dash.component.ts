import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/Models/Brand.model';
import { CategoryDTO } from 'src/app/Models/CategoryDTO.model';
import { ProductDetailDTO } from 'src/app/Models/ProductDetailDTO.model';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { NgToastService } from 'ng-angular-popup';
import { OrderDetail } from './../../../Models/OrderDetail.model';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.scss']
})
export class ProductDashComponent {

  isUpdate: boolean = false;
  selectedImages: File[]= [];
  //selectedFiles: File[] = [];
  listFileName: string[] = [];
  brands: Brand[] = [];
  categories: CategoryDTO[] = [];
  products: ProductDetailDTO[] = [];
  numbers: number[] = [];
  pageSize: number = 5;
  crrPage: number = 1;
  pageCount: number = 0;
  productForm!: FormGroup;
  @ViewChild('closeModal') closeModal!: ElementRef
  
  constructor(
    private product: ProductService,
    private category: CategoryService,
    private brand: BrandService,
    private fb: FormBuilder,
    private toast: NgToastService
  ) {}


  ngOnInit(){
    this.productForm = this.fb.group({
      productId:[0],
      productName: [''],
      productPrice: [''],
      productDescription: [''],
      productCategory: [''],
      productBrand: [''],
      images: [''] // cần thêm cái này
    })

    this.getProducts(this.crrPage, this.pageSize);

    // dropdown list
    this.getCategories();
    this.getBrands();
  }

  // onFileChange(event: any) {

  //     // this.selectedFiles = event.target.files;
  //     // for (let i = 0; i < event.target.files; i++) {
  //     //   this.selectedFiles.push(event.target.files[i]);
  //   this.selectedFiles.push(event.target.files[0]);
  //   this.listFileName.push(event.target.files[0].name);

  // }
  onSelectImages(event: any): void {
    this.selectedImages.push(event.target.files[0]);
    this.listFileName.push(event.target.files[0].name);
    console.log(this.listFileName,'listttttttttt file nameeeeeeeeeeeeee');
    
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('productId', this.productForm.value.productId);
    formData.append('productName', this.productForm.value.productName);
    formData.append('productDescription', this.productForm.value.productDescription);
    formData.append('productPrice', this.productForm.value.productPrice);
    formData.append('productCategory', this.productForm.value.productCategory);
    formData.append('productBrand', this.productForm.value.productBrand);

    for (let i = 0; i < this.selectedImages.length; i++) {
      formData.append('images', this.selectedImages[i]);
    }
    this.product.createProduct(formData).subscribe({
      next:(res: any) => {
        this.closeModal.nativeElement.click();
        this.toast.success({detail: "SUCCESS", summary: res.message, duration:2000});
        this.productForm.reset(this.productForm.value);
        this.listFileName = [];
        this.selectedImages = [];
      },
      error: (err: any) => {
        this.toast.error({detail: "ERROR", summary: err.error?.message, duration: 2000});
      }
  });
  }
  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('productName',this.productForm.value.productName);
  //   formData.append('productPrice', this.productForm.value.productPrice);
  //   formData.append('productDescription', this.productForm.value.productDescription);
  //   formData.append('productCategory', this.productForm.value.productCategory);
  //   formData.append('productBrand', this.productForm.value.productBrand);
  //   for (let i = 0; i < this.selectedFiles.length; i++) {
  //     formData.append('files', this.selectedFiles[i]);
  //   }

    
  //   this.http.post<any>(`${environment.apiUrl}Product/AddProduct`, {files: formData, entity: this.productForm.value}).subscribe(
  //     response => {
  //       console.log('Files uploaded successfully', response);
  //     },
  //     error => {
  //       console.error('Error uploading files', error);
  //     }
  //   );
  // }
  
  getProducts(currentPage: number, PageSize: number){
    this.product.getAll(currentPage, PageSize)
    .subscribe({
      next: (res) =>{
        this.products = res.products;
        this.crrPage = res.currentPage;
        this.pageCount = res.pageCount;
        this.numbers = Array(this.pageCount).fill(0).map((x,i)=>i);
      },
      error: (err) => {

      }
    })
  }

  getCategories(){
    this.category.getCategories()
    .subscribe({
      next: (res) => {
        this.categories = res;
        console.log(this.categories, 'categoriessss');
        
      },
      error: (err) => {

      }
    })
  }

  getBrands(){
    this.brand.getBrands()
    .subscribe({
      next: (res) => {
        console.log(res, 'brandsssssssssssssssssssssssssss');
        
        this.brands = res;
      },
      error: (err) => {

      }
    })
  }

  checkIsUpdate(value : boolean){
    this.isUpdate = value;
  }

  deleteProduct(proId: number, proName: string){
    let check = confirm("Bạn có chắc muốn xóa sản phẩm: "+ proName);

    if(check){
      this.product.deleteProduct(proId)
      .subscribe({
        next: (res) => {
          this.toast.success({detail: "SUCCESS", summary: res.message, duration:2000});
          this.getProducts(this.crrPage, this.pageSize);
          
        },
        error: (err) => {
          this.toast.error({detail: "ERROR", summary: err.error?.message, duration:2000})
        }
      })
    }
  }
}
