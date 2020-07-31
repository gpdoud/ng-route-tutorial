import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {

  nbr: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nbr = +this.route.snapshot.params.nbr;
  }

}
