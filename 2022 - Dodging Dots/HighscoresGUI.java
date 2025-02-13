import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;
import java.io.*;

public class HighscoresGUI extends JFrame implements ActionListener{
    private Color spaceColor = Color.decode("#1d1135");
    private Color textColor = Color.decode("#fcfbfe");
    private Color borderColor = Color.decode("#5643fd");
    private Color pColor1 = Color.decode("#ba1e58");
    private Color pColor2 = Color.decode("#5643fd");
    private Color pColor3 = Color.decode("#0c164f");
    
    private JButton btnBack;
    
    private class DrawLeaderboard extends JPanel{
        @Override
        public void paint(Graphics g) {
            super.paintComponent(g);
            
            //-----Draw static components-----//
            //set backgtround color
            g.setColor(spaceColor);
            g.fillRect(0, 0, 1000, 800);
            
            //Draw borders
            g.setColor(borderColor);
            g.drawRoundRect(250, 190, 500, 150, 50, 50);
            g.drawRoundRect(250, 190 + 175, 500, 150, 50, 50);
            g.drawRoundRect(250, 190 + 350, 500, 150, 50, 50);
            //Draw labels
            g.setColor(textColor);
                //title
            g.setFont(new Font("Tahoma", Font.BOLD, 50));
            g.drawString("HIGHSCORES", 335, 115);
                //ranking
            g.setFont(new Font("Tahoma", Font.BOLD, 30));
            g.setColor(pColor2);
            g.drawString("1ST", 290, 275);
            g.drawString("2ND", 290, 275 + 175);
            g.drawString("3RD", 290, 275 + 350);
                //bars
            g.setColor(pColor3);
            g.fillRoundRect(380, 220, 5, 100, 5, 5);
            g.fillRoundRect(380, 220 + 175, 5, 100, 5, 5);
            g.fillRoundRect(380, 220 + 350, 5, 100, 5, 5);
            
            
            //-----Read from highscore file-----//
            g.setColor(pColor1);
            try{
                String highscore1 = "";
                String highscore2 = "";
                String highscore3 = "";
                String line = "";

                File file = new File("DodgingDotsHighScores.txt");
                
                //If the file is empty fill in with 0
                if(file.length() == 0){
                    FileWriter fWriter = new FileWriter(file, false);
                    BufferedWriter bWriter = new BufferedWriter(fWriter);
                    System.out.println("File was empty");
                    bWriter.write("0\n0\n0");
                    bWriter.flush();
                    bWriter.close();
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
                
                g.drawString(highscore1, 500, 275);
                g.drawString(highscore2, 500, 275 + 175);
                g.drawString(highscore3, 500, 275 + 350);
                
                bReader.close();
            } catch(Exception error){
                System.out.println("An Error has occured while saving highschore\n" + error);
            }
        }
    }
    
    HighscoresGUI(){
        super("Dodging Dots - HIGHSCORES");
        
        btnBack = new JButton("Back to MENU");
        btnBack.setBackground(spaceColor);
        btnBack.setForeground(textColor);
        btnBack.setFont(new Font("Tahoma", Font.BOLD, 30));
        btnBack.setFocusable(false);
        btnBack.addActionListener(this);
        
         //-----Frame setup-----
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new BorderLayout());
        this.setResizable(false);
        this.setSize(1000,800);
        this.setLocation(400,0);
        this.setVisible(false);

        //-----Draw Components-----
        this.add(new DrawLeaderboard(), BorderLayout.CENTER);
        this.add(btnBack, BorderLayout.SOUTH);
    }
    
    @Override
    public void actionPerformed(ActionEvent ae) {
        if (ae.getSource() == btnBack){
            this.setVisible(false);
            MainFrame menu = new MainFrame();
        }
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new HighscoresGUI(); 
            }
        });
    }
}
