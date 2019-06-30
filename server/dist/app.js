"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const lichess_1 = require("./lichess");
const app = express_1.default();
app.use(express_1.default.static(path.resolve('../client/build')));
const numGames = 50;
app.get('/games/:username/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log('getting', numGames, ' from ', req.params.username);
    const openings = yield lichess_1.getOpenings(req.params.username, numGames);
    res.json(openings);
}));
const port = process.env.PORT || 5000;
app.listen(port);
console.log('App is listening on port ' + port);
// testing
(() => __awaiter(this, void 0, void 0, function* () {
    const f = yield lichess_1.getOpenings('lasergun', numGames);
    console.log('result', f);
}))();
//# sourceMappingURL=app.js.map