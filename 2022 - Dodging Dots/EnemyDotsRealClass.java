public class EnemyDotsRealClass {
    private int x,y;
    private int xVel, yVel;
    private int radius;
    
    EnemyDotsRealClass(){
        //The window screen is 1000 by 800
        //Choose which side of the screen the asteroid will come from
        switch ((int) (Math.random()*4 + 1)) {
            case 1: //North screen edge
                setX((int) (Math.random() * 1000));
                setY(20);
                break;
            case 2: //East edge screen
                setX(980);
                setY((int) (Math.random() * 800));
                break;
            case 3: //South edge screen
                setX((int) (Math.random() * 1000));
                setY(820);
                break;
            case 4: //West edge screen
                setX(20);
                setY((int) (Math.random() * 800));
                break;
            default:
                System.out.println("Recheck the EnemyDotsRealClass");
                break;
        }
        
        setXVel((int) (Math.random()*5 + 1));
        setYVel((int) (Math.random()*5 + 1));
        
        setRadius((int) (Math.random()*20 + 5));
    }
    
    public int getX(){ return x; }
    public void setX(int x) { this.x = x;}
    
    public int getY(){ return y; }
    public void setY(int y) { this.y = y;}

    public int getXVel(){ return xVel; }
    public void setXVel(int xVel) { this.xVel = xVel;}
    
    public int getYVel(){ return yVel; }
    public void setYVel(int yVel) { this.yVel = yVel;}
    
    public int getRadius() { return radius;}
    public void setRadius(int radius) { this.radius = radius;}
    
}
