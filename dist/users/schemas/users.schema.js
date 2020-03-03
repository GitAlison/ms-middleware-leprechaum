"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
});
//# sourceMappingURL=users.schema.js.map