// creating an array and passing the number, questions, options anf answers
let questions = [
    {
        section: "Science and Tech Trivia Question 👨‍💻",
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Text Multi Language"
        ]
    },
    {
        section: "Science and Tech Trivia Question 👨‍💻",
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        section: "Science and Tech Trivia Question 👨‍💻",
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext programming",
            "Hypertext preprogramming",
            "Hypertext preprocessor"
        ]
    },
    {
        section: "Science and Tech Trivia Question 👨‍💻",
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },
    {
        section: "Science and Tech Trivia Question 👨‍💻",
        numb: 5,
        question: "What does XML stand for?",
        answer: "Extensible Markup Language",
        options: [
            "Extensible Markup Language",
            "Extensible Multiple Language",
            "Extra Multi Program Language",
            "Examine Multiple Language"
        ]
    },
    {
        section: "Science and Tech Trivia Question 👨‍💻",
        numb: 6,
        question: "Which popular company designed the first CPU? ",
        answer: "Intel",
        options: [
            "Intel",
            "AMD",
            "IBM",
            "Apple"
        ]
    },
    {
        section: "Science and Tech Trivia Question 👨‍💻",
        numb: 7,
        question: "What game console sold 514,000 units for Sega during its first two weeks in U.S. stores, in 1999? ",
        answer: "Dreamcast",
        options: [
            "Dreamcast",
            "Saturn",
            "Genesis",
            "Playstation"
        ]
    },
    {
        section: "Science and Tech Trivia Question 👨‍💻",
        numb: 8,
        question: "Who coined the term “virtual reality”? ",
        answer: "Jaron Lanier",
        options: [
            "Jaron Lanier",
            "William Gibson",
            "Kevin Kelly",
            "Alan Turing"
        ]
    },
    {
        section: "Science and Tech Trivia Question 👨‍💻",
        numb: 9,
        question: "The hottest place in the universe is located in which constellation? ",
        answer: "The constellation Virgo",
        options: [
            "The constellation Virgo",
            "Orion",
            "Andromela",
            "Centaurus"
        ]
    },
    {
        section: "Science and Tech Trivia Question 👨‍💻",
        numb: 10,
        question: "How old is the universe in years, plus or minus 1 billion years? ",
        answer: "13.8 billion years old",
        options: [
            "10 billion years old",
            "15 bilion years old",
            "5 billion years old",
            "13.8 billion years old"
        ]
    },
    {
        section: "Food Trivia Question 🍘",
        numb: 11,
        question: "What was the first food eaten in space?",
        answer: "Apple sauce",
        options: [
            "Apple sauce",
            "Freeze-dried ice cream",
            "Beef stew",
            "Tang"
        ]
    },
    {
        section: "Food Trivia Question 🍘",
        numb: 12,
        question: "What is the most frequently ordered item of food in the USA?",
        answer: "Fried chicken",
        options: [
            "Pizza",
            "Burgers",
            "Fried chicken",
            "Tacos"
        ]
    },
    {
        section: "Food Trivia Question 🍘",
        numb: 13,
        question: "Which fast food outlet has the largest number of restaurants in the world?",
        answer: "Subway",
        options: [
            "McDonald's",
            "Subway",
            "KFC",
            "Burger King"
        ]
    },
    {
        section: "Food Trivia Question 🍘",
        numb: 14,
        question: "Which is the only edible food that never goes bad?",
        answer: " Honey",
        options: [
            "Salt",
            "Dried beans",
            "Soy sauce",
            "Honey"
        ]
    },
    {
        section: "Food Trivia Question 🍘",
        numb: 15,
        question: "How do you know if cranberries are ripe?",
        answer: "They bounce like rubber balls",
        options: [
            "They turn a deep red color",
            "They bounce like rubber balls",
            "They have a sweet smell",
            "They float in water"
        ]
    },
    {
        section: "Food Trivia Question 🍘",
        numb: 16,
        question: "What is the most stolen food in the world? ",
        answer: "Cheese",
        options: [
            "Chocolate",
            "Bread",
            "Cheese",
            "Apples"
        ]
    },
    {
        section: "Food Trivia Question 🍘",
        numb: 17,
        question: "What was the first soft drink in space?",
        answer: "Coca Cola",
        options: [
            "Coca Cola",
            "Pepsi",
            "Sprite",
            "Dr. Pepper"
        ]
    },
    {
        section: "Food Trivia Question 🍘",
        numb: 18,
        question: "Which Mexican food has a name meaning “Little Donkey”?",
        answer: "Burrito",
        options: [
            "Quesadilla",
            "Enchilada",
            "Taco",
            "Burrito"
        ]
    },
    {
        section: "Food Trivia Question 🍘",
        numb: 19,
        question: "Which country invented ice cream?",
        answer: "China",
        options: [
            "Italy",
            "Greece",
            "China",
            "France"
        ]
    },
    {
        section: "Food Trivia Question 🍘",
        numb: 20,
        question: "What is the most consumed manufactured drink in the world?",
        answer: "Tea",
        options: [
            "Coffee",
            "Orange juice",
            "Tea",
            "Soft drinks"
        ]
    },
    {
        section: "Nature Trivia Question 🌴",
        numb: 21,
        question: "Which gas forms 80% of Earth's atmosphere?",
        answer: "Nitrogen",
        options: [
            "Oxygen",
            "Argon",
            "Nitrogen",
            "Carbon Dioxide"
        ]
    },
    {
        section: "Nature Trivia Question 🌴",
        numb: 22,
        question: "What is a female alligator called?",
        answer: "Cow",
        options: [
            "Sow",
            "Gatoress",
            "Hen",
            "Cow"
        ]
    },
    {
        section: "Nature Trivia Question 🌴",
        numb: 23,
        question: "How many toes does a cat have on each front paw?",
        answer: "Five",
        options: [
            "Four",
            "Six",
            "Five",
            "Three"
        ]
    },
    {
        section: "Nature Trivia Question 🌴",
        numb: 24,
        question: "Which is the fastest moving land snake in the world?",
        answer: "Black Mamba",
        options: [
            "King Cobra",
            "Black Mamba",
            "Pit Viper",
            "Coral Snake"
        ]
    },
    {
        section: "Nature Trivia Question 🌴",
        numb: 25,
        question: "Delphinus delphis is the scientific name for which creature?",
        answer: "Dolphin",
        options: [
            "Poerpoise",
            "Dolphin",
            "Manatee",
            "Sea Lion"
        ]
    },
    {
        section: "Nature Trivia Question 🌴",
        numb: 26,
        question: "What country has coastlines on BOTH the Atlantic and Pacific oceans?",
        answer: "Nicaragua",
        options: [
            "Nicaragua",
            "Panama",
            "Chile",
            "Colombia"
        ]
    },
    {
        section: "Nature Trivia Question 🌴",
        numb: 27,
        question: "How long could avocados stay ripe on the trees before they die or need to be harvested?",
        answer: "8 months",
        options: [
            "3 months",
            "6 months",
            "8 months",
            "1 year"
        ]
    },
    {
        section: "Nature Trivia Question 🌴",
        numb: 28,
        question: "What is “cynophobia”?",
        answer: "Fear of dogs",
        options: [
            "Fear of cats",
            "Fear of spiders",
            "Fear of clowns",
            "Fear of dogs"
        ]
    },
    {
        section: "Nature Trivia Question 🌴",
        numb: 29,
        question: "Banana plants are related to which of the following flowers?",
        answer: "Birds of Paradise",
        options: [
            "Lilies",
            "Orchids",
            "Birds of Paradise",
            "Tulips"
        ]
    },
    {
        section: "Nature Trivia Question 🌴",
        numb: 30,
        question: "Saffron, an expensive spice originated from Iran, is derived from which flower?",
        answer: "Crocus",
        options: [
            "Rose",
            "Lily",
            "Crocus",
            "Sunflower"
        ]
    },
    {
        section: "Health Trivia Question 👩‍⚕️",
        numb: 31,
        question: "Question: Which human organ can regenerate itself?",
        answer: "Liver",
        options: [
            "Liver",
            "Heart",
            "Lung",
            "Skin"
        ]
    },
    {
        section: "Health Trivia Question 👩‍⚕️",
        numb: 32,
        question: "What do doctors look at through an ophthalmoscope?",
        answer: "The eye",
        options: [
            "The ear",
            "The throat",
            "The eye",
            "The nose"
        ]
    },
    {
        section: "Health Trivia Question 👩‍⚕️",
        numb: 33,
        question: "How much does the average human head weigh?",
        answer: "5kg / 11lbs",
        options: [
            "3kg / 6.6lbs",
            "7kg / 15lbs",
            "4kg / 8.8lbs",
            "5kg / 11lbs"
        ]
    },
    {
        section: "Health Trivia Question 👩‍⚕️",
        numb: 34,
        question: " What syndrome does SIDS mean to childcare experts?",
        answer: "Sudden Infant Death Syndrome",
        options: [
            "Severe infant Developmental Syndrome",
            "Sudden Infant Death Syndrome",
            "Severe infant Death Syndrome",
            "Sudden infant Disorder Syndrome"
        ]
    },
    {
        section: "Health Trivia Question 👩‍⚕️",
        numb: 35,
        question: "Who was the cofounder of modern neurology who greatly influenced a student named Sigmund Freud?",
        answer: "Jean-Martin Charcot",
        options: [
            "Carl Jung",
            "Paul Brocs",
            "Emil Krapelin",
            "Jean-Martin Charcot"
        ]
    },
    {
        section: "Health Trivia Question 👩‍⚕️",
        numb: 36,
        question: "What is the full name of the medical scanning technique called PET?",
        answer: "Positron Emission Tomography",
        options: [
            "Positron Emission Tomography",
            "Proton Emission Tomography",
            "Positron Emission Tomography",
            "Physical Emission Tomography"
        ]
    },
    {
        section: "Health Trivia Question 👩‍⚕️",
        numb: 37,
        question: "A person with diabetes produces an insufficient amount of what in the body?",
        answer: "Insulin",
        options: [
            "Glucose",
            "Insulin",
            "Hemoglobin",
            "Insulin"
        ]
    },
    {
        section: "Health Trivia Question 👩‍⚕️",
        numb: 38,
        question: "What are the small spots called occasionally seen in your field of vision?",
        answer: "Floaters",
        options: [
            "Sparks",
            "Halos",
            "Floaters",
            "Shadows"
        ]
    },
    {
        section: "Health Trivia Question 👩‍⚕️",
        numb: 39,
        question: "Which area of the body has the largest bone? ",
        answer: "Leg",
        options: [
            "Arm",
            "Spine",
            "Leg",
            "Skull"
        ]
    },
    {
        section: "Health Trivia Question 👩‍⚕️",
        numb: 40,
        question: "What is the more common term for odontalgia?",
        answer: "Toothache",
        options: [
            "Toothache",
            "Gum disease",
            "Teethache",
            "Tooth decay"
        ]
    },
    {
        section: "Entertainment Trivia Question 🎵",
        numb: 41,
        question: "Who was the fictional character Shrek marries in his titular film series?",
        answer: "Princess Fiona",
        options: [
            "Princess Aurora",
            "Queen Elsa",
            "Princess Fiona",
            "Lady Fiona"
        ]
    },
    {
        section: "Entertainment Trivia Question 🎵",
        numb: 42,
        question: "Who is the famous author of the Harry Potter book series?",
        answer: "J.K. Rowling",
        options: [
            "J.R.R Tolkien",
            "C.S Lewis",
            "Suzanne Collins",
            "J.K. Rowling"
        ]
    },
    {
        section: "Entertainment Trivia Question 🎵",
        numb: 43,
        question: "What is the name of the courtesan played by Nicole Kidman in Moulin Rouge?",
        answer: "Satine",
        options: [
            "Roxanne",
            "Desire",
            "Lola",
            "Satine"
        ]
    },
    {
        section: "Entertainment Trivia Question 🎵",
        numb: 44,
        question: "Who played park owner John Hammond in Jurassic Park? ",
        answer: "Richard Attenborough",
        options: [
            "Richard Attenborough",
            "Sean Connery",
            "Anthony Hopkins",
            "Michael Caine"
        ]
    },
    {
        section: "Entertainment Trivia Question 🎵",
        numb: 45,
        question: "In what 1976 thriller does Robert De Niro famously say, “You talkin' to me?” ",
        answer: "Taxi Driver",
        options: [
            "Raging BUll",
            "The Godfather",
            "Taxi Driver",
            "Goodfellas"
        ]
    }, 
    {
        section: "Entertainment Trivia Question 🎵",
        numb: 46,
        question: "What's the name of the anthemic dance near the beginning of The Rocky Horror Picture Show? ",
        answer: "The Time Warp",
        options: [
            "The Twist",
            "The Cha-Cha",
            "The Time Warp",
            "The Mashed Potato"
        ]
    },
    {
        section: "Entertainment Trivia Question 🎵",
        numb: 47,
        question: "What's the name of the skyscraper in Die Hard?",
        answer: "Nakatomi Plaza ",
        options: [
            "Empire State Building",
            "Nakatomi Plaza ",
            "Sears Tower",
            "Wills Tower"
        ]
    },
    {
        section: "Entertainment Trivia Question 🎵",
        numb: 48,
        question: "What was the first feature-length animated movie ever released?",
        answer: "Snow White and the Seven Dwarfs",
        options: [
            "Snow White and the Seven Dwarfs",
            "Pinocchio",
            "Dumbo",
            "Bambi"
        ]
    },
    {
        section: "Entertainment Trivia Question 🎵",
        numb: 49,
        question: "In The Matrix, does Neo take the blue pill or the red pill?",
        answer: "Red",
        options: [
            "Blue",
            "Green",
            "Yellow",
            "Red"
        ]
    },
    {
        section: "Entertainment Trivia Question 🎵",
        numb: 50,
        question: "Who played Juror Number 8 in 12 Angry Men?",
        answer: "Henry Fonda",
        options: [
            "Gregory Peck",
            "Henry Fonda",
            "Marlon Brando",
            "James Stewart"
        ]
    }
];