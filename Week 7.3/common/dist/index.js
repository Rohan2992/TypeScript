"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidation = void 0;
const zod_1 = require("zod");
exports.inputValidation = zod_1.z.object({
    username: zod_1.z.string().min(1).max(30).email(),
    password: zod_1.z.union([zod_1.z.number().min(1).max(9999999999), zod_1.z.string().min(1).max(20)])
});
