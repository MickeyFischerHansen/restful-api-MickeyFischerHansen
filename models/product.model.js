const db = require("../config/database");

const productRef = db.firestore().collection("products");

module.exports = productRef;