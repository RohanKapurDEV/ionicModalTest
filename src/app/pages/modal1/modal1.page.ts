import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.page.html',
  styleUrls: ['./modal1.page.scss'],
})
export class Modal1Page implements OnInit {

  public data: string;
  public array: string[];

  constructor(private navParam: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.data = this.navParam.get('data');
    this.array = this.navParam.get('addressArray');
  }

  closeModal() {
    this.modalController.dismiss()
  }

}
