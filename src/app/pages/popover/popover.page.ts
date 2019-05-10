import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  public data: string;
  public addresses: string[];

  constructor(private navParams: NavParams, private popoverController: PopoverController) { }

  ngOnInit() {
    this.data = this.navParams.get('data');
    this.addresses = this.navParams.get('addressArray')
  }

  closePopover() {
    this.popoverController.dismiss()
  }

}
