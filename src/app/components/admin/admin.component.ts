import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	private users: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
		this.usersService.getAll()
			.subscribe(users => {
				this.users = users;
				console.log(this.users);
			});
  }

}
