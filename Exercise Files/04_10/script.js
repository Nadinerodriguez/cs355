function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  }
}

var courses = [
  new Course("JavaScript Essential Training", "Morten", 1, true, 0),
  new Course("Up and running with ECMAScript 6", "Eve", 1, true, 12345),
];


console.log(courses);
console.log(courses[1].updateViews());
