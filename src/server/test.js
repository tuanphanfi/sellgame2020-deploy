

//Test database---------------------------------
// app.get('/testdb', (req,res)=>{   
//   Admin.find({}, (err, users)=>{
//     if(err)
//       throw err;

//       //Send all users as object

//       res.send(users);
//   })
// });

//Add users into database---------------------------------
// Admin1 = new Admin({
//   username: "Chuong Pham",
//   password: '456'
// });
// Admin1.save((err, admin) => {
//  if (err) return console.error(err);
//  console.log(admin.username + " saved to collection.");
//});