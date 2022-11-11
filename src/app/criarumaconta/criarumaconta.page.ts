import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-criarumaconta',
  templateUrl: './criarumaconta.page.html',
  styleUrls: ['./criarumaconta.page.scss'],
})
export class CriarumacontaPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
  }

}
