/////////////////////task1////////////////////////////////////
const fs = require("fs")
const yargs = require("yargs")
    //1-create object
const person1 = {
    fname: "hoda",
    lname: "yasser",
    age: "21",
    city: "alex"
}
console.log(person1)
    //2-change obj to json
const personjson = JSON.stringify(person1)
console.log(personjson)
    //3-store in file
fs.writeFileSync("datajson", personjson)
    //4-read file
console.log(fs.readFileSync("datajson").toString)
    //5-convert to obj
const personobj = JSON.parse(personjson)
console.log(personobj)
    //6-update data
person1.fname = "adel"
person1.lname = "ahmed"
person1.age = "40"
person1.city = "cario"
console.log(person1)
    //7-convert obj to json
const person1json = JSON.stringify(person1)
console.log(person1json)
    //8- store in file
fs.writeFileSync("updatadatajson", person1json)
    /////////////////////////task2//////////////////////////////
const data10 = require("./data10")

yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        fname: {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data10.addPerson(x.fname, x.lname, x.city, x.age, x.id)
    }
})
yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler: (x) => {

        data10.deleteData(x.id)
    }
})
yargs.command({
    command: "read",
    describe: "to read data",
    handler: (x) => {
        data10.readData(x.id)
    }
})


yargs.command({
    command: "list",
    describe: "list data",
    handler: () => {
        data10.listData()
    }
})

yargs.parse()