import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CancionesService {
  private srcUrl:String='';

  getUrl():String{
    return this.srcUrl;
  }
  setUrl(url:String){
    this.srcUrl=url;
  }
}
