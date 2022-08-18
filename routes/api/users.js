const express = require("express");

const ctrl = require("../../controllers/users");

const { auth, upload } = require("../../middlewares");

const { ctrlWrap } = require("../../helpers");

const router = express.Router();

router.post("/signup", ctrlWrap(ctrl.signup));

router.get("/verify/:verificationToken", ctrlWrap(ctrl.verifyEmail));

router.post("/verify", ctrlWrap(ctrl.resendVerifyEmail));

router.post("/login", ctrlWrap(ctrl.login));

router.get("/current", auth, ctrlWrap(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrap(ctrl.logout));

router.patch("/", auth, ctrlWrap(ctrl.updateSubscriptionUser));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrap(ctrl.setAvatar)
);

module.exports = router;
