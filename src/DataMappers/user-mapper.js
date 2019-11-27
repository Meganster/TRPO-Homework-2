import { database } from '../config/Fire.js';

export class UserMapper {
    static get(id) {
        return database.ref('megangster/user/' + id).once('value').then(data => data.val());
    }
    static set(user) {
        return database.ref('megangster/user').push().set(user);
    }
}
