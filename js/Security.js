class Security {

    constructor(){
        
        this.question = createElement("h1")

        this.access1 = createInput("")
        this.access1.position(displayWidth/2,displayHeight/2);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Submit');
        this.button1.position(displayWidth/2,displayHeight/2+30);
        this.button1.style('background', 'lightgrey');    

       
        
    }

    display(){

        this.question.html(clue)
        this.question.position(500,200)
        this.button1.mousePressed(() => {
            if(system.authenticate(code.accessCode1,this.access1.value())){
               
               
                score++;
            }
        });

        
    }
}