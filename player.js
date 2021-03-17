class Player {
    constructor(x,y,r,scale){
        this.Player = createSprite(x,y)
        this.radius = r
        this.Player.addImage("skin2",skin2)
        this.Player.scale = scale
       
 
    }
    move(speed1){
        console.log("move")
        if(keyDown("Up")){
            this.Player.y = this.Player.y - speed1
            console.log("move11`")
        }
        if (keyDown("left")){
            this.Player.x = this.Player.x - speed1
        
        }
        if (keyDown("right")){
            this.Player.x = this.Player.x + speed1
        }
        if (keyDown("down")){
            this.Player.y = this.Player.y + speed1
        }
    }
    touch(){
        console.log("YES")
        for(var i = 0;i < circlesGroup.length ; i++){
            if(this.Player.isTouching(circlesGroup.get(i))){
                console.log("yes")
                circlesGroup.get(i).destroy()
                this.Player.scale = this.Player.scale + 0.01
                speed = speed - 0.1
            }
        }
           
    }
}