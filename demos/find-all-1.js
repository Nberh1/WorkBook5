"use strict";

let menuItems = [
  { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
  { id: 2, item: "Burger", category: "Meal", price: 7.29 },
  { id: 3, item: "Salad", category: "Meal", price: 8.29 },
  { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
  { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

let foundItem;

for (const item of menuItems) {
  if (item.id == "Drink") {
    foundItem = item;
    break;
  }
}

console.log(foundItem);


let course = course.find(course => course.CourseID == "PROG200");

if (course) {
    console.log('The PROG200 course starts on $(course.StarteDate)');
} else {
    console.log("Course not found.");
}
