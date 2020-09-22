import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aboutComponent = false;
  skillsComponent = false;
  projectComponent = false;
  contactComponent = false;
  homeComponent = true;

  loadHomeComponent () {
    this.aboutComponent = false;
    this.skillsComponent = false;
    this.projectComponent = false;
    this.contactComponent = false;
    this.homeComponent = true;
  };

  loadAboutComponent () {
    this.aboutComponent = true;
    this.skillsComponent = false;
    this.projectComponent = false;
    this.contactComponent = false;
    this.homeComponent = false;
  }; 
  
  loadSkillsComponent () {
    this.aboutComponent = false;
    this.skillsComponent = true;
    this.projectComponent = false;
    this.contactComponent = false;
    this.homeComponent = false;
  };

  loadProjectsComponent () {
    this.aboutComponent = false;
    this.skillsComponent = false;
    this.projectComponent = true;
    this.contactComponent = false;
    this.homeComponent = false;
  };

  loadContactComponent () {
    this.aboutComponent = false;
    this.skillsComponent = false;
    this.projectComponent = false;
    this.contactComponent = true;
    this.homeComponent = false;
  };
}
