console.log("test")


function Human (firstName, lastName) {
 this.firstName = firstName
 this.lastName = lastName
}

Human.prototype.sayHello = function() {
 console.log(`Hello','I'm${this.firstName}`)
}

class Notification {
 send() {
   console.log("Notification")
 }

}
;
const notification = new Notification();
notification.send();


