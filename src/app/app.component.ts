import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  DropdownDatas = [ 'A', 'B', 'C', 'D', 'E'];
  DropdownDatas1 = [ 'A', 'B', 'C', 'D', 'E'];
  DropdownDatas2 = [ 'A', 'B', 'C', 'D', 'E'];

  DropdownForm: FormGroup;
  hideitem;
  // i = this.hideitem

  constructor(private fb: FormBuilder){
    this.DropdownForm = this.fb.group({
      dropdown1: ['', Validators.required],
      dropdown2: ['', Validators.required],
      dropdown3: ['', Validators.required],
    })
  }

  onDropdownSelected(i: number){
    this.DropdownDatas.splice(i, 0) // slice //pop
    // this.DropdownDatas1.splice(i, 1)
    this.DropdownDatas1.splice(i, 0)
    this.DropdownDatas2.splice(i, 0)
    this.hideitem = i;

  }

  onSubmit(){
    console.log(this.DropdownForm.value);
    this.DropdownForm.reset();

  }
}
