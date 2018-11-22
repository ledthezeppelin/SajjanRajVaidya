import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.css']
})
export class SocialBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  socialData = [
    {id: "youtube", url:"https://www.youtube.com/user/sajjanrajvaidya", iconImage:"assets/pictures/youtube.png"},
    {id: "spotify", url:"https://open.spotify.com/artist/1deQzOQwArAsUgm2WdjtyI", iconImage:"assets/pictures/spotify.png"},
    {id: "itunes", url:"https://itunes.apple.com/us/artist/sajjan-raj-vaidya/1206974063", iconImage:"assets/pictures/itunes.png"},
    {id: "soundcloud", url:"https://soundcloud.com/sajjanrajvaidya", iconImage:"assets/pictures/soundcloud.png"},
    {id: "instagram", url:"https://www.instagram.com/SajjanRajVaidya/", iconImage:"assets/pictures/instagram.png"},
    {id: "facebook", url:"https://www.facebook.com/sajjanrajvaidya/", iconImage:"assets/pictures/facebook.png"},
    {id: "twitter", url:"https://twitter.com/SajjanRajVaidya", iconImage:"assets/pictures/twitter.png"}
  ]

}
