class mango{
    constructor(x,y,r)
    {
          
        var options={
        isStatic:true,
        restitution :0,
        friction :1,
        }
this.x=x;
this.y=y;
this.r=rthis.image=loadImage("image/mango.png")
this.body=Bodies.circle(this.x, this.y, this.r,options)
world.add(world, this.body);
    }

    display()
    {
        var mangoPos=this.body.position;
        push()
        translate(mangoPos.x, mangoPos.y);
        rotate(this.body.angle)
        fill(255,0,255)
        image(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0,0,this.r*2, this.r*2)
        pop()

    }
}