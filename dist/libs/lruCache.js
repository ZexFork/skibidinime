"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = exports.defaultTTL = void 0;
const lru_cache_1 = require("lru-cache");
exports.defaultTTL = 1000 * 60 * 60 * 12;
exports.cache = new lru_cache_1.LRUCache({
    max: 100,
    allowStale: false,
    updateAgeOnGet: false,
    updateAgeOnHas: false,
    ttl: exports.defaultTTL,
});
