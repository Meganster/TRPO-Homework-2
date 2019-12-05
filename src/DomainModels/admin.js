import { Dog } from "../DataHelpers/dog";
import {DogMapper} from "../DataMappers/dog";

export class AdminDomain {
    constructor(id) {
        this.dog =  Dog.get(...DogMapper.fromDto({id}));
    }
    deleteDog() {
        this.dog = null;
    }
    update() {
        this.dog =  Dog.get(...DogMapper.fromDto(this.dog));
    }
}
