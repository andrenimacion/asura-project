import { Component, Inject, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import Swal from 'sweetalert2';
import interact from 'interactjs';
import 'leader-line';
import { DOCUMENT } from '@angular/common';
declare let LeaderLine: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public heightDiv = screen.height;
  public index;
  constructor(public storage: StorageService , @Inject(DOCUMENT) private document) { }
  // tslint:disable-next-line: variable-name
  public _UserStorage: string;
  public posY;
  public posX;
  public puntoTwo;
  public puntoOne;
  public positionRoundTwoX;
  public positionRoundTwoY;
  public positionRoundOneX;
  public positionRoundOneY;
  public arr = [];
  public valueTagsA;
  public valueTagsB;

  public widDiv;

  ngOnInit() {
    this._UserStorage = localStorage.getItem('user');
  // console.log(this._UserStorage);
  }

  logout() {
    localStorage.clear();
    this.storage.storage('Login', 'ThinkBoard');
    Swal.fire({
      icon: 'success',
      title: 'Vuelve Pronto!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  //#region
  leaderLine(start, end) {
    // tslint:disable-next-line: no-unused-expression
    new LeaderLine(
      start, end , {
        startPlugColor: 'yellowgreen',
        endPlugColor: 'orange',
        gradient: true
      }
    );
  }
  //#endregion

  venetFunc(e) {
    // tslint:disable-next-line: prefer-const
    let posX = e.clientX;
    // tslint:disable-next-line: prefer-const
    let posY = e.clientY;
    document.getElementById('x').innerHTML = `Cordeenada-X: ${posX}`;
    document.getElementById('y').innerHTML = `Cordeenada-Y: ${posY}`;
  }

  cThink() {
    const t = document.getElementById('think-work-area');
    t.style.height = `${screen.height}px`;
    const c = document.createElement('div');
    const btnClose = document.createElement('section');
    btnClose.setAttribute('class', 'btn btn-danger');
    btnClose.style.borderRadius = '100%';
    btnClose.style.width = '25px';
    btnClose.style.height = '25px';
    btnClose.style.boxShadow = '0px 0px 7px rgba(0,0,0,0.7)';

    btnClose.style.display = 'flex';
    btnClose.style.justifyContent = 'center';
    btnClose.style.alignItems = 'center';
    btnClose.style.marginLeft = '-20px';
    btnClose.style.marginTop = '-20px';

    const spanClos = document.createElement('span');
    spanClos.setAttribute('class', 'icon-trash');
    t.appendChild(c);

    const tagName = document.getElementsByTagName('div');
    for (let index = 0; index <= tagName.length - 1; index++) {
       tagName[index].setAttribute('id', `thinks-${index}`);
       const d: any = document.getElementById(`thinks-${index}`);
       d.style.padding = '10px';
       d.style.color = 'gray';
       d.style.border = 'solid 1px yellowgreen';
       d.style.position = 'absolute';
       d.style.background = '#212121';
       d.style.borderRadius = '5px';
       d.style.boxShadow = '5px 5px 10px rgba(0,25,0,0.6)';
       this.moveHandler(d);
       c.appendChild(btnClose);
       btnClose.appendChild(spanClos);
       d.addEventListener('mouseover', () => {
        btnClose.style.display = 'flex';

        btnClose.addEventListener('click', () => {
          t.removeChild(d);
        });
      });
       d.addEventListener('mouseleave', () => {
        btnClose.style.display = 'none';
      });
    }

    c.addEventListener('dblclick', () => {
      c.style.height = 'auto';
      // #region 'Creacion de los objetos'
      const ctArea = document.createElement('textarea');
      const contDiv = document.createElement('section');
      const buttonClose = document.createElement('section');
      const spanClose = document.createElement('span');
      // #endregion
      spanClose.setAttribute('class', 'icon-trash');
      buttonClose.setAttribute('class', 'btn btn-danger');
      spanClose.style.color = '#444444';
      buttonClose.style.width = '27px';
      buttonClose.style.height = '27px';
      buttonClose.style.display = 'flex';
      buttonClose.style.marginLeft = '97%';
      buttonClose.style.justifyContent = 'center';
      buttonClose.style.alignItems = 'center';
      buttonClose.style.borderRadius = '100%';
      // buttonClose.style.backgroundColor = 'yellowgreen';
      ctArea.setAttribute('class', 'form-control');
      ctArea.setAttribute('placeholder', `Escribe un nueva tarea`);
      ctArea.style.backgroundColor = 'transparent';
      ctArea.style.border = 'none';
      ctArea.style.borderBottom = 'solid 0.5px yellowgreen';
      ctArea.style.color = 'yellowgreen';
      contDiv.appendChild(ctArea);
      contDiv.appendChild(buttonClose);
      let tagsTa = document.getElementsByTagName('textarea');

      contDiv.addEventListener('click', () => {

        this.posX = 98.5;
        this.posY = -75;

        const divRoundA = document.createElement('button');
        const divRoundB = document.createElement('a');
        divRoundA.setAttribute('class', 'btn btn-primary');
        contDiv.appendChild(divRoundA);
        contDiv.appendChild(divRoundB);
        //#region 'Estilos divRoundA'
        divRoundA.style.backgroundColor = 'yellowgreen';
        divRoundA.style.width = '15px';
        divRoundA.style.height = '15px';
        divRoundA.style.borderRadius = '100%';
        divRoundA.style.border = 'none';
        divRoundA.style.position = 'absolute';
        divRoundA.style.padding = '0px';
        divRoundA.style.left = this.posX + '%';
        divRoundA.style.marginTop = this.posY + 'px';
        //#endregion
        //#region 'Estilos divRoundB'
        divRoundB.style.backgroundColor = 'orange';
        divRoundB.style.cursor = 'pointer';
        divRoundB.style.width = '15px';
        divRoundB.style.height = '15px';
        divRoundB.style.borderRadius = '100%';
        divRoundB.style.border = 'none';
        divRoundB.style.position = 'absolute';
        divRoundB.style.padding = '0px';
        divRoundB.style.left = 0 + 'px';
        divRoundB.style.marginTop = this.posY + 'px';
        //#endregion

        let a = document.getElementsByTagName('button');
        let ba = document.getElementsByTagName('a');

        for (let t = 0; t <= a.length; t ++) {

          a[t].setAttribute('id', `btns-${t}`);
          var att = document.getElementById(`btns-${t}`);
          att.addEventListener('click', values);

          function values() {
            this.valueTagsA = a[t].getAttribute('id');
            alert('Este es el valor A: ' + this.valueTagsA);
          }
        }

        for (let at = 0; at <= ba.length; at++) {
          ba[at].setAttribute('id', `a-${at}`);
          var btt = document.getElementById(`a-${at}`);
          alert(btt);
          // btt.addEventListener('click', () => {
          //   this.valueTagsB = btt[at].getAttribute('id');
          //   alert('Este es el valor B: ' + this.valueTagsB);
          // });
        }
      });

      buttonClose.appendChild(spanClose);
      c.appendChild(contDiv);
      buttonClose.addEventListener('click', () => {
        console.log('Limpiando');
        contDiv.removeChild(ctArea);
        contDiv.removeChild(buttonClose);
      });

    });
  }

  moveHandler(obj) {
    const position = {x : 0, y : 0};
    interact(obj)
     .resizable({
         // resize from all edges and corners
         edges: {
             left: true,
             right: true,
             bottom: true,
             top: true
         },
         listeners: {
             move(event) {
                 const target = event.target;
                 let x = (parseFloat(target.getAttribute('data-x')) || 0);
                 let y = (parseFloat(target.getAttribute('data-y')) || 0);

                 // update the element's style
                 target.style.width = event.rect.width + 'px';
                 target.style.height = event.rect.height + 'px';


                 // translate when resizing from top or left edges
                 x += event.deltaRect.left;
                 y += event.deltaRect.top;

                 // target.style.webkitTransform = target.style.transform =
                 //     'translate(' + x + 'px,' + y + 'px)';

                 target.setAttribute('data-x', x);
                 target.setAttribute('data-y', y);
                // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height);
             }
         },
         modifiers: [
             // keep the edges inside the parent
             interact.modifiers.restrictEdges({
                 outer: 'parent'
             }),
             // minimum size
             interact.modifiers.restrictSize({
                 min: {
                     width: 50,
                     height: 50
                 }
             })
         ],
         inertia: true
     }).draggable({
       listeners: {
         start(event) {
           console.log(event.type, event.target);
         },
         move(event) {
           position.x += event.dx;
           position.y += event.dy;
           event.target.style.transform =
             `translate(${position.x}px, ${position.y}px)`;
         },
       }
     });
  }



}




