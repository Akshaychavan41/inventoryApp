import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import {MatDialog} from '@angular/material/dialog';
import { ProductInfoComponent } from '../product-info/product-info.component';
declare var $: any;
@Component({
  selector: 'app-invertory-list',
  templateUrl: './invertory-list.component.html',
  styleUrls: ['./invertory-list.component.css']
})
export class InvertoryListComponent implements OnInit {
  $: any 
  inventoryButton: boolean;
  inventoryForm: FormGroup;
  submitted:boolean;
  message:any;
  url:any;
  imagePath:any;
  file:any
  data: Array<any> = []
  constructor(private formBuilder: FormBuilder, private serviceService : ServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.inventoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price:['', Validators.required],
      uploadedImage:[''],
      
    });
    this.getData()
  }

  getData() {
    this.serviceService.getData().subscribe(
      data => this.convertReturnData(data)
    )
  }

  loadData(data:any) {
    this.serviceService.loadData(data).subscribe(
      data => {
        this.convertReturnData(data)
      }
    )
  }

  convertReturnData (data :any){
    var base64data;
    data.forEach(element => {
      base64data = element.image;
      element.image = 'data:image/jpeg;base64,' + base64data;
    });
  
   
      this.data= data
      console.log(this.data)
  }
  addInventory(){
    this.inventoryButton = true;
  }

  deleteInventory(item) {
    console.log(item);
    const uploadData = new FormData();
    uploadData.append('id', item.id);
    console.log(uploadData.get("id"));
    this.serviceService.deleteData(item.id).subscribe(
      data => {
        this.convertReturnData(data)
      }
    )
  }

  submitInventory(){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.file, this.file.name);
    uploadImageData.append('name', this.inventoryForm.value.name);
    uploadImageData.append('price', this.inventoryForm.value.price) ;
    uploadImageData.append('description',this.inventoryForm.value.description );
    this.loadData(uploadImageData)
    this.data.push(uploadImageData);
  }

  openDialog(item) {
    this.dialog.open(ProductInfoComponent, {
      data: item,
      height: '600px',
      width: '900px',
    });
  }
  onFileChanged(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
   
  }

}
