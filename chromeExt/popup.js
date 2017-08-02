/**
 * Created by anmol on 6/7/17.
 */

let input;
let inputArr=[];
let btn;
let ObjArr=[];
let url1="http://localhost:1234/a?q=";
$(function(){

    input=$('#amount');
    btn=$('#spendAmount')
    btn.click(function(){
         inputArr=input.val().split('\n');
         console.log(inputArr);
         getLoop()

    });

});


function getLoop(){
    for(i in inputArr){
        getdata(inputArr[i]);
    }


    setTimeout(after1,3000)

}

function getdata(id){


    $.get(url1+id,function (data) {

        console.log(data.id);

        ObjArr.push(new objc(id,data.id));

    })



}

let str=' ';

function after1(){

    for(i in ObjArr){
        str=str+ObjArr[i].id+","
    }

    str=str.substr(0,str.length-1)


    console.log(str);

    youtube();

}

function youtube(){

    let url="http://www.youtube.com/watch_videos?video_ids=";

    console.log(url)


    var createData={
        "url":url+str,
        "type":"popup",
        "top":5,
        "left":5,
        "width":Math.round(screen.availWidth/2),
        "height":screen.availHeight/2
    }


    chrome.windows.create(createData,function(){})

}


function objc(name,id){
    this.name=name;
    this.id=id;
}