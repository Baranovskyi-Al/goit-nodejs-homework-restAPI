const express = require("express");

const ctrl = require("../../controllers/users");

const { auth } = require("../../middlewares");

const { ctrlWrap } = require("../../helpers");

const router = express.Router();

router.post("/signup", ctrlWrap(ctrl.signup));

router.post("/login", ctrlWrap(ctrl.login));

router.get("/current", auth, ctrlWrap(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrap(ctrl.logout));

router.patch("/", auth, ctrlWrap(ctrl.updateSubscriptionUser));

module.exports = router;
