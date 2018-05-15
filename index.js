const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use Pug to render views
app.set('view engine', 'pug');

// Serve assets from the public folder
app.use(express.static('public'));

// Decode form data
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON body
app.use(bodyParser.json());

// Render the home page
app.get('/', (req, res) => {
    // Express will look for a page named homepage.pug
    // in the "views" folder so you should have a "views/homepage.pug" file
    res.render('homepage');

});

// Render the signup page
app.get('/:name', (req, res) => {
    // See above comment about render
    const choix1 = req.params.name;
    var choix2 = Math.random();

    if (choix2 < 0.34) {
        choix2 = "pierre";
    } else if(choix2 <= 0.67) {
        choix2 = "feuille";
    } else {

        choix2 = "ciseaux";
    } console.log("Ordinateur : " + choix2);
    console.log("Personne :" + choix1);

    var comparer = function(choix1, choix2) {
        if (choix1 === choix2) {
            return res.send('Egalité !');
        }

        else if (choix1 === "pierre") {

            if (choix2 === "ciseaux") {
                return res.send('pierre gagne !');
            }
            else {
                return res.send('feuille gagne !');
            }
        }

        else if (choix1 === "ciseaux") {

            if (choix2 === "pierre") {
                return res.send('pierre gagne !');
            }
            else {
                return res.send('ciseaux gagne !');
            }
        }

        else if (choix1 === "feuille") {

            if (choix2 === "ciseaux") {
                return res.send('ciseaux gagne !');
            }
            else {
                return res.send('feuille gagne !');
            }
        }
    };
    console.log(comparer(choix1,choix2));
    res.render('signup');
});


app.listen(3000);

