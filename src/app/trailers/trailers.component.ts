import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
//import * as $ from 'jquery';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})
export class TrailersComponent {

  onClick(){ 
    Swal.fire({
      width: '50rem',
      heightAuto: true,
      background: 'transparent',
      html: '<iframe width="100%" height="500" src="https://www.youtube.com/embed/kqYuyACFVkE?autoplay=1" frameborder="1" style="background: #000" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      backdrop: '#000000dc',
      showConfirmButton: false
    })
  }
  
  
 
}
