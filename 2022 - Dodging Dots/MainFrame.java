import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.border.*;

public class MainFrame extends JFrame implements ActionListener{
    private JPanel titlePanel, optionsPanel;
    private JButton btnPlay, btnHighscores, btnHowToPlay;
    private JLabel title;
    private JLabel null1, null2, null3, null4, null5, null6, null7;
    private Color spaceColor = Color.decode("#1d1135");
    private Color textColor = Color.decode("#fcfbfe");
    private Color btnColor = Color.decode("#5643fd");
    
    
    MainFrame(){
        super("Dodging Dots - MENU");

        titlePanel = new JPanel();
        optionsPanel = new JPanel();
        
        titlePanel.setBackground(spaceColor);
        optionsPanel.setBackground(spaceColor);

        //title
        title = new JLabel("DODGING DOTS");
        title.setFont(new Font("Tahoma", Font.BOLD, 40));
        Border border = title.getBorder();
        Border margin;
        margin = new EmptyBorder(100,10,80,10);
        title.setBorder(new CompoundBorder(border, margin));
        title.setForeground(textColor);
        titlePanel.add(title);
        
        //----Options Panel-----//
        //Buttons
        btnPlay = new JButton("PLAY");
        btnHighscores = new JButton("HIGHSCHORES");
        btnHowToPlay = new JButton("HOW TO PLAY");
            //Styling
        btnPlay.setFocusable(false);
        btnHighscores.setFocusable(false);
        btnHowToPlay.setFocusable(false);
        
        btnPlay.setBackground(btnColor);
        btnHighscores.setBackground(btnColor);
        btnHowToPlay.setBackground(btnColor);
        
        btnPlay.setForeground(textColor);
        btnHighscores.setForeground(textColor);
        btnHowToPlay.setForeground(textColor);
        
        btnPlay.setFont(new Font("Helvetica", Font.BOLD,20));
        btnHighscores.setFont(new Font("Helvetica", Font.BOLD,20));
        btnHowToPlay.setFont(new Font("Helvetica", Font.BOLD,20));
            //Adding ActionListener
        btnPlay.addActionListener(this);
        btnHighscores.addActionListener(this);
        btnHowToPlay.addActionListener(this);
        
        //Spaces for the options panel
        null1 = new JLabel("");
        null2 = new JLabel("");
        null3 = new JLabel("");
        null4 = new JLabel("");
        null5 = new JLabel("");
        null6 = new JLabel("");
        null7 = new JLabel("");
        
        //options panel
        optionsPanel.setLayout(new GridLayout(4,3,20,50));
        optionsPanel.add(null1);
        optionsPanel.add(btnPlay);
        optionsPanel.add(null2);
        
        optionsPanel.add(null3);
        optionsPanel.add(btnHighscores);
        optionsPanel.add(null4);
        
        optionsPanel.add(null5);
        optionsPanel.add(btnHowToPlay);
        optionsPanel.add(null6);
        
        optionsPanel.add(null7);
        
        //-----Frame setup-----//
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new BorderLayout());
        this.setResizable(false);
        this.setSize(1000,800);
        this.setLocation(400,0);
        this.setVisible(true);
        
        //-----Add Frame Components-----//
        this.add(titlePanel, BorderLayout.NORTH);
        this.add(optionsPanel, BorderLayout.CENTER);
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
        @Override
        public void run() {
            new MainFrame(); 
        }
        });
    }

    @Override
    public void actionPerformed(ActionEvent ae) {
        if (ae.getSource() == btnPlay){
            System.out.println("Opening Game...");
            GameGUI gameWindow = new GameGUI();
            gameWindow.setVisible(true);
            this.setVisible(false);
        } else if (ae.getSource() == btnHighscores){
            System.out.println("Opening Leaderboard...");
            HighscoresGUI highscoreWindow = new HighscoresGUI();
            highscoreWindow.setVisible(true);
            this.setVisible(false);
        } else if (ae.getSource() == btnHowToPlay){
            System.out.println("Displaying Instructions...");
            JOptionPane.showMessageDialog(null, "Use W-A-S-D to move and DODGE THE DOTS!");
        }
        
    }
}
