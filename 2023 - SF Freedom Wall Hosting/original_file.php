<!DOCTYPE html>
<html lang="en">
<?php
    if(array_key_exists('submit', $_POST)) {
        $cn = $_POST['cName'];
        $cn = strtoupper($cn);
        $vcn = strtolower($cn);

        $mes = $_POST['cnMessage'];
        $vmes = strtolower($mes);
        $badWords = array(
            "ahole",
            "anus",
            "ash0le",
            "ash0les",
            "asholes",
            "ass",
            "assface",
            "assh0le",
            "assh0lez",
            "asshole",
            "assholes",
            "assholz",
            "asswipe",
            "azzhole",
            "bassterds",
            "bastard",
            "bastards",
            "bastardz",
            "basterds",
            "basterdz",
            "biatch",
            "bitch",
            "bitches",
            "blow Job",
            "boffing",
            "butthole",
            "buttwipe",
            "c0ck",
            "c0cks",
            "c0k",
            "cawk",
            "cawks",
            "clit",
            "cnts",
            "cntz",
            "cock",
            "cockhead",
            "cock-head",
            "cocks",
            "cocksucker",
            "cock-sucker",
            "crap",
            "cum",
            "cunt",
            "cunts",
            "cuntz",
            "dick",
            "dild0",
            "dild0s",
            "dildo",
            "dildos",
            "dilld0",
            "dilld0s",
            "dominatricks",
            "dominatrics",
            "dominatrix",
            "dyke",
            "enema",
            "fag",
            "fag1t",
            "faget",
            "fagg1t",
            "faggit",
            "faggot",
            "fagg0t",
            "fagit",
            "fags",
            "fagz",
            "faig",
            "faigs",
            "fart",
            "fuck",
            "fucker",
            "fuckin",
            "fucking",
            "fucks",
            "Fudge Packer",
            "fuk",
            "Fukah",
            "Fuken",
            "fuker",
            "Fukin",
            "Fukk",
            "Fukkah",
            "Fukken",
            "Fukker",
            "Fukkin",
            "g00k",
            "god-damned",
            "h00r",
            "h0ar",
            "h0re",
            "hells",
            "hoar",
            "hoor",
            "hoore",
            "jackoff",
            "jap",
            "japs",
            "jerk-off",
            "jisim",
            "jiss",
            "jizm",
            "jizz",
            "knob",
            "knobs",
            "knobz",
            "kunt",
            "kunts",
            "kuntz",
            "lezzian",
            "lipshits",
            "lipshitz",
            "masochist",
            "masokist",
            "massterbait",
            "masstrbait",
            "masstrbate",
            "masterbaiter",
            "masterbate",
            "masterbates",
            "mother-fucker",
            "n1gr",
            "nastt",
            "nigger;",
            "nigur;",
            "niiger;",
            "niigr;",
            "orafis",
            "orgasim;",
            "orgasm",
            "orgasum",
            "oriface",
            "orifice",
            "orifiss",
            "packi",
            "packie",
            "packy",
            "paki",
            "pakie",
            "paky",
            "pecker",
            "peeenus",
            "peeenusss",
            "peenus",
            "peinus",
            "pen1s",
            "penas",
            "penis",
            "penis-breath",
            "penus",
            "penuus",
            "phuc",
            "phuck",
            "phuk",
            "phuker",
            "phukker",
            "polac",
            "polack",
            "polak",
            "poonani",
            "pr1c",
            "pr1ck",
            "pr1k",
            "pusse",
            "pussee",
            "pussy",
            "puuke",
            "puuker",
            "qweir",
            "recktum",
            "rectum",
            "retard",
            "sadist",
            "scank",
            "schlong",
            "screwing",
            "semen",
            "sex",
            "sexy",
            "sh!t",
            "sh1t",
            "sh1ter",
            "sh1ts",
            "sh1tter",
            "sh1tz",
            "shit",
            "shits",
            "shitter",
            "shitty",
            "shity",
            "shitz",
            "shyt",
            "shyte",
            "shytty",
            "shyty",
            "skanck",
            "skank",
            "skankee",
            "skankey",
            "skanks",
            "skanky",
            "slag",
            "slut",
            "sluts",
            "slutty",
            "slutz",
            "son-of-a-bitch",
            "tit",
            "turd",
            "va1jina",
            "vag1na",
            "vagiina",
            "vagina",
            "vaj1na",
            "vajina",
            "vullva",
            "vulva",
            "w0p",
            "wh00r",
            "wh0re",
            "whore",
            "xrated",
            "xxx",
            "b!+ch",
            "bitch",
            "blowjob",
            "clit",
            "arschloch",
            "fuck",
            "shit",
            "ass",
            "asshole",
            "b!tch",
            "b17ch",
            "b1tch",
            "bastard",
            "bi+ch",
            "boiolas",
            "buceta",
            "c0ck",
            "cawk",
            "chink",
            "cipa",
            "clits",
            "cock",
            "cum",
            "cunt",
            "dildo",
            "dirsa",
            "ejakulate",
            "fatass",
            "fcuk",
            "fuk",
            "fux0r",
            "hoer",
            "hore",
            "jism",
            "kawk",
            "l3itch",
            "l3i+ch",
            "masturbate",
            "masterbat*",
            "masterbat3",
            "motherfucker",
            "s.o.b.",
            "mofo",
            "nazi",
            "nigga",
            "nigger",
            "nutsack",
            "phuck",
            "pimpis",
            "pusse",
            "pussy",
            "scrotum",
            "sh!t",
            "shemale",
            "shi+",
            "sh!+",
            "slut",
            "smut",
            "teets",
            "tits",
            "boobs",
            "b00bs",
            "teez",
            "testical",
            "testicle",
            "titt",
            "w00se",
            "jackoff",
            "wank",
            "whoar",
            "whore",
            "*damn",
            "*dyke",
            "*fuck*",
            "*shit*",
            "@$$",
            "amcik",
            "andskota",
            "arse*",
            "assrammer",
            "ayir",
            "bi7ch",
            "bitch*",
            "bollock*",
            "breasts",
            "butt-pirate",
            "cabron",
            "cazzo",
            "chraa",
            "chuj",
            "Cock*",
            "cunt*",
            "d4mn",
            "daygo",
            "dego",
            "dick*",
            "dike*",
            "dupa",
            "dziwka",
            "ejackulate",
            "ekrem*",
            "ekto",
            "enculer",
            "faen",
            "fag*",
            "fanculo",
            "fanny",
            "feces",
            "feg",
            "felcher",
            "ficken",
            "fitt*",
            "flikker",
            "foreskin",
            "fotze",
            "fu(*",
            "fuk*",
            "futkretzn",
            "gook",
            "guiena",
            "h0r",
            "h4x0r",
            "hell",
            "helvete",
            "hoer*",
            "honkey",
            "huevon",
            "hui",
            "injun",
            "jizz",
            "kanker*",
            "kike",
            "klootzak",
            "kraut",
            "knulle",
            "kuk",
            "kuksuger",
            "kurac",
            "kurwa",
            "kusi*",
            "kyrpa*",
            "lesbo",
            "mamhoon",
            "masturbat*",
            "merd*",
            "mibun",
            "monkleigh",
            "mouliewop",
            "muie",
            "mulkku",
            "muschi",
            "nazis",
            "nepesaurio",
            "nigger*",
            "orospu",
            "paska*",
            "perse",
            "picka",
            "pierdol*",
            "pillu*",
            "pimmel",
            "piss*",
            "pizda",
            "poontsee",
            "poop",
            "porn",
            "p0rn",
            "pr0n",
            "preteen",
            "pula",
            "pule",
            "puta",
            "puto",
            "qahbeh",
            "queef*",
            "rautenberg",
            "schaffer",
            "scheiss*",
            "schlampe",
            "schmuck",
            "screw",
            "sh!t*",
            "sharmuta",
            "sharmute",
            "shipal",
            "shiz",
            "skribz",
            "skurwysyn",
            "sphencter",
            "spic", "spierdalaj","splooge", "suka", "b00b*", "testicle*", "titt*", "twat", "vittu", "wank*", "wetback*", "wichser", "wop*", "yed", "zabourah",
            "amputa","bilat","binibrocha","bobo","bogo","brocha","burat","bwesit","bwisit","engot","etits","gago","habal", "hinampak","hinayupak","hindot","hindutan","hudas","iniyot","inutel","inutil","iyot","kagaguhan","kagang","kantot","kantotan", "kantutin","kantut","kantutan","kaululan","kayat","kiki","kikinginamo","kingina","kupal","leche","leching","lechugas","lintik","nakakaburat","nimal","ogag","olok","pakingshet","pakshet","pakyu","poke","poki","pokpok","poyet","pu'keng","pucha","puchanggala","puchangina","puke","puki","pukinangina","puking","punyeta","puta","putang","putangina","putanginamo","putaragis","putragis","puyet","ratbu","shunga","siraulo","suso","susu","tae","taena","tamod","tanga","tangina","taragis","tarantado","tete","teti","timang","tinil","tite","titi","tungaw","ulol","ulul","ungas","yawa","ngayawa","bisakol","pisti","piste","pitoy","pototoy","pututuy","bbm", "bongbong", "marcos", "maraksot","jologs", "pistengyawa", "eroy", "iroy","pota", "panulai"
        );   

        $arrayMessage = explode(" ", $vmes);
        $arrayName = explode(" ", $vcn);
        $i = 0;
        $profanity = false; 

        while ($i < count($arrayMessage)){
            $p = 0;
            
            while ($p < count($badWords)){
              if($arrayMessage[$i] == $badWords[$p] && isset($badWords[$p])){
                $profanity = true;
                break;
              }
              
              $p++;
            }
            
            if($arrayMessage[$i] == $badWords[--$p]){
                break;
            }
            
            $i++;
        }

        $i = 0;

        while ($i < count($arrayName)){
            $p = 0;
            
            while ($p < count($badWords)  && isset($badWords[$p])){
              if($arrayName[$i] == $badWords[$p] && isset($badWords[$p])){
                $profanity = true;
                break;
              }
              
              $p++;
            }
            
            if($arrayName[$i] == $badWords[--$p]){
                break;
            }
            
            $i++;
        }

        

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (empty($cn) || empty($mes)) {
                echo "<script> alert('Please enter all fields!'); </script>";
                
            } 

            elseif ($profanity == true){
                echo "<script> alert('Please be reminded to be respectful at all times<3'); </script>";
                
                $profanity = false;
            }

            else {

              mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // report errors

                // variables
                if(isset($_POST['cName'])){
                    echo "<script>alert('hi')</script>";


                // data to connect to local host
                $servername = 'localhost';
                $username = 'root';
                $dbname = 'sffreedomwall';
                $password = '';

                // connect to local host
                $conn = new mysqli($servername, $username, $password, $dbname);

                // check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                // variable to insert data from user
                $ins = "INSERT INTO freedomwall (codeName, cnMessage) VALUES (?, ?)";

                // prepare connection --> convert to sql can understand
                $ins = $conn->prepare($ins);

                // parameters on data it can accept
                $ins->bind_param("ss", $cn , $mes);

                // execute the connection
                $ins->execute();

                // close database connection
                $conn->close();     
                header("location:freedomwall.php");
                unset($_POST['cName']);
                unset($_POST['cnMessage']);
                }
    
            }

        }
    
    }
    
?> 



<script>
 //=============VARIABLE=============


</script>




</html>