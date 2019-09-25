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
    {id: "youtube", url:"https://www.youtube.com/user/sajjanrajvaidya", iconImage:"assets/pictures/youtube.png", imgAlt:"Sajjan Raj Vaidya YouTube"},
    {id: "spotify", url:"https://open.spotify.com/artist/1deQzOQwArAsUgm2WdjtyI", iconImage:"assets/pictures/spotify.png", imgAlt:"Sajjan Raj Vaidya Spotify"},
    {id: "itunes", url:"https://itunes.apple.com/us/artist/sajjan-raj-vaidya/1206974063", iconImage:"assets/pictures/itunes.png", imgAlt:"Sajjan Raj Vaidya iTunes"},
    {id: "soundcloud", url:"https://soundcloud.com/sajjanrajvaidya", iconImage:"assets/pictures/soundcloud.png", imgAlt:"Sajjan Raj Vaidya SoundCloud"},
    {id: "instagram", url:"https://www.instagram.com/SajjanRajVaidya/", iconImage:"assets/pictures/instagram.png", imgAlt:"Sajjan Raj Vaidya Instagram"},
    {id: "facebook", url:"https://www.facebook.com/sajjanrajvaidya/", iconImage:"assets/pictures/facebook.png", imgAlt:"Sajjan Raj Vaidya Facebook"},
    {id: "twitter", url:"https://twitter.com/SajjanRajVaidya", iconImage:"assets/pictures/twitter.png", imgAlt:"Sajjan Raj Vaidya Twitter"}
  ]

}
