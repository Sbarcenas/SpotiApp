import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReleases: any[] = []
  constructor(private spoService: SpotifyService) { 
      
  }

  ngOnInit() {
    this.spoService.getNewReleases(30).subscribe((res:any) => {
      this.newReleases = res
      console.log(res)
    })
  }

}
