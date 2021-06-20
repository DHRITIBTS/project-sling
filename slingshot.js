class Slingshot{
    constructor(bodyA,pointB){
        var options={
            'bodyA':bodyA,
            'pointB':pointB,
            'stiffness':0.5,
            'length':1,
        }
        this.sling=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.sling);
    }
    fly(){
  this.sling.bodyA=null;
    } 
}