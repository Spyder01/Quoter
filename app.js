const colors = [
    '#4682b4',
    '#73A855',
    '#74C8A0',
    '#E15F57',
    '#00BF9A',
    '#273f87',
    '#366A4E',
    '#2C3E4F',
    '#FF903D',
    '#32CAD0'
]

const Quotes = [
    {
        Quote: "Follow your Heart, listen your inner voice and never care about what others say.",
        By: "Roy T. Bennet"
    },
    {
        Quote: "Just Saying.. Everything counts, look within and Invite tranquility.",  
        By: "Soloboat6"
    },
    {
        Quote: "Don’t let anyone ever make you feel like you don’t deserve what you want.",  
        By: "10 Things I hate about you."
    },
    {
        Quote: "Our lives are defined by opportunities, even the ones we miss.",  
        By: "Benjamin Button"
    },
    {
        Quote: "Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.",  
        By: "Alan Turing"
    },
    {
        Quote: "Love what you do.",  
        By: "Universal"
    },
    {
        Quote: "Because the truth is, honey, there's no sense living your life without this. To make the journey and not fall deeply in love, well, you haven't lived a life at all. But you have to try, because if you haven't tried, you haven't lived.",  
        By: "Meet Joe Black"
    },
    {
        Quote: "Do, or do not. There is no 'try.' ",  
        By: "Yoda(Star Wars)"
    },
    {
        Quote: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",  
        By: "George Bernhard Shaw"
    },
    {
        Quote: "Allow yourself to be a beginner, no one starts at the top.",  
        By: "Soloboat6"
    },
    {
        Quote: "As soon as you trust yourself, you will know how to live.",  
        By: "Victor Dashwood"
    },
    {
        Quote: "The only person you should strive to be better than is the person you were yesterday.",  
        By: "Soloboat6"
    },
    {
        Quote: "Holding emotions do not make you strong, letting them go does.",  
        By: "Victor Dashwood"
    },
    {
        Quote: "Some people cannot believe in themselves until someone else does that for them.",
        By: "Victor Dashwood"
    },
    {
        Quote: "You make the choice, either cry on your fate or strive hard to change it.",
        By: "Victor Dashwood"
    },
    {
        Quote: "Falling down is an Accident. Staying down is an choice.",
        By: "Universal"
    }
]



const app = Vue.createApp({
     data () {
         return {
             Quote: "One who saves one life, saves the world entire.",
             By: "Schindler's List",
             Color: "rgb(115,168,85)"
         }
     },
     methods: {
         Changer () {
             this.Color = colors[Math.floor(Math.random()*colors.length)]
             var Obj = Quotes[Math.floor(Math.random()*Quotes.length)]
             var {Quote, By} = Obj
             this.Quote = Quote
             this.By = By
             document.body.style.backgroundColor = this.Color;
             
         }
     }

})

app.mount("#app")