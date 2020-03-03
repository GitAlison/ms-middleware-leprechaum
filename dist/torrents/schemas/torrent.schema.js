"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TorrentSchema = new mongoose.Schema({
    user: String,
    name: String,
    type: String,
    link: String
});
//# sourceMappingURL=torrent.schema.js.map