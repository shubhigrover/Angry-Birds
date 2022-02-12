class Pig extends BaseClass {
    constructor(x, y) {
      super(x,y,50,50)
      this.image=loadImage("sprites/enemy.png")
      this.brightness=255
    }
    display(){
      if(this.body.speed<3){
        super.display()
      }
      else{
        World.remove(world,this.body)
        push()
        this.brightness=this.brightness-5
        tint(255,this.brightness)
        image(this.image,this.body.position.x,this.body.position.y)
        pop()
      }
    }
  }
