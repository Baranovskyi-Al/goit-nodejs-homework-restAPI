const { Contact, addSchema, updateFavoriteSchema } = require("./contacts");

const {
  User,
  joiSignupSchema,
  joiLoginSchema,
  joiUpdateSubscriptionSchema,
  joiEmailSchema,
} = require("./user");

module.exports = {
  Contact,
  addSchema,
  updateFavoriteSchema,
  User,
  joiSignupSchema,
  joiLoginSchema,
  joiUpdateSubscriptionSchema,
  joiEmailSchema,
};
