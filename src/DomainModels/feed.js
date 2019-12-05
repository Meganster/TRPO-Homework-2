import { Dog } from "../DataHelpers/dog";
import {DogMapper} from "../DataMappers/dog";
import { filterObject } from './utils';
export class FeedDomain {
    constructor(id) {
        this.dog = Dog.get(id => DogMapper.fromDto(id));
        this.allDogs = Dog.getAll().then(dogs => ({keys: Object.keys(DogMapper.fromDto(dogs) || {}), dogs: DogMapper.fromDto(dogs) || {}}));
    }
    getAllDogsFilter(sex) {
        return Dog.getAll().then((dogs) => filterObject(DogMapper.fromDto(dogs), (d) => {
            if (!sex) {
                return true;
            }
            return d.sex === sex;
        }));
    }
    getAllDogs() {
        return this.allDogs;
    }
    getDog() {
        return this.dog;
    }

    update() {
        this.dog = Dog.get(id => DogMapper.fromDto(id));
        this.allDogs = Dog.getAll().then(dogs => ({keys: Object.keys(DogMapper.fromDto(dogs) || {}), dogs: DogMapper.fromDto(dogs) || {}}));
    }
}
