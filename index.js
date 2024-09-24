const quizData = [
    {
        question: "বাংলাদেশে জুলাই ও আগস্ট বিদ্রোহ (২০২৪) কখন শুরু হয়েছিল?",
        choices: ["৫ জুলাই, ২০২৪", "১০ জুলাই, ২০২৪", "১৫ জুলাই, ২০২৪", "২০ জুলাই, ২০২৪"],
        correct: 2
    },
    {
        question: "বাংলাদেশে জুলাই ও আগস্ট বিদ্রোহের প্রধান কারণ কী ছিল?",
        choices: ["নির্বাচনী জালিয়াতি", "দুর্নীতির অভিযোগ", "মুদ্রাস্ফীতি", "সরকারী চাকুরীতে কোটা বৈষম্য"],
        correct: 3
    },
    {
        question: "জুলাই ও আগস্ট বিদ্রোহের সময় কোন গোষ্ঠী সবচেয়ে সক্রিয় ছিল?",
        choices: ["রাজনৈতিক বিরোধী  দলগুলো", "ছাত্র এবং জনতা", "কৃষক সংগঠন", "শ্রমিক ইউনিয়ন"],
        correct: 1
    },
    {
        question: "২০২৪ সালে জুলাই ও আগস্ট বিদ্রোহের সময় বাংলাদেশের প্রধানমন্ত্রী কে ছিলেন?",
        choices: ["শেখ হাসিনা", "খালেদা জিয়া", "ওবায়দুল কাদের", "আবদুল হামিদ"],
        correct: 0
    },
    {
        question: "জুলাই ও আগস্ট বিদ্রোহের প্রাথমিক প্রতিবাদগুলির প্রতি সরকারের প্রতিক্রিয়া কী ছিল?",
        choices: ["পূর্ণ সামরিক অভিযান", "প্রতিবাদ নেতাদের সাথে সংলাপ", "কঠোর দমন নীতি", "নিরাপত্তা বৃদ্ধি এবং কারফিউ"],
        correct: 2
    },
    {
        question: "জুলাই ও আগস্ট বিদ্রোহের সময় কোন শহরটি সবচেয়ে বেশি বিক্ষোভের কেন্দ্রবিন্দু ছিল?",
        choices: ["খুলনা", "ঢাকা ", "সিলেট", "রাজশাহী"],
        correct: 1
    },
    {
        question: "জুলাই ও আগস্ট বিদ্রোহে আন্তর্জাতিক সম্প্রদায়ের প্রতিক্রিয়া কী ছিল?",
        choices: ["নিরপেক্ষ অবস্থান গ্রহণ", "বাংলাদেশ সরকারকে পূর্ণ সমর্থন", "প্রতিবাদকারীদের প্রতি সমর্থন", "মানবিক সহায়তার জন্য আহ্বান"],
        correct: 0
    },
    {
        question: "জুলাই ও আগস্ট বিদ্রোহের ১ দফা কি ছিল?",
        choices: ["শিক্ষা ব্যবস্থার সংস্কার", "সাংবিধানিক সংশোধনী", "সরকারি বাজেট পুনর্বণ্টন", "প্রধানমন্ত্রীর অবিলম্বে পদত্যাগ"],
        correct: 3
    },
    {
        question: "জুলাই ও আগস্ট বিদ্রোহের `রোড মার্চ ফর ঢাকা কত` তারিখে দেওয়া হইছিলো?",
        choices: ["৫ আগস্ট, ২০২৪", "১ আগস্ট, ২০২৪", "১৫ আগস্ট, ২০২৪", "২২ আগস্ট, ২০২৪"],
        correct: 0
    },
    {
        question: "জুলাই ও আগস্ট বিদ্রোহের ফলাফল কী হয়েছিল?",
        choices: ["প্রতিবাদ নেতাদের সাথে সংলাপ", "বিরোধী দল সংসদের নিয়ন্ত্রণ নেয়", "সামরিক শাসন ঘোষণা করা হয়", "প্রধানমন্ত্রীর পদত্যাগ"],
        correct: 3
    },
]


let currentquestion = 0;
let score = 0;

function loadQuestion() {
    let currentQuestionData = quizData[currentquestion];
    // add question title
    document.getElementById("question").textContent = currentquestion + 1 + ") " + currentQuestionData.question;

    let choices = document.querySelectorAll(".choice")
    choices.forEach((choice, index) => {
        choice.textContent= currentQuestionData.choices[index];
        choice.style.background = "aqua"
        choice.disabled = false
    })
    document.getElementById("nextbutton").style.display = "none";
}

function selectAnswer(index){
    let currentQuestionData = quizData[currentquestion];
    let choices = document.querySelectorAll(".choice")

    if(index === currentQuestionData.correct){
        score++
        choices[index].style.backgroundColor = "#2af659"
    } else {
        choices[index].style.backgroundColor = "#fd1515"
        choices[currentQuestionData.correct].style.backgroundColor = "#2af659"
    }

    choices.forEach((choice) => {
        choice.disabled = true;
    })

    document.getElementById("nextbutton").style.display = "block";
}

function nextQuestion() {
    currentquestion++
    if(currentquestion < quizData.length){
        loadQuestion()
    } else {
        showScore()
    }
}

function showScore() {
    document.getElementById("quiz").innerHTML = `  
    <h2>Your Score: ${score} out of ${quizData.length}</h2>  
    <button id="restartButton">Restart Quiz</button>    `
    document.getElementById("restartButton").addEventListener("click", restartQuiz)
}

function restartQuiz() {
    window.location.reload()
}

window.onload = loadQuestion;