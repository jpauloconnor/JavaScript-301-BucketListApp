var BucketList = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){  
    //Create a new instance of the BucketListSchema
     
    var title = req.body.title;
    var categories = req.body.categories;
    var content = req.body.content;
    var specificUser = req.user;

    var bucketList = new BucketList({
      title: title,
      categories: categories,
      content: content,
      specificUser: specificUser
    });

    bucketList.save(function(err){
        if(err) { return next(err); }
        console.log(bucketList);
        res.json(bucketList);
    });
}



  //   var bucketList = new BucketList(req.body.title);
  //     // Authenticated Passport user as specificUser in BucketList model.
  //     bucketList.specificUser = req.user;
  //     // Save list item, plus add an error, if it fails
  //     console.log(req.body);
  //     bucketList.save(function(err) {
  //       if(err) {
  //         return res.status(418).send({
  //           message: getErrorMessage("Not authorized, dude.")
  //         });
  //       }
  //       else {
  //         res.json(bucketList);
  //       }
  //     });
  // }

