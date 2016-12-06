
var Catche: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {
    const method = desc.value;
    desc.value = function () {
        console.log(this);
        if (this["fightPowerCache"] != null && this["dirtyFlag"]==false) {
            return target["fightPowerCache"];
        } else {
            console.log("null");
            this["dirtyFlag"]=false;
            this["fightPowerCache"]= method.apply(this);
            return method.apply(this);
        }
    }
    return desc;
}


class User{
    gold=0;
    diomond=0;
    fightPowerCache:number;
    dirtyFlag:boolean;
    heros:Hero[];
    constructor(){
        this.heros=new Array();
        this.fightPowerCache=null;
        this.dirtyFlag=false;
    }
    @Catche
    public getFightPower():number{
        var result=0;
        this.heros.forEach((hero)=>{
            result+=hero.getFightPower();
        })
        this.fightPowerCache=result;
        return result;
    }
    public addHero(hero:Hero){
        this.heros.push(hero);
        this.dirtyFlag=true;
    }
}
class Hero{
    strength=10;
    intelligence=10;
    level=1;
    currentEXP=0;
    totalEXP=100;
    like=false;
    fightPowerCache:number;
    dirtyFlag:boolean;
    equipments:Equipment[];
    constructor(){
        this.equipments=new Array();
        this.dirtyFlag=false;
    }
    public getFightPower():number{
        var result=0;
        this.equipments.forEach((equipment)=>{
            result+=equipment.getFightPower();
        })
        result+=this.strength*2+this.intelligence*1+this.level*3;
        this.fightPowerCache=result;
        return result;
    }
    public addEquipment(e:Equipment){
        this.equipments.push(e);
        this.dirtyFlag=true;
    }
}
class Equipment{
    attack=10;
    fightPowerCache:number;
    dirtyFlag:boolean;
    jewlls:Jewll[];
    constructor(){
        this.jewlls=new Array();
        this.dirtyFlag=false;
    }
    public getFightPower():number{
        var result=0;
        this.jewlls.forEach((jewll)=>{
            result+=jewll.getFightPower();
        })
        result+=this.attack*2;
        this.fightPowerCache=result;
        return result;
    }
    public addJewll(j:Jewll){
        this.jewlls.push(j);
        this.dirtyFlag=true;
    }
}
class Jewll{
    fightPowerCache:number;
    dirtyFlag:boolean;
    points=10;
    constructor(){
        this.fightPowerCache=null;
        this.dirtyFlag=false;
    }
    public getFightPower():number{
        this.fightPowerCache=this.points;
        return this.points;
    }
}

