"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: process.env.PORT || 3000,
    mqtt: {
        url: `mqtt://${process.env.MQTT_URL}:${process.env.MQTT_PORT}`
    },
    mongodbUrl: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_URL}/${process.env.DATABASE_BASE}?retryWrites=true&w=majority`
});
//# sourceMappingURL=configuration.js.map