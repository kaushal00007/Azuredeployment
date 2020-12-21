import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrolluser',
  templateUrl: './enrolluser.component.html',
  styleUrls: ['./enrolluser.component.scss'],
})
export class EnrolluserComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public goBack() {
    this.router.navigate(['admin/options']);
  }
}
