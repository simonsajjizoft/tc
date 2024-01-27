import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "TC Portal | SchoolWizard"
  assigneeDropdown;
  events: string[] = [];
  opened: boolean = true;
  mode = new FormControl('side' as MatDrawerMode);


  constructor(public router:Router,public activatedRoute:ActivatedRoute) { 
    
  }

  ngOnInit() {
   this.router.navigate(['/packages']);
   console.log(this.router)
  }

  navigate(route){
    this.router.navigate([route])
  }


}
