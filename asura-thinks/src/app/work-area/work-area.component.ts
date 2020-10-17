import { Component, OnInit } from '@angular/core';
import { StyleService } from '../Services/style.service';
import { promise } from 'protractor';
import interact from 'interactjs';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.component.html',
  styleUrls: ['./work-area.component.css']
})
export class WorkAreaComponent implements OnInit {

  constructor( public st: StyleService ) { }

  ngOnInit() {
    this.parametros();
    console.log('work funcionando');
  }

  parametros() {

    this.st.ThinkParam = {
      Width:           '150px',
      Height:          '70px',
      Display:         'flex',
      JustifyContent:  '',
      AlignItems:      '',
      BackgroundColor: '#444444',
      FontSize:        '',
      fontFam:         '',
      fontColor:       'white',
      BoxShadow:       '',
      Cursor:          'pointer',
      Padding:         '10px'
    };

    this.st.ThinkTextParam = {
      FontFam:          '',
      FontSize:         '9pt',
      FontColor:        'white',
      BoxShadow:        '',
      BackgroundColor:  'transparent'
    };
  }


}
