import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }
  // parametros de modificación para el div-think
  public ThinkParam: any = {
    Width: '',
    Height: '',
    Display: '',
    JustifyContent: '',
    AlignItems: '',
    Border: '',
    BackgroundColor: '',
    FontSize: '',
    FontFam: '',
    FontColor: '',
    BoxShadow: '',
    BorderRadius: '',
    Cursor: '',
    Padding: '',
    Margin: ''
  };

  // parametros de modificación para el text-think
  public ThinkTextParam: any = {
    FontFam: '',
    FontSize: '',
    FontColor: '',
    BoxShadow: '',
    BackgroundColor: ''
  };

  // Crea el div-think
  createThinks() {
    const cr = document.createElement('div');
    cr.setAttribute('class', 'box');
    const workArea = document.getElementById('workArea');
    workArea.appendChild(cr);
    cr.addEventListener('click', () => {
       cr.appendChild(this.createTextThinks());
    });
  }

  // funcion que maneja los parametros para los estilos de los think-text
  createTextThinks() {
    const tAreas = document.createElement('textarea');
    return tAreas;
  }

  // funcion que maneja los parametros para los estilos de los think-box
  style() {
    const obj = document.getElementsByTagName('div');
    for (let i = 0; i <= obj.length; i++) {
      obj[i].setAttribute('id', `Think-${i}`);
      let c = document.getElementById(`Think-${i}`);
      c.style.width =           this.ThinkParam.Width;
      c.style.height =          this.ThinkParam.Height;
      c.style.display =         this.ThinkParam.Display;
      c.style.justifyContent =  this.ThinkParam.JustifyContent;
      c.style.alignItems =      this.ThinkParam.AlignItems;
      c.style.border =          this.ThinkParam.Border;
      c.style.backgroundColor = this.ThinkParam.BackgroundColor;
      c.style.fontSize =        this.ThinkParam.FontSize;
      c.style.color =           this.ThinkParam.FontColor;
      c.style.fontFamily =      this.ThinkParam.FontFam;
      c.style.boxShadow =       this.ThinkParam.BoxShadow;
      c.style.borderRadius =    this.ThinkParam.BorderRadius;
      c.style.cursor =          this.ThinkParam.Cursor;
      c.style.padding =         this.ThinkParam.Padding;
      c.style.margin =          this.ThinkParam.Margin;
    }
  }

  styleTarea() {
    const textArea = document.getElementsByTagName('textarea');
    for (let i = 0; i <= textArea.length; i++) {
      textArea[i].setAttribute('id', `Think-Text-${i}`);
      const tArea = document.getElementById('Think-Text-${i}');
      tArea.style.fontFamily =          this.ThinkParam.FontFam;
      tArea.style.fontSize =            this.ThinkParam.FontSize;
      tArea.style.color =               this.ThinkParam.FontColor;
      tArea.style.boxShadow =           this.ThinkParam.BoxShadow;
      tArea.style.backgroundColor =     this.ThinkParam.BackgroundColor;
    }
  }
}
