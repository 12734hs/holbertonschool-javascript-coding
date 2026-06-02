export default class HoblertonCourse {
    constructor(name, length, students) {
        if (typeof name == "string") {
            this._name = name
        }
        if (typeof length == "number") {
            this._length = length
        }
        if (typeof length == Array) {
            this._students = students
        }
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
        return;
    }


    get length() {
        return this._length
    }

    set length(length) {
        this._length = length
        return;
    }


    get students() {
        return this._students
    }

    set students(students) {
        this._students = students
        return;
    }
}