const { UserRepo } = require("../user-repository");

async function signUp(req, res, next) {
  const { uid, email } = req.user;

  try {
    const response = await UserRepo.findOne({ email: email });

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

    await UserRepo.create({
      _id: uid,
      email: email,
    });

    res.status(201).send({
      data: response,
      error: null,
    });
  } catch (error) {
    next(error);
  }
}

async function signOut(req, res) {
  req.signOut();

  res.status(200).send({
    data: "OK",
    error: null,
  });
}

async function signIn(req, res, next) {
  try {
    const { email } = req.user;

    const dbRes = await User.findOne({ email });

    if (dbRes === null) {
      return res.status(404).send({
        data: null,
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).send({
      data: dbRes,
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signUp: signUp,
  signOut: signOut,
  signIn: signIn,
};
