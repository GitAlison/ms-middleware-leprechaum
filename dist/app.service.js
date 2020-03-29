"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    randomPhrases() {
        const listPhrases = [
            "A dog owns nothing, yet is seldom dissatisfied.",
            "A hair on the head is worth two on the brush.",
            "A kind word never broke anyone’s mouth.",
            "A silent mouth is sweet to hear.",
            "Better be quarreling than lonesome.",
            "Bricks and mortar make a house, but the laughter of children makes a home.",
            "Don’t break your shin on a stool that is not in your way.",
            "Give away all you like, but keep your bills and your temper.",
            "It’s no use carrying an umbrella if your shoes are leaking.",
            "Leprechauns, castles, good luck and laughter.Lullabies, dreams and love ever after. Poems and songs with pipes and drums. A thousand welcomes when anyone comes… That’s the Irish for you.",
            "May all who love the Lord, love you and those who don’t love you, may the Lord give them a limp so you can see them coming.",
            "May brooks and trees and singing hills join in the chorus too, and every gentle wind that blows send happiness to you.",
            "May the hand of a friend always be near you. And may God fill your heart with gladness to cheer you.",
            "May the hinges of our friendship never grow rusty.",
            "May the raindrops fall lightly on your brow. May the soft winds freshen your spirit. May the sunshine brighten your heart. May the burdens of the day rest lightly upon you, and may God enfold you in the mantle of His love.",
            "May the sun shine all day long, everything go right and nothing wrong. May those you love bring love back to you, and may all the wishes you wish come true!",
            "May those who love us, love us; and those who don’t love us, may God turn their hearts; and if He doesn’t turn their hearts, may he turn their ankles so we’ll know them by their limping.",
            "May you always have work for your hands to do. May your pockets hold always a coin or two. May the sun shine bright on your window pane. May the rainbow be certain to follow each rain. ",
            "May you be in heaven a full half hour before the devil knows you are dead.",
            "May you have love that never ends, lots of money and lots of friends. Health be yours, whatever you do and may God send many blessings to you.",
            "May you live a long life full of gladness and health.",
            "May your home always be too small to hold all of your friends.",
            "Praise the young and they will flourish.",
            "The believer is happy, the doubter is wise.",
            "There is no need like the lack of a friend.",
            "True strength lies in gentleness.",
            "Kaio: Is she talks with you or only answer you?",
            "Henrique: Let's go programming today because love its so difficult ",
            "Kaio: The pride precedes the ruin",
            '“Everywhere I go I find a poet has been there before me.”― Sigmund Freud',
            '“Immorality, no less than morality, has at all times found support in religion.” ― Sigmund Freud',
            '“No, our science is no illusion. But an illusion it would be to suppose that what science cannot give us we can get elsewhere.” ― Sigmund Freud',
            '“The madman is a dreamer awake” ― Sigmund Freud',
        ];
        return listPhrases[Math.floor(Math.random() * listPhrases.length)];
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map