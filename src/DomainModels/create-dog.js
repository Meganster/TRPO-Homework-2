import { DogMapper } from "../DataMappers/dog-mapper";
export class CreateDogDomain {
    static createDog(dog) {
        return DogMapper.create(dog);
    }
}
