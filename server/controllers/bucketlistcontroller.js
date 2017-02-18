var BucketList = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){  
    //Create a new instance of the BucketListSchema
     
    var title = req.body.props.title;
    var categories = req.body.props.categories;
    var content = req.body.props.content;
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

//Get's all users posts
exports.getBucketList = function(req, res){
  
    BucketList.find(function(err, list){
      if(err){
        res.send(err);
      }else{
        res.json(list);
      }
    });
}


//Get's all users posts
exports.getBucketList = function(req, res){
    BucketList.find(function(err, list){
      if(err){
        res.send(err);
      }else{
        res.json(list);
      }
    });
}




// exports.getBucketListItem = function(req, res, next){

//    var data = req.params.id;
//    BucketList.findById(_id, function(err, doc)){



//    });
//     //     .findOne({
//     //       where: { id: data }
//     //     }).then(
//     //       function getSucces(updateData) {
//     //         res.json(updateData);
//     //       },

//     //       function getError(err) {
//     //         res.send(500, err.message);
//     //       }
//     //     );
//     // });

// }







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

