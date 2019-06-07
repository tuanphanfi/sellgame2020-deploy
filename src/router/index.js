var express = require('express');
var router = express.Router();

const path = require('path')
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

router.use(bodyParser.json())
// Gives constant name to long directory home page.
const appPage = path.join(__dirname, '../../public/index.html')


/******************
 * Import Schemas
 *****************/

const adminSchema = require('../models/Admin');


/******************
 * Add Users
 * Uncomment and change the value to add users
 *****************/
// router.get('/adduser', (req, res) => {
// var testdata = new  adminSchema({
//   username: "Tram",
//  password: "123"
// });

// testdata.save(function(err, data){
//   if(err) console.log(err);
//   else console.log ('Sucess:' , data);
// });
// })


router.post('/signin', (req, res) => {

  adminSchema.find({}, (err, admin) => {

    if (err) {
      console.log(err);
    } else {

      for (let i = 0; i < admin.length; i++) {
        if (req.body.username == admin[i].username) {
          console.log(req.body.username);
          console.log(req.body.password);
          admin[i].isCorrectPassword(req.body.password, function (err, same) {
            if (err) {
              res.status(500)
                .json({
                  error: 'Internal error please try again'
                });
            } else if (!same) {
              res.status(401)
                .json({
                  error: 'Incorrect email or password'
                });
            } else {
              
              res.cookie('authenticated', true,{maxAge: 3600000})
              // res.send("Sign In successfully");
              res.redirect('/addnews');
              // res.status(200).json({
              //   success:true,
              //   redirectUrl: '/'})
             
            }
          });
          //});
        

            // res.redirect('/');
          } 
          else {
              console.log('Please correct your username & password');
              res.redirect('/admin');
            }
          
        
    
  }
}
})
})



// SERVES STATIC HOMEPAGE at '/' URL
//testing schedule
var Schedule = require('../models/Schedule');
router.route("/api/schedule").get((req, res) => {

  Schedule.find({}, (err, list) => {
    if (err) {
      console.log(err);
    }
    //console.log(list);
    res.json(list);

  });

})


// Database Model
var ANews = require('../models/ANews');
var AwaitingNews = require('../models/AwaitingNews');

router.route("/api/news").get((req, res) => {

  ANews.find({}, (err, list) => {
    if (err) {
      console.log(err);
    }
    //console.log(list);
    res.json(list);

  });

})

router.route("/api/awaitingnews").get((req, res) => {

  AwaitingNews.find({}, (err, list) => {
    if (err) {
      console.log(err);
    }
    //console.log(list);
    res.json(list);

  });

})


router.get('*', function (req, res) {
  res.sendFile(appPage)
})


/******************
 * Admin Function
 *****************/

var storage = multer.diskStorage({
  destination: 'src/client/img/',
  filename(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});




router.post('/imgupload', function (req, res, next) {
  var upload = multer({ storage: storage }).any();
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Error uploading file.");
    } else {
      res.end(req.files[0].filename);
    }
  })
});

router.post('/deleteimg', function (req, res, next) {
  console.log(req.body.imgname);
  var path = 'src/client/img/' + req.body.imgname;
  fs.unlink(path, (err) => {
    if (err) {
      console.error(err)
      return
    }
    res.redirect("/editnews");
  })
});

router.post('/upload', function (req, res, next) {
  var upload = multer({ storage: storage }).any();
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Error uploading file.");
    } else {
      console.log(req.body);
      console.log(Object.keys(req.body));
      //console.log(req.files);
      var tempArray = [];

      //  req.files.forEach( function(f) {
      //    tempArray.push({type:"img", id: f.fieldname.split("-")[1], value: f.filename});
      //  });


      var bodyKeys = Object.keys(req.body);
      // take the key from 1 and end by bodyKeys.length - 2 because [0] is for title and the last 2 is for tag and button type (save only or submit)
      for (i = 1; i < bodyKeys.length - 2; i++) {
        bodykey = bodyKeys[i];
        tempArray.push({ id: bodykey.split("-")[1], inputtype: bodykey.split("-")[0], inputvalue: req.body[bodykey] });
      };


      var orderedArray = [];
      for (var i = 0; i < tempArray.length; i++) {
        for (var j = 0; j < tempArray.length; j++) {
          if (tempArray[j].id == i) {
            orderedArray.push(tempArray[j]);

          }
        }
      }
      // orderedArray.push(tempArray[tempArray.length-1]);
      orderedArray.forEach(function (a) {
        console.log(a);
      });

      if (req.body.submitbutton == "Publish") {
        var newRecord = new ANews({ title: req.body.title, content: orderedArray, tag: req.body.tag })
        newRecord.save(function (err) {
          if (err) console.log(err);
          console.log("Successful");
        });
        //res.end("File has been uploaded");
        res.redirect("/editnews");
      }
      else {
        var newRecord = new AwaitingNews({ title: req.body.title, content: orderedArray, tag: req.body.tag })
        newRecord.save(function (err) {
          if (err) console.log(err);
          console.log("Successful");
        });
        res.redirect("/awaitingnews");
        //res.end("File has been Awaiting in the list");

      }
    }

  });
});



router.post('/updatefromnews', function (req, res, next) {
  var upload = multer({ storage: storage }).any();
  upload(req, res, function (err) {
    if (err) {
      //console.log(err);
      return res.end("Error uploading file.");
    } else {
      //  console.log(req.body);
      //  console.log(Object.keys(req.body));
      var tempArray = [];



      var bodyKeys = Object.keys(req.body);
      for (i = 2; i < bodyKeys.length - 2; i++) {
        bodykey = bodyKeys[i];
        tempArray.push({ id: bodykey.split("-")[1], inputtype: bodykey.split("-")[0], inputvalue: req.body[bodykey] });
      };


      var orderedArray = [];
      for (var i = 0; i < tempArray.length; i++) {
        for (var j = 0; j < tempArray.length; j++) {
          if (tempArray[j].id == i) {
            orderedArray.push(tempArray[j]);

          }
        }
      }
      // orderedArray.push(tempArray[tempArray.length-1]);
      orderedArray.forEach(function (a) {
        console.log(a);
      });
      if (req.body.submitbutton == "Publish") {
        var newUpdate = { title: req.body.title, content: orderedArray, tag: req.body.tag };
        console.log(newUpdate);
        ANews.findByIdAndUpdate(req.body.update_id, newUpdate, { new: true }, (err) => {
          if (err) console.log(err);
          console.log("Successful");
        });
        res.end("File has been updated");
      }
      else {
        var newRecord = new AwaitingNews({ title: req.body.title, content: orderedArray, tag: req.body.tag });
        newRecord.save(function (err) {
          if (err) console.log(err);
          console.log("Successful");
        });
        //res.end("File has been Awaiting in the list");
        res.redirect('/awaitingnews');
      }
    }
  });
});
router.post('/updatefromawaitingnews', function (req, res, next) {
  var upload = multer({ storage: storage }).any();
  upload(req, res, function (err) {
    if (err) {
      //console.log(err);
      return res.end("Error uploading file.");
    } else {
      //  console.log(req.body);
      //  console.log(Object.keys(req.body));
      var tempArray = [];



      var bodyKeys = Object.keys(req.body);
      for (i = 2; i < bodyKeys.length - 2; i++) {
        bodykey = bodyKeys[i];
        tempArray.push({ id: bodykey.split("-")[1], inputtype: bodykey.split("-")[0], inputvalue: req.body[bodykey] });
      };


      var orderedArray = [];
      for (var i = 0; i < tempArray.length; i++) {
        for (var j = 0; j < tempArray.length; j++) {
          if (tempArray[j].id == i) {
            orderedArray.push(tempArray[j]);

          }
        }
      }
      // orderedArray.push(tempArray[tempArray.length-1]);
      orderedArray.forEach(function (a) {
        console.log(a);
      });
      if (req.body.submitbutton == "Publish") {

        var newRecord = new ANews({ title: req.body.title, content: orderedArray, tag: req.body.tag });
        newRecord.save(function (err) {
          if (err) console.log(err);
          console.log("Successful");
        });
        AwaitingNews.findByIdAndRemove(req.body.update_id, (err) => {
          if (err) {
            console.log(err);
          }
          console.log("Remove post successfully");
          res.redirect("/editnews");
        })
        //res.end("File has been uploaded");


      }
      else {
        var newUpdate = { title: req.body.title, content: orderedArray, tag: req.body.tag };
        console.log(newUpdate);
        AwaitingNews.findByIdAndUpdate(req.body.update_id, newUpdate, { new: true }, (err) => {
          if (err) console.log(err);
          console.log("Successful");
        });
        //res.end("File has been updated in Awaiting list");
        res.redirect('/awaitingnews');
      }
    }
  });
});

router.post('/deletepost', function (req, res, next) {
  //console.log(req.body.id);
  ANews.find({ _id: req.body.id }, (err, anews) => {
    if (err) {
      console.log(err);
    }
    //console.log(anews[0].content.length);
    for (var i = 0; i < anews[0].content.length; i++) {
      if (anews[0].content[i].inputtype == "img") {
        var path = 'src/client/img/' + anews[0].content[i].inputvalue;
        fs.unlink(path, (err) => {
          if (err) {
            console.error(err);
          }

        })
      }
    }
    ANews.findByIdAndRemove(req.body.id, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Remove post successfully");
      res.redirect("/editnews");
    })



  });



});
router.post('/deleteawaitingpost', function (req, res, next) {
  //console.log(req.body.id);
  AwaitingNews.find({ _id: req.body.id }, (err, anews) => {
    if (err) {
      console.log(err);
    }
    //console.log(anews[0].content.length);
    for (var i = 0; i < anews[0].content.length; i++) {
      if (anews[0].content[i].inputtype == "img") {
        var path = 'src/client/img/' + anews[0].content[i].inputvalue;
        fs.unlink(path, (err) => {
          if (err) {
            console.error(err);
          }

        })
      }
    }
    AwaitingNews.findByIdAndRemove(req.body.id, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Remove post successfully");
      res.redirect("/editnews");
    })



  });



});



module.exports = router;