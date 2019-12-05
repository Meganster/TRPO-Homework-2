import { User } from "../DataHelpers/user";
import {UserMapper} from "../DataMappers/user";

export class AuthDomain {
    constructor(id) {
        this.user = User.get(id).then(user => user &&  UserMapper.fromDto(user));
    }
    isAdmin(id) {
        return this.user.isAdmin;
    }
    update(id) {
        this.user = User.get(id).then(user => user &&  UserMapper.fromDto(user));
    }
}
