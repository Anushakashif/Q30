// 30. Hello Admins: Make a array of five or more usenames, including the name 'admin'. Imagine you are writing 
// after they log in to a website. Loop through the array, and print to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status reports?
// • Otherwise, print a generic greeting such as Hello Eric, thank you for logging in again. 

let users: string[] = ["admin", "eric", "anusha", "shiza", "fatima"]
for (let user of users) 
      if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?")
      }
else {
    console.log(`Hello ${user}, thank you for logging in again`)
}
