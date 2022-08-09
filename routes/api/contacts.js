const express = require("express");

const router = express.Router();

const { auth } = require("../../middlewares");

const ctrl = require("../../controllers/contacts");

const { ctrlWrap } = require("../../helpers");

router.get("/", auth, ctrlWrap(ctrl.listContacts));

router.get("/:contactId", auth, ctrlWrap(ctrl.getContactById));

router.post("/", auth, ctrlWrap(ctrl.addContact));

router.delete("/:contactId", auth, ctrlWrap(ctrl.removeContact));

router.put("/:contactId", auth, ctrlWrap(ctrl.updateContact));

router.patch("/:contactId/favorite", auth, ctrlWrap(ctrl.updateContactStatus));

module.exports = router;
