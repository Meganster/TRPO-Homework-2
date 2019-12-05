export class UserMapper {
    static fromDto(bdObject) {
        return {
            id: bdObject.id,
            email: bdObject.email,
            password: bdObject.password,
            isAdmin: bdObject.isAdmin,
        }
    }
    static toDto(user) {
        return {
            id: user.id,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
        }
    }
}