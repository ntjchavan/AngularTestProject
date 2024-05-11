import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-interviewedit',
  templateUrl: './interviewedit.component.html',
  styleUrls: ['./interviewedit.component.css']
})
export class IntervieweditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    console.log('by ID',  this.route.snapshot.params["id"]);

    this.route.queryParamMap.subscribe((param:any) => {
      console.log('query param map', param.params.question);
    });
    this.route.queryParamMap.subscribe((param:any) => {
      console.log('query param map1', param.params["question"]);
    });
    this.route.queryParams.subscribe((x:any) => {
      console.log('query param 1', x["question"])
    });
    //or
    console.log('snapshot - 1 '+ this.route.snapshot.queryParamMap.get("question"));
    console.log('snapshot - 2 '+ this.route.snapshot.queryParams["question"]);

  }

  GoToInterview(): void{
    this.router.navigateByUrl('/interview');
  }
}
