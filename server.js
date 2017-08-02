/**
 * Created by anmol on 2/8/17.
 */

const express=require('express');
const request=require('request');
const cheerio=require('cheerio');

let url="https://www.youtube.com/results?search_query=";

const app=express();


app.get('/a',(req,res)=>{


    console.log(req.query.q);


    request(url+req.query.q,function (err,response,html) {



        if (!err){

            let $ =cheerio.load(html);
            $(`h3.yt-lockup-title`).eq(0).filter(function () {


                let data=$(this);

                let id=data.children().first().attr('href').replace('/watch?v=','');

                console.log(id);

                res.send({id:id});



            });



        }

    })



})


app.listen(1234,function () {

    console.log("Server Started");

});



