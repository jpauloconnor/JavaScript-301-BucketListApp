var BucketList = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){  
    //Create a new instance of the BucketListSchema
      var bucketList = new BucketList(req.body);
      // Authenticated Passport user as specificUser in BucketList model.
      bucketList.specificUser = req.user;
      // Save list item, plus add an error, if it fails
      console.log(req.body);
      bucketList.save(function(err) {
        if(err) {
          return res.status(418).send({
            message: getErrorMessage("Not authorized, dude.")
          });
        }
        else {
          res.json(bucketList);
        }
      });
  }

