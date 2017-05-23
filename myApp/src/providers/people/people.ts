import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleProvider {

  constructor(public http: Http) {
    console.log('Hello PeopleProvider Provider');
  }

  people = [
  {
    gender: 'male',
    name: {
	  title: 'mr',
	  first: 'john',
	  last: 'smith'
    },
	email: 'john.smith@example.com',
	phone: '123456789',
	picutre: {
	  large: 'https://randomuser.me/api/portraits/men/36.jpg',
	  medium: 'https://randomuser.me/api/portraits/med/men/36.jpg',
	  thumbnail: 'https://randomuser.me/api/portraits/thumb/men/36.jpg'
	}
  },
  {
    gender: 'male',
    name: {
	  title: 'mr',
	  first: 'mike',
	  last: 'ross'
    },
	email: 'mike.ross@example.com',
	phone: '123456789',
	picutre: {
	  large: 'https://randomuser.me/api/portraits/men/31.jpg',
	  medium: 'https://randomuser.me/api/portraits/med/men/31.jpg',
	  thumbnail: 'https://randomuser.me/api/portraits/thumb/men/31.jpg'
	}
  },
  {
    gender: 'female',
    name: {
	  title: 'ms',
	  first: 'alice',
	  last: 'ken'
    },
	email: 'alice.ken@example.com',
	phone: '123456789',
	picutre: {
	  large: 'https://randomuser.me/api/portraits/women/31.jpg',
	  medium: 'https://randomuser.me/api/portraits/med/women/31.jpg',
	  thumbnail: 'https://randomuser.me/api/portraits/thumb/women/31.jpg'
	}
  }
  ];
  
  getPeople() {
    return this.http.get('https://randomuser.me/api/?results=3')
	.map(res=>res.json());
  }
}
