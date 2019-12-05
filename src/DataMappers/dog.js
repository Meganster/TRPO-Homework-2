export class DogMapper {
    static fromDto(bdObject) {
        return {
            id: bdObject.id,
            img: bdObject.img,
            name: bdObject.name,
            sex: bdObject.sex,
            age: bdObject.age,
            description: bdObject.description,
        }
    }
    static toDto(dog) {
        return {
            id: dog.id,
            img: dog.img,
            name: dog.name,
            sex: dog.sex,
            age: dog.age,
            description: dog.description,
        }
    }
}