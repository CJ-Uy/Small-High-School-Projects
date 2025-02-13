import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.util.TimerTask;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.*;

public class GameGUI extends JFrame{
    //duration program is open
    double start = System.currentTimeMillis();
    
    //Player initializtation
    PlayerRealClass p = new PlayerRealClass();
    
    //Enemies (arrays dont work for some reason)
    EnemyDotsRealClass e1 = new EnemyDotsRealClass();
    EnemyDotsRealClass e2 = new EnemyDotsRealClass();
    EnemyDotsRealClass e3 = new EnemyDotsRealClass();
    EnemyDotsRealClass e4 = new EnemyDotsRealClass();
    EnemyDotsRealClass e5 = new EnemyDotsRealClass();
    EnemyDotsRealClass e6 = new EnemyDotsRealClass();
    EnemyDotsRealClass e7 = new EnemyDotsRealClass();
    EnemyDotsRealClass e8 = new EnemyDotsRealClass();
    EnemyDotsRealClass e9 = new EnemyDotsRealClass();
    EnemyDotsRealClass e10 = new EnemyDotsRealClass();
    EnemyDotsRealClass e11 = new EnemyDotsRealClass();
    EnemyDotsRealClass e12 = new EnemyDotsRealClass();
    EnemyDotsRealClass e13 = new EnemyDotsRealClass();
    EnemyDotsRealClass e14 = new EnemyDotsRealClass();
    EnemyDotsRealClass e15 = new EnemyDotsRealClass();
    EnemyDotsRealClass e16 = new EnemyDotsRealClass();
    EnemyDotsRealClass e17 = new EnemyDotsRealClass();
    EnemyDotsRealClass e18 = new EnemyDotsRealClass();
    EnemyDotsRealClass e19 = new EnemyDotsRealClass();
    EnemyDotsRealClass e20 = new EnemyDotsRealClass();
    
    //Color pallete
    private Color spaceColor = Color.decode("#1d1135");
    private Color whiteColor = Color.decode("#fcfbfe");
    private Color pColor1 = Color.decode("#ba1e58");
    private Color pColor2 = Color.decode("#5643fd");
    private Color pColor3 = Color.decode("#0c164f");
    
    private Timer gameThread;
    
    private class DrawGame extends JPanel implements ActionListener, KeyListener{
        
        DrawGame(){
            super.setDoubleBuffered(true);
            gameThread = new Timer(5, this);
            gameThread.start();
            addKeyListener(this);
            setFocusable(true);
            setFocusTraversalKeysEnabled(false);
        }
        
        @Override
        public void paint(Graphics g){
            //-----Background-------//
            g.setColor(spaceColor);
            g.fillRect(0, 0, 1000, 800);
            
            //------Player's ship------//
                //Outlines
                g.setColor(whiteColor);
                g.drawOval(p.getX() - 20, p.getY() + 22, 10, 20);
                g.drawOval(p.getX() + 20, p.getY() + 22, 10, 20);
                g.drawOval(p.getX() - 25, p.getY() + 30, 60, 10);
                g.drawOval(p.getX() + 2, p.getY() + 8, 7, 10);
                g.drawOval(p.getX(), p.getY(), 10, 60);

                //engines
            g.setColor(pColor3);
            g.fillOval(p.getX() - 20, p.getY() + 22, 10, 20);
            g.fillOval(p.getX() + 20, p.getY() + 22, 10, 20);
                //wings
            g.setColor(pColor2);
            g.fillOval(p.getX() - 25, p.getY() + 30, 60, 10);
                //body
            g.setColor(pColor1);
            g.fillOval(p.getX(), p.getY(), 10, 60);
                //windsheild
            g.setColor(pColor3);
            g.fillOval(p.getX() + 2, p.getY() + 8, 7, 10);
            
            /*
            //Player Hitbox
            g.drawRect(p.getX() - 25, p.getY(), 60, 60);
            */
            
            //-----Astroids-----//
            //spawn moving asteroids
            g.setColor(whiteColor);
            g.fillOval(e1.getX(), e1.getY(), e1.getRadius(), e1.getRadius());
            g.fillOval(e2.getX(), e2.getY(), e2.getRadius(), e2.getRadius());
            g.fillOval(e3.getX(), e3.getY(), e3.getRadius(), e3.getRadius());
            g.fillOval(e4.getX(), e4.getY(), e4.getRadius(), e4.getRadius());
            g.fillOval(e5.getX(), e5.getY(), e5.getRadius(), e5.getRadius());
            g.fillOval(e6.getX(), e6.getY(), e6.getRadius(), e6.getRadius());
            g.fillOval(e7.getX(), e7.getY(), e7.getRadius(), e7.getRadius());
            g.fillOval(e8.getX(), e8.getY(), e8.getRadius(), e8.getRadius());
            g.fillOval(e9.getX(), e9.getY(), e9.getRadius(), e9.getRadius());
            g.fillOval(e10.getX(), e10.getY(), e10.getRadius(), e10.getRadius());
            g.fillOval(e11.getX(), e11.getY(), e11.getRadius(), e11.getRadius());
            g.fillOval(e12.getX(), e12.getY(), e12.getRadius(), e12.getRadius());
            g.fillOval(e13.getX(), e13.getY(), e13.getRadius(), e13.getRadius());
            g.fillOval(e14.getX(), e14.getY(), e14.getRadius(), e14.getRadius());
            g.fillOval(e15.getX(), e15.getY(), e15.getRadius(), e15.getRadius());
            g.fillOval(e16.getX(), e16.getY(), e16.getRadius(), e16.getRadius());
            g.fillOval(e17.getX(), e17.getY(), e17.getRadius(), e17.getRadius());
            g.fillOval(e18.getX(), e18.getY(), e18.getRadius(), e18.getRadius());
            g.fillOval(e19.getX(), e19.getY(), e19.getRadius(), e19.getRadius());
            g.fillOval(e20.getX(), e20.getY(), e20.getRadius(), e20.getRadius());
            
            //-----Score-----//
            g.setColor(pColor1);
            g.setFont(new Font("Tahoma", Font.BOLD, 30));
            g.drawString(Double.toString(p.getScore()), 475, 50);   
        }

        @Override
        public void actionPerformed(ActionEvent ae) {
            //-----Score-----//
            p.setScore(((double) System.currentTimeMillis() - start)/1000);
            
            //------Redrawing per frame-----//
            //redraw players
            p.setX(p.getX() + p.getXVel());
            p.setY(p.getY() + p.getYVel());
           
            //redraw dots
            redrawDots(e1);
            redrawDots(e2);
            redrawDots(e3);
            redrawDots(e4);
            redrawDots(e5);
            redrawDots(e6);
            redrawDots(e7);
            redrawDots(e8);
            redrawDots(e9);
            redrawDots(e10);
            redrawDots(e11);
            redrawDots(e12);
            redrawDots(e13);
            redrawDots(e14);
            redrawDots(e15);
            redrawDots(e16);
            redrawDots(e17);
            redrawDots(e18);
            redrawDots(e19);
            redrawDots(e20);
           
            //-----Allow enemies to bounce screen edge-----//
            makeDotsBounce(e1);
            makeDotsBounce(e2);
            makeDotsBounce(e3);
            makeDotsBounce(e4);
            makeDotsBounce(e5);
            makeDotsBounce(e6);
            makeDotsBounce(e7);
            makeDotsBounce(e8);
            makeDotsBounce(e9);
            makeDotsBounce(e10);
            makeDotsBounce(e11);
            makeDotsBounce(e12);
            makeDotsBounce(e13);
            makeDotsBounce(e14);
            makeDotsBounce(e15);
            makeDotsBounce(e16);
            makeDotsBounce(e17);
            makeDotsBounce(e18);
            makeDotsBounce(e19);
            makeDotsBounce(e20);
            
            
            //-----Keep the player io bounds-----//
            if(p.getX() < 0 + 30)
                p.setX(0 + 30);
            else if(p.getX() > 1000 - 50)
                p.setX(1000 - 50);
            
            if(p.getY() < 0)
                p.setY(0);
            else if(p.getY() > 800 - 100)
                p.setY(800 - 100);
            
            //-----Check if player has collided-----//
            checkCollisionWithDot(e1);
            checkCollisionWithDot(e2);
            checkCollisionWithDot(e3);
            checkCollisionWithDot(e4);
            checkCollisionWithDot(e5);
            checkCollisionWithDot(e6);
            checkCollisionWithDot(e7);
            checkCollisionWithDot(e8);
            checkCollisionWithDot(e9);
            checkCollisionWithDot(e10);
            checkCollisionWithDot(e11);
            checkCollisionWithDot(e12);
            checkCollisionWithDot(e13);
            checkCollisionWithDot(e14);
            checkCollisionWithDot(e15);
            checkCollisionWithDot(e16);
            checkCollisionWithDot(e17);
            checkCollisionWithDot(e18);
            checkCollisionWithDot(e19);
            checkCollisionWithDot(e20);

            repaint();
        }

        @Override
        public void keyTyped(KeyEvent ke) { }

        @Override
        public void keyPressed(KeyEvent ke) {
        int key = ke.getKeyCode();
            switch (key) {
                case KeyEvent.VK_W: //w
                    p.setYVel(-10);
                    break;
                case KeyEvent.VK_S: //s
                    p.setYVel(10);
                    break;
                case KeyEvent.VK_A: //a
                    p.setXVel(-10);
                    break;
                case KeyEvent.VK_D: //d
                    p.setXVel(10); 
                    break;    
            }
        }

        @Override
        public void keyReleased(KeyEvent ke) {
            if(ke.getKeyChar() == 'w' || ke.getKeyChar() == 's')
                p.setYVel(0);
            else if(ke.getKeyChar() == 'a' || ke.getKeyChar() == 'd')
                p.setXVel(0);
        }
    }
    
    
    GameGUI(){
        super("Dodging Dots");
        
        //-----Frame setup-----//
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new BorderLayout());
        this.setResizable(false);
        this.setSize(1000,800);
        this.setLocation(400,0);
        this.setVisible(false);
        
        //-----Draw Game----//
        this.add(new DrawGame(),BorderLayout.CENTER);
    }

    public void makeDotsBounce(EnemyDotsRealClass e){
        if(e.getX() + e.getRadius() <= 0 || e.getX() + e.getRadius() >= 1000)
                e.setXVel(e.getXVel() * -1);
        if(e.getY() + e.getRadius() <= 0 || e.getY() + e.getRadius() >= 800)
                e.setYVel(e.getYVel() * -1);
    }
    public void redrawDots(EnemyDotsRealClass e){
        e.setX(e.getX() + e.getXVel());
        e.setY(e.getY() + e.getYVel());
    }
    public void checkCollisionWithDot(EnemyDotsRealClass e){
        if(e.getRadius() + e.getX() >= p.getX() && e.getRadius() + e.getX() <= p.getX() + 30){
            if(e.getRadius() + e.getY() >= p.getY() && e.getRadius() + e.getY() <= p.getY() + 60){
                this.setVisible(false);                
                MainFrame menu = new MainFrame();
                menu.setVisible(true);
                try{
                    gameThread.stop();
                } catch(Exception error){
                    System.out.println("An error has occured trying to stop the game thread:\n" + error);
                }
                checkHighscores();
                JOptionPane.showMessageDialog(null, "GAME OVER\n Your score is: " + p.getScore());
            }
        }
    }
    public void checkHighscores(){
        try {
            String highscore1 = "";
            String highscore2 = "";
            String highscore3 = "";
            String line = "";
            
            File file = new File("DodgingDotsHighScores.txt");
            
            if(file.length() == 0){
                FileWriter fWriter = new FileWriter(file, false);
                BufferedWriter bWriter = new BufferedWriter(fWriter);
                System.out.println("File was empty");
                bWriter.write("0\n0\n0");
                bWriter.flush();
            }
            
            FileReader fReader = new FileReader(file);
            BufferedReader bReader = new BufferedReader(fReader);
            
            int counter = 1;
            while((line = bReader.readLine()) != null){
                if(counter == 1)
                   highscore1 = line;
                else if(counter == 2)
                   highscore2 = line;
                else
                   highscore3 = line;
                counter++;
            }
            
            if(p.getScore() > Double.parseDouble(highscore1)){
                highscore3 = highscore2;
                highscore2 = highscore1;
                highscore1 = Double.toString(p.getScore());
            } else if (p.getScore() > Double.parseDouble(highscore2)){
                //first = first;
                highscore3 = highscore2;
                highscore2 = Double.toString(p.getScore());
            } else if (p.getScore() > Double.parseDouble(highscore3)){
                //first = first
                //second = second
                highscore3 = Double.toString(p.getScore());
            }
            
            FileWriter fWriter = new FileWriter(file, false);
            BufferedWriter bWriter = new BufferedWriter(fWriter);
            
            bWriter.write(highscore1 + "\n");
            bWriter.write(highscore2 + "\n");
            bWriter.write(highscore3 + "\n");
            bWriter.flush();
            
            
            bWriter.close();
            bReader.close();
        } catch (Exception error) {
            System.out.println("An Error has occured while saving highschore\n" + error);
        }
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new GameGUI(); 
            }
        });
    }
}
