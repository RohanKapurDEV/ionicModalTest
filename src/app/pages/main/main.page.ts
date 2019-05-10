import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Modal1Page } from '../modal1/modal1.page';
import { PopoverPage } from '../popover/popover.page';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public data: string;
  public address: string = '0xFb67130F2F6C1E9909b51f8698E4b5be7282F251';

  public addressArray: string[] = ['0xFb67130F2F6C1E9909b51f8698E4b5be7282F251', '0xcDe3Ef6CACF84Ad36d8A6eCcc964f25351296D36'];

  constructor(private modalController: ModalController, private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: Modal1Page,
      componentProps: {
        data: this.data,
        addressString: this.address,
        addressArray: this.addressArray
      }
    });
    return await modal.present();
  }

  async openPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      componentProps: {
        data: this.data,
        addressString: this.address,
        addressArray: this.addressArray
      },
      event: event
    });
    return await popover.present();
  }

}
