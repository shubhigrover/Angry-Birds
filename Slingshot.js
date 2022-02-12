class slingshot{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.body=Constraint.create(options)
        this.pointB=pointB
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        World.add(world, this.body);
      }

      fly() {
          this.body.bodyA=null
      }

      attach(body){
        this.body.bodyA=body
      }

      display(){
          image(this.sling1,200,20)
          image(this.sling2,170,20)
          
        if(this.body.bodyA){  
        strokeWeight(5)
    line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y)       
    line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x-30,this.pointB.y)       
    image(this.sling3,this.body.bodyA.position.x,this.body.bodyA.position.y,15,30)
}
}
}