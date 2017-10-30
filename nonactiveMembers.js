
"use strict";

// The function should return an output of the same array of objects with all activeMember properties set to false
// and contain an additional property of dateDeactivated set to 2017.


var members = [
    {
        joined: 2009,
        name: "John",
        activeMember: true
    },
    {
        joined: 2011,
        name: "Sally",
        activeMember: true
    },
    {
        joined: 2013,
        name: "John",
        activeMember: true
    }
];
function deactivateMembers(arrayofMemberObjects) {
    arrayofMemberObjects.forEach(function(memberObject) {
        memberObject.activeMember = false;
        memberObject.dateDeactivated = 2017;
    });
    return arrayofMemberObjects;
}
console.log(deactivateMembers(members));

