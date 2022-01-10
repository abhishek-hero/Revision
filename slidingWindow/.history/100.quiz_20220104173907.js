function person(name, age) {
    var obj = {}
    obj.name = name
    obj.age = age

    return obj
}

var p1 = new person('abhi', 19)

console.log(typeof (p1))