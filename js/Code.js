class Code
{
    constructor()
    {
             this.accessCode1 = 142
        
    }

clues(i) 
{
    
   
    
        var question = "Q" + i
database.ref(question).on("value",function(data){
    clue = data.val()
})

    
}
}
