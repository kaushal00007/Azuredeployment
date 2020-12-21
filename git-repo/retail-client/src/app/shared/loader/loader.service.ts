import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // tslint:disable-next-line:variable-name
  private _toggleLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // tslint:disable-next-line:variable-name
  private _changeLoaderImage: BehaviorSubject<string> = new BehaviorSubject<string>('assets/images/loader.gif');

  constructor() {
  }

  public show() {
    this._toggleLoader.next(true);
  }

  public dismiss() {
    this._toggleLoader.next(false);
  }

  public setLoaderImage(image: string) {
    this._changeLoaderImage.next(image);
  }

  get toggleLoader(): BehaviorSubject<boolean> {
    return this._toggleLoader;
  }

  get changeLoaderImage(): BehaviorSubject<string> {
    return this._changeLoaderImage;
  }
}
