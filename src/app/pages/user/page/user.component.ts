import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../login/domain/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public users: User[] = [];
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe({
      next: ({ users }) => {
        this.users = users;
      },
    });
  }

  public onBack(): void {
    this._router.navigate(['../']);
  }
}
