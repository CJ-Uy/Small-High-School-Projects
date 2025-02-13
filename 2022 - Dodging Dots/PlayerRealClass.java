public class PlayerRealClass {
    private double score;
    private int x, y; //x for x coodinate and y for y coordinate on the 1000 by 850 window
    private int xVel, yVel; //xVel and yVel for x and y velocity
    
    PlayerRealClass(){
        setScore(0);
        setX(500-12);
        setY(400-30);
        setScore(0);
    }
    
    public double getScore(){
        return score;
    }
    public void setScore(double score){
        this.score = score;
    }
    
    public int getX(){
        return x;
    } 
    public void setX(int x){
        this.x = x;
    }
    
    public int getY(){
        return y;
    }
    public void setY(int y){
        this.y = y;
    }
    
    public int getXVel(){
        return xVel;
    }
    public void setXVel(int xVel){
        this.xVel = xVel;
    }
    
    public int getYVel(){
        return yVel;
    }
    public void setYVel(int yVel){
        this.yVel = yVel; 
    }   
}
