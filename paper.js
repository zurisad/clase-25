class Paper{
	constructor(x,y,r)
	{
		var options = {
			isStatic:false,
			restitution:0.3,
			friction:5,
			density:1
		}
		this.image=loadImage("paper.png");
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
		
        }
        
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			
			scale(0.4);
			image(this.image,-100,-150)
			pop()
            
	}
}