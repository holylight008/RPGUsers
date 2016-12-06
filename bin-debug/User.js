var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Catche = function (target, propertyName, desc) {
    var method = desc.value;
    desc.value = function () {
        console.log(target, propertyName, desc);
        if (target["fightPowerCache"] != null) {
            return target["fightPowerCache"];
        }
        else {
            console.log("null");
            return method.apply(this);
        }
    };
    return desc;
};
var User = (function () {
    function User() {
        this.gold = 0;
        this.diomond = 0;
        this.heros = new Array();
        this.fightPowerCache = null;
    }
    var d = __define,c=User,p=c.prototype;
    p.getFightPower = function () {
        var result = 0;
        this.heros.forEach(function (hero) {
            result += hero.getFightPower();
        });
        this.fightPowerCache = result;
        return result;
    };
    p.addHero = function (hero) {
        this.heros.push(hero);
    };
    __decorate([
        Catche
    ], p, "getFightPower", null);
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero() {
        this.strength = 10;
        this.intelligence = 10;
        this.level = 1;
        this.currentEXP = 0;
        this.totalEXP = 100;
        this.like = false;
        this.equipments = new Array();
    }
    var d = __define,c=Hero,p=c.prototype;
    p.getFightPower = function () {
        var result = 0;
        this.equipments.forEach(function (equipment) {
            result += equipment.getFightPower();
        });
        result += this.strength * 2 + this.intelligence * 1 + this.level * 3;
        this.fightPowerCache = result;
        return result;
    };
    p.addEquipment = function (e) {
        this.equipments.push(e);
    };
    __decorate([
        Catche
    ], p, "getFightPower", null);
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipment = (function () {
    function Equipment() {
        this.attack = 10;
        this.jewlls = new Array();
    }
    var d = __define,c=Equipment,p=c.prototype;
    p.getFightPower = function () {
        var result = 0;
        this.jewlls.forEach(function (jewll) {
            result += jewll.getFightPower();
        });
        result += this.attack * 2;
        this.fightPowerCache = result;
        return result;
    };
    p.addJewll = function (j) {
        this.jewlls.push(j);
    };
    __decorate([
        Catche
    ], p, "getFightPower", null);
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
var Jewll = (function () {
    function Jewll() {
        this.points = 10;
        this.fightPowerCache = null;
    }
    var d = __define,c=Jewll,p=c.prototype;
    p.getFightPower = function () {
        this.fightPowerCache = this.points;
        return this.points;
    };
    __decorate([
        Catche
    ], p, "getFightPower", null);
    return Jewll;
}());
egret.registerClass(Jewll,'Jewll');
//# sourceMappingURL=User.js.map