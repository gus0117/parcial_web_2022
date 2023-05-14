import { Component, OnInit } from '@angular/core';
import { Youtube } from 'src/app/models/youtube';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  busqueda: string;
  tipoBusqueda: string;

  video: Youtube;
  resultados: Array<Youtube>;

  constructor(private youtubeService: YoutubeService ) { 
    this.busqueda = "";
    this.tipoBusqueda = "video";
    this.video = new Youtube();
    this.resultados = new Array<Youtube>();
  }

  ngOnInit(): void {
  }

  public realizarBusqueda(): void{
    this.resultados = new Array<Youtube>();
    this.youtubeService.getYoutubeResult(this.busqueda, this.tipoBusqueda).subscribe(
      (result) => {
        result.results.forEach( (element:any) => {
          let aux = new Youtube(element['id'], element['title'], element['url'], element['channel']['name'], element['channel']['icon'], element['uploadedAt'], element['duration_formatted'], element['views']);
          this.resultados.push(aux)
        });
      },
      error => {
        console.log("Error en la petición", error)
      }
    )
  }

  public limpiarBusqueda():void {
    this.busqueda = "";
    this.tipoBusqueda = "video";
    this.video = new Youtube();
    this.resultados = new Array<Youtube>();
  }

  public mostrarInfo(id: string): void {
    this.video = new Youtube();
    this.video = this.resultados.find( video => video.id === id) as Youtube
    console.log(this.video)
  }

}
