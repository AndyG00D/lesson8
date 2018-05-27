import { Component, Input, OnInit} from '@angular/core';
import { Geo } from '../../../core/models/user';

@Component({
  selector: 'app-gmap-article',
  templateUrl: './gmap-article.component.html',
  styleUrls: ['./gmap-article.component.scss']
})
export class GmapArticleComponent implements OnInit {
  gmapURI: string;
  @Input() geo: Geo;

  constructor() {
  }

  ngOnInit() {
    this.gmapURI = 'https://maps.google.com/?hl=ru&q=' + this.geo.lat + ',' + this.geo.lng;
  }
}
