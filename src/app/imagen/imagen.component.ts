import { trigger, state, style, transition, animate,keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css'],

  animations: [
    trigger('entert',[

      
      transition(':enter', [       
        animate('5s ease-in-out', keyframes([ 
         
          style({transform: 'rotate(3deg)',
          'transform-origin': 'center bottom',}),
          style({transform: 'rotate(-3deg)'}),
          style({transform: 'rotate(3deg)'}),
        ]))
      ]),    
    
    ])
  ]
  
})
export class ImagenComponent implements OnInit {
   
  show: boolean = true;
  constructor() { }
    
  ngOnInit(): void {
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      } ,1);
    } ,5000);
  }
 

}
