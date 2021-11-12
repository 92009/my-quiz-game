class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("ENTER CORRECT OPTION NO....");
  

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3")
    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")


    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){

    this.title.html("MyQuiz Game");
    this.title.position(350, 10);

    //Create html() and position() for each question, input and answers.
    this.question.html("Which animal is called desert ship animal?");
    this.question.position(100,100)

    this.option1.html("1. cheetah")
    this.option1.position(100,120)

    this.option2.html("2. camel")
    this.option2.position(100,140)

    this.option3.html("3. duck")
    this.option3.position(100,160)

    this.option4.html("4. dinasor")
    this.option4.position(100,180)

    this.message.html("THANKYOU FOR PLAYING")
    this.message.position(200,200)

    this.input2.position(400,230)
    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
     this.message.display();

    })


  }
}
