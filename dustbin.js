dustbin class {
    constructor (x, y, width, height){
        var dustbinOptions = {
            isStatic:true
        }
        this.width=width
    this.height=height
    this.body=Bodies.rectangle(x, y, width, height, dustbinOptions)
    World.add(world, this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(RIGHT)
        fill("white")
        rect(pos.x, pos.y, this.width, this.height)
      }
}