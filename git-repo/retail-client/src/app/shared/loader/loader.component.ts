import {Component, OnInit} from '@angular/core';
import {LoaderService} from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  shouldShow = false;
  loaderImage: string;

  constructor(private loaderService: LoaderService) {
    this.loaderService.changeLoaderImage.subscribe(image => {
      this.loaderImage = image;
    })
    this.loaderService.toggleLoader.subscribe(show => {
      this.shouldShow = show;
    });
  }

  ngOnInit() {
  }
}
