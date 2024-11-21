import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BukuService } from '../services/buku.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrl: './buku.component.css',
  
})
export class BukuComponent {
  constructor(public bukuService : BukuService){
  }

  simpanBuku(form : NgForm){

    if(form.invalid){
      console.log("Tidak Valid");
      alert("Data tidak valid");
      return;
    }

    let genres: string[] =[];

    if (form.value.genre1==true){
      genres.push("Biografi")
    }

    if(form.value.genre2==true){
      genres.push("Pendidikan")
    }

    if(form.value.genre3==true){
      genres.push("Lainnya")
    }
    console.log("Pengujian Klik")
    console.log(form.value.judul);
    console.log(form.value.penulis);
    console.log(genres);

    this.bukuService.addBuku(form.value.judul, form.value.penulis,genres);

  }
}