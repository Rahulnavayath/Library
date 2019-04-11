const express=require('express');
const chalk=require('chalk');
const path=require('path');
const booksRouter=express.Router();
const authorRouter=express.Router();

var app=express()
app.set('views','./src/views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,"/public")))
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
booksRouter.route("/").get((req,res)=>{
    res.render('books',{
        nav:[
            {link:'/books',title:'Books'},
            {link:'/authors',title:'Authors'}
        ],
        title:"Books"});
});
authorRouter.route("/").get((req,res)=>{
    res.render('authors',{
        nav:[
            {link:'/books',title:'Books'},
            {link:'/authors',title:'Authors'}
        ],
        title:"Authors"});
});
booksRouter.route('/single')
.get((req,res)=>{
    res.send("Hello single book");
})


app.get('/',function(req,res){
    res.render('index',{
        nav:[
            {link:'/books',title:'Books'},
            {link:'/authors',title:'Authors'}
        ],
        title:"Library"});

});


app.listen(2002,function(){
    console.log('listening to port'+chalk.green('2002'));
});