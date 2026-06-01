export default function createEmployeesObject(departmentName, employees) {
    let key = departmentName
    return {[key]: [...employees]}
}
