var BucketList = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){  
    //Create a new instance of the BucketListSchema
      var bucketList = new BucketList(req.body);
      // Authenticated Passport user as specificUser in BucketList model.
      bucketList.specificUser = req.user;
      // Save list item, plus add an error, if it fails
      bucketList.save(function(err) {
        if(err) {
          return res.status(400).send({
            message: getErrorMessage(err)
          });
        }
        else {
          res.json(bucketList);
        }
      });
  }

