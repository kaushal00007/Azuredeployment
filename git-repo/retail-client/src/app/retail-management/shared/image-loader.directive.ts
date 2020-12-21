import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective implements AfterViewInit {

  @Input() src;

  constructor(private imageRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    const img = new Image();
    img.onload = () => {
      console.log("ngAfterViewInit onload");
      this.setImage("../../../assets/images/icons/"+this.src);
    };

    img.onerror = () => {
      // Set a placeholder image 
      console.log("set default image");
      this.setImage('../../../assets/images/icons/cat_default_bg.png');
    };

    img.src = "../../../assets/images/icons/"+this.src;
    console.log("fun");
  }

  private setImage(src: string) {
    this.imageRef.nativeElement.setAttribute('src', '../../../assets/images/icons/'+src);
  }
}