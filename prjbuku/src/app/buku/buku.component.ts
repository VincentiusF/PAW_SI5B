import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BukuService } from '../services/buku.service';
import { Buku } from '../models/buku.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrl: './buku.component.css',
  
})
export class BukuComponent implements OnInit, OnDestroy{
  bukuList: Buku[] = [];
  private getBukuSub : Subscription = new Subscription();

  //pagination
  p: number = 1;

  constructor(public bukuService : BukuService){
  }
  ngOnInit(): void {
    this.getBukuSub = this.bukuService.getBukuListener()
    .subscribe((value : Buku[])=>{
      this.bukuList = value;
    });
    this.bukuService.getBuku();
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
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