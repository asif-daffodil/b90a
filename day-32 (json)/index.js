const studentInfo = {
    studentName: "Adittya",
    age: 24,
    city: "Bogura",
    isMaried: false,
    friendList: ["Abantika", "Sumaiya", "Guru", "Auto Pass"],
    allInfo: () => {
        return studentInfo.studentName;
    },
    familyInfo: {
        father: "Father of Adittya",
        mother: "Mother of Adittya",
    }
}

console.log(`${studentInfo.studentName} ${studentInfo.age}`);
console.log(studentInfo.friendList[2]);
console.log(studentInfo.allInfo());
console.log(studentInfo.familyInfo.mother);
console.log(studentInfo["studentName"]);
console.log(studentInfo["allInfo"]());
console.log(studentInfo["familyInfo"]["father"]);