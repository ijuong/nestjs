"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cat_service_1 = require("./cat.service");
var express_1 = require("express");
var router = express_1.Router();
router.get("/cats", cat_service_1.readAllCat);
router.get("/cats/:id", cat_service_1.readCat);
router.post("/cats", cat_service_1.createCat);
router.put("/cats/:id", cat_service_1.updateCat);
router.patch("/cats/:id", cat_service_1.updatePartialCat);
router.delete("/cats/:id", cat_service_1.deleteCat);
exports.default = router;
//# sourceMappingURL=cats.route.js.map