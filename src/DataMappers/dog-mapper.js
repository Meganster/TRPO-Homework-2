import { database } from '../config/Fire.js';

export class DogMapper {
    static get(id) {
        return database.ref('megangster/dog/' + id).once('value').then(data => data.val());
    }
    static create(dog) {
        return database.ref('megangster/dog').push().set(dog);
    }
    static delete(id) {
        return database.ref('megangster/dog/' + id).remove();
    }
    static getAll() {
        return database.ref('megangster/dog/').once('value').then(data => data.val());
    }
}
