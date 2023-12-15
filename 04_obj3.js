const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Saurav"
}
// course.courseInstructor

const {courseInstructor: instructor} = course // this is called destructuring!!!
const {price} = course

console.log(instructor);
console.log(price);