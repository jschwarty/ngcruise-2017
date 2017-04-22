import { Injectable } from '@angular/core';

@Injectable()
export class RecruitService {
  private nicknames = [
    'Dread Pirate Roberts',
    'Stormborn'
  ];

  nicknameInUse(nickname) {
    return this.nicknames
      .map(value => value.toLowerCase())
      .includes(nickname.toLowerCase());
  }

  save(recruit) {
    console.log(recruit);
  }

  get() {
    return {
      name: 'Jack Sparrow',
      nickname: 'Captain Jack',
      port: 'Tortuga Island'
    };
  }
}
