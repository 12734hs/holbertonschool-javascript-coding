export default function getStudentIdsSum (students) {
    let result = students.reduce((acc, student) => {
        return acc + student.id
    }, 0);
    return result
}