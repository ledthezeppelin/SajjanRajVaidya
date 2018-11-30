import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  closeResult: string;

  currentTeamObject;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  teamMembers = [
    {id:1, name: "Arogya Khadka", title: "Manager", description: "I manage and what not", photoURL: "/assets/team/arogya.png"},
    {id:2, name: "Abhinav Bhatta", title: "Web Developer", description: "I make website and what not", photoURL: "/assets/team/abhinav.png"},
    {id:3, name: "Sharif Shrestha", title: "Camera", description: "I take photos and what not", photoURL: "/assets/team/sharif.png"},
    {id:4, name: "Nurbu Lama", title: "Video Editor", description: "I make videos and what not", photoURL: "/assets/team/nurbu.png"}
  ]

  
  showTeamInfo(content, info){
    this.currentTeamObject = info;
    this.modalService.open(content, { windowClass: 'dark-modal', centered: true });

  }
 
  
}

