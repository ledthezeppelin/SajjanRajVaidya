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

  nurbuDesc = "My name is Nurbu Lama. I’m Nepali, but I live in New York City now.  Ever since I got my first camera I knew in an instant that Photography is my calling that will undoubtedly dive me insane someday. It is my passion, an output of my inner voice, the one thing that keeps me sane. "
  +"I do not have a “methodology” or a sophisticated cameras per say, I let emotions lead the way and consider myself merely a muse to my emotions.I try to portray what is authentic to me rather to the relevancy of my final product. I photograph what I feel, and I feel what I photograph. I am also into photography for the way it shapes me.  "
  +"I don’t strive for perfection but for the emotion it gives to me and others. I’ve been fortunate enough that this method has created pieces that has resonated with other people. "
  +"Also, fun fact: The way I first met Sajjan was almost as spontaneous as my art form. I’m glad that I accidentally ran into him at the restaurant -our first conversation being our shared love for art.";
  
  sharifDesc = "My name is Sharif Shrestha and my job is to oversee the Public Relations and Marketing. I consider myself a polymath with interests ranging from art forms ,such as photography and dance, to corporate sectors such as Pharmaceuticals and finance. But a common thread that ties my experiences and interests is my passion to create "
  +"value in the lives of people and my belief in growth that stems from human relationships. Afterall, the way how any artist or entity integrates their story into the delivery determines their relationship with the audience and their potential for growth. This idiosyncrasy is exactly what i am willing to bring to the table to help Sajjan further his story to the world! ";
  
  abhinavDesc = "Hi there! My name is Abhinav Bhatta and I'm in charge of keeping this website afloat! I am originally from Kathmandu, Nepal, currently living in the Boston area. I'm also a Computer Science grad from UMaine, Orono. Among the myriad of hobbies I like to dabble in, some of my passionate encounters definitely stem from my love of music. While I'm not on my computer, "
  +"tightening the nuts and bolts of this website, I'm usually playing some guitar, coming up with some electronic beats using the Machine Mikro MK3 or having a go at Ultimate Team in FIFA. I love technology and I love music, and having known Sajjan since high school, I've been fortunate enough for this incredible opportunity to be a part of such an incredible team of talented young people! ";
 
  arogyaDesc= "Hi, I am Arogya, a Boston based Nepali music enthusiast. My love for Nepali music started after I left Nepal as a teenager because music was the only thing that brought me closer to my first home. One of the things I’ve learned growing up in a multicultural environment was the importance of core values and how they can shape an individual to be their own authentic self. As the artist manager at team Sajjan Raj Vaidya, " 
  + "I bring this perspective to make sure that we, as a team, adhere to our core values, and comply with our goals so that we can uphold our performance standards and authenticity, primarily with growth and development in mind. Being the only female in the team, I also bring the heart and feminine touch to our projects, creating more room for Sajjan to think creatively and critically. If you have any questions regarding booking information, please feel free to reach out to me at team@sajjanrajvaidya.com";
  
  teamMembers = [
    {id:1, name: "Arogya Khadka \| Manager",  description: this.arogyaDesc, photoURL: "/assets/team/arogya.jpg"},
    {id:2, name: "Abhinav Bhatta",  description: this.abhinavDesc, photoURL: "/assets/team/abhinav.png"},
    {id:3, name: "Sharif Shrestha", description: this.sharifDesc, photoURL: "/assets/team/sharif.png"},
    {id:4, name: "Nurbu Lama", description: this.nurbuDesc, photoURL: "/assets/team/nurbu.png"}
  ]
  
  showTeamInfo(content, info){
    this.currentTeamObject = info;
    this.modalService.open(content, { windowClass: 'dark-modal', centered: true });

  }
 
}

