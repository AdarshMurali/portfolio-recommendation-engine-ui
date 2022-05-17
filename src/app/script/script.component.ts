import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.scss']
})
export class ScriptComponent implements OnInit {

  public skillsArray: Skill[] = [];
  public filteredSkillsArray: Skill[] = [];

  constructor() { }

  ngOnInit(): void {

    this.fillSkill();
  }

  fillSkill(){
    var s1 = new Skill('Raj', 'Java', 8);
    var s2 = new Skill('Rahul', 'Angular', 7);
    var s3 = new Skill('James', 'Html', 5);
    var s4 = new Skill('Sam', 'Css3', 9);
    var s5 = new Skill('Mohit', 'Pyhton', 4);
    this.skillsArray = [];
    this.skillsArray.push(s1, s2, s3, s4, s5);
  }

  convertToLower(){
    this.skillsArray.forEach(function(skill){
        skill.name = skill.name.toLowerCase();
        skill.skill = skill.skill.toLowerCase();
    });
  }

  convertToUpper(){
    this.skillsArray.forEach(function(skill){
      skill.name = skill.name.toUpperCase();
      skill.skill = skill.skill.toUpperCase();
  });
  }

  filterSkill(event : any){
    this.filteredSkillsArray =  this.skillsArray.filter(s => s.level >= event.target.value );
  }

  clear(){
    this.filteredSkillsArray = [];
  }

  initialize(){
    this.fillSkill();
  }


  

}

class Skill {
  name: string;
  skill: string;
  level: number;
  constructor(name: string, skill: string, level: number){
      this.name = name;
      this.skill = skill;
      this.level = level;
  }
}

