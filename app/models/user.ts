import DS from 'ember-data';

export default class User extends DS.Model.extend({

}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data' {
  export interface ModelRegistry {
    'user': User;
  }
}
