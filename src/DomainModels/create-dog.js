import { Dog } from "../DataHelpers/dog";
import {DogMapper} from "../DataMappers/dog";

export class CreateDogDomain {
    constructor() {
        this.dog = null;
    }
    createDog(dog) {
        this.dog = dog;
    }
    update() {
        Dog.create(DogMapper.toDto(this.dog));
    }
}
