var http =require('http')
var url ='http://platform.okbuy.com/app/v15/focus/virtual_category'

var list2=[];
var list3=[];

http.get(url,function(res){
	  var obj
	  var str='';
	  res.on('data',function(data){
             str+=data
	  })
	  res.on('end',function(){
	  	 obj=JSON. parse(str);

	  	 filter(obj);
	  	  
	  })
}).on('error',function(){
	   console.log('获取数据失败！')
})

function filter(obj){
	   var arr=obj.results;
	 
	   for(var i=0;i<arr.length;i++){

               var l1={};
                   l1['data']=[];
               var l2={};
                    l2['data']=[];
               var objTemp=arr[i];
               // console.log(objTemp);
               // console.log("________________________________")
               var l1obj=objTemp['brand_category'];
               // console.log(l1obj.length);

               var l2obj=objTemp['second'];
                    // console.log(arr[1]);
                    if(l1obj){
			               for(var j=0;j<l1obj.length;j++){
			               	 
			               	    var temp1={}
			               	     temp1.name=l1obj[j]['brand_name'];
			               	     temp1.src=l1obj[j]['brand_picture'];
			               	     l1['data'].push(temp1);
			               }

			               list2.push(l1);
                    }
                    if(l2obj){
			               for(var k=0;k<l2obj.length;k++){
					               	    console.log(k);
					               	     var temp2={}
					               	     temp2.title=l2obj[k]['virtual_name'];
					               	     temp2.more=[];
					               	     var arr=l2obj[k]['third']
					               	     for(var m=0;m<arr.length;m++){
					               	     	var temp21={};
					               	     	temp21.titLittle=arr[m]['virtual_name']
					               	     	temp21.src=arr[m]['virtual_icon'];
					               	     	temp2.more.push(temp21);
					               	     }
					               	     l2['data'].push(temp2);
					               }

					                  list3.push(l2);
					              }
	   }
	   console.log(JSON.stringify(list2));
}