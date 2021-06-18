class paper{
	constructor(x,y,r,width,height)
	{
	var options={
    isStatic:false,
		'restitution':0.3,
		'friction':0,
		'density':1.2
	}
		    this.x=x
        this.y=y
        this.body=Bodies.circle(this.x, this.y,PI/2,75,75, options)
        this.image=loadImage("paper.png")
        World.add(world, this.body);

	}
	display()
	{
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
      image(this.image,0,0,50,50);
        pop();
      }
    };


    function keyPressed(){
      if (keyCode=UP_ARROW){
      Matter.Body.applyforce(paper1.body,paper1.body.position,{x:130,y:-145})
      }
      }






































