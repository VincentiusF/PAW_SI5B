import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrl: './buku.component.css'
})
export class BukuComponent {
  simpanBuku(form : NgForm){
    console.log("Pengujian Klik")
    console.log(form.value.judul);
    console.log(form.value.penulis);
    // console.log(form.value.genre1);
  }
}
