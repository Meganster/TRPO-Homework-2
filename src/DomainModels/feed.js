import { DogMapper } from "../DataMappers/dog-mapper";
import { filterObject } from './utils';
export class FeedDomain {
    static getAllDogsFilter(sex) {
        return DogMapper.getAll().then((dogs) => filterObject(dogs, (d) => {
            if (!sex) {
                return true;
            }
            return d.sex === sex;
        }));
    }
    static getAllDogs() {
        return DogMapper.getAll().then(dogs => ({keys: Object.keys(dogs || {}), dogs: dogs || {}}));
    }
    static getDog(id) {
        return DogMapper.get(id);
    }
}
