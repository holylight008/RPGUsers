var Catche: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {
    const method = desc.value;
    desc.value = function () {
        console.log(target,propertyName);
        if (target["fightPowerCache"] != null) {
            return target["fightPowerCache"];
        } else {
            console.log("null");
            return method.apply(this);
        }
    }
    return desc;
}


class User {
    gold = 0;
    diomond = 0;
    fightPowerCache: number;
    heros: Hero[];
    constructor() {
        this.heros = new Array();
        this.fightPowerCache = null;
    }
    @Catche
    public getFightPower(): number {
        var result = 0;
        this.heros.forEach((hero) => {
            result += hero.getFightPower();
        })
        this.fightPowerCache = result;
        return result;
    }
    public addHero(hero: Hero) {
        this.heros.push(hero);
    }
}
class Hero {
    strength = 10;
    intelligence = 10;
    level = 1;
    currentEXP = 0;
    totalEXP = 100;
    like = false;
    fightPowerCache: number;
    equipments: Equipment[];
    constructor() {
        this.equipments = new Array();
    }
    @Catche
    public getFightPower(): number {
        var result = 0;
        this.equipments.forEach((equipment) => {
            result += equipment.getFightPower();
        })
        result += this.strength * 2 + this.intelligence * 1 + this.level * 3;
        this.fightPowerCache = result;
        return result;
    }
    public addEquipment(e: Equipment) {
        this.equipments.push(e);
    }
}
class Equipment {
    attack = 10;
    fightPowerCache: number;
    jewlls: Jewll[];
    constructor() {
        this.jewlls = new Array();
    }
    @Catche
    public getFightPower(): number {
        var result = 0;
        this.jewlls.forEach((jewll) => {
            result += jewll.getFightPower();
        })
        result += this.attack * 2;
        this.fightPowerCache = result;
        return result;
    }
    public addJewll(j: Jewll) {
        this.jewlls.push(j);
    }
}
class Jewll {
    fightPowerCache: number;
    points = 10;
    constructor() {
        this.fightPowerCache = null;
    }
    @Catche
    public getFightPower(): number {
        this.fightPowerCache = this.points;
        return this.points;
    }
}


