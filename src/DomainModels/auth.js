import { UserMapper } from "../DataMappers/user-mapper";
export class AuthDomain {
    static isAdmin(id) {
        return UserMapper.get(id).then(user => user && user.isAdmin)
    }
}
