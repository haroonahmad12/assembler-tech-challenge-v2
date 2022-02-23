const { get } = require("mongoose");
const { ImageRepo } = require("../user-repository");

async function addImage(req, res, next) {
  const { uid } = req.user;
  const { imageUrl, views } = req.body;

  console.log(imageUrl, views, uid);
  try {
    const response = await ImageRepo.create({
      user: uid,
      imageUrl: imageUrl,
      views: views,
    });

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }
    if (response.data) {
      return res.status(200).send({
        data: response,
        error: null,
      });
    }

    res.status(201).send({
      data: response,
      error: null,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteImage(req, res) {
  //   req.signOut();
  //   res.status(200).send({
  //     data: "OK",
  //     error: null,
  //   });

  console.log(req);
}

async function getImages(req, res, next) {
  try {
    const response = await ImageRepo.find();

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }
    if (response.data) {
      return res.status(200).send({
        data: response,
        error: null,
      });
    }
    res.status(201).send({
      data: response,
      error: null,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addImage: addImage,
  deleteImage: deleteImage,
  getImages: getImages,
};
