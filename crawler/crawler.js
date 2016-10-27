/**
 * 
 */
var http =require('http')
var url ='http://m.fruitday.com/cat'
var cheerio=require('cheerio')    
	
function filterChapters(html){
	var $=cheerio.load(html);
	var first=$(".tab-content");
	var object={};

	for(var i=0;i<=7;i++){
		 var temp=$("#cate"+i);
		temp.find("a").each(function(){
		     var name=$(this).attr("href");
			//console.log(name);
			object[name]=[];
			http.get("http://m.fruitday.com/"+name,function(res){
				var html='';
				res.on('data',function(data){
					html+=data
				});
				res.on('end',function(){
					var $=cheerio.load(html);
					var second=$(".list-unstyled");
					second.find("li").each(function(){
						var tt={};
						tt.src=$(this).find("img").attr("data-original");
						tt.h3=$(this).find("h3").text();
						tt.h4=$(this).find("h4").text();
						tt.h5=$(this).find("h5").text();

						object[name].push(JSON.stringify(tt));
						if(i==8){
							console.log(object);
						}
              
					})
				})
			}).on('error',function(){
				console.log('获取数据出错')
			})
		})
	}
	/*console.log(object);*/





/*	var $=cheerio.load(html);
	var chapters=$('.chapter');
	/!*[{
		chapteTitle:'',
		videos:[
		        title:'',
		        id:''
		        ]
	}]*!/
	var courseData=[];
	chapters.each(function(item){
		var chapter=$(this)
		var chapterTitle=chapter.find('strong').text();
		var videos=chapter.find('.video').children('li');
		var chapterData={
				chapterTitle:chapterTitle,
				videos:[]
		}
		videos.each(function(item){
			var video =$(this).find('.studyvideo')
			var videoTitle=video.text();
		    var id=video.attr('href').split('video/')[1];
		    
		    chapterData.videos.push({
		    	title:videoTitle,
		    	id:id
		    })
		})
		courseData.push(chapterData);
	})
	 
	return courseData;*/
}

function printCourseDataInfo(courseData){
	courseData.forEach(function(item){
		var chapterTitle=item.chapterTitle;
		
		console.log(chapterTitle+'\n');
		
		item.videos.forEach(function(item){
			console.log('     ['+item.id+'] '+item.title+'\n');
		})
	})
}	
	http.get(url,function(res){
		var html=''
	   res.on('data',function(data){   
		   html+=data
	   })
	   res.on('end',function(){
		/* var courseData= */
		   filterChapters(html);
		/* printCourseDataInfo(courseData);*/
	   })
	}).on('error',function(){
		console.log('获取课程数据出错')
	})
	