class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,70,70);
    this.image = loadImage("sprites/bird.png");
    this.image1= loadImage("smoke.png")
    Matter.Body.setAngularVelocity(this.body,0)
    this.path=[]
  }
  display(){
    if(this.body.velocity.x>20){
      var pos= [this.body.position.x,this.body.position.y]
          this.path.push(pos)
      }
    super.display();

    for(var i=0 ; i < this.path.length; i=i+1){
      image(this.image1,this.path[i][0],this.path[i][1])
    }
  }
}