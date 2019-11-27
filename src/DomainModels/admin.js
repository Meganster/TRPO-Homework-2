import { DogMapper } from "../DataMappers/dog-mapper";
export class AdminDomain {
    static deleteDog(id) {
        return DogMapper.delete(id)
    }
    static getAllDogs() {
        return DogMapper.getAll();
    }
}
