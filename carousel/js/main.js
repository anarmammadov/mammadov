$(".carousel-indicators").mouseenter(function() {
    $(".carousel").carousel('pause');
}).mouseleave(function() {
    $(".carousel").carousel('cycle');
});

$(".video1").hover(function() {
    $(".vidtext11").stop().animate({ 
	fontSize : '40px',
	top : '-220px',
	borderBottomWidth : '3px',
	width : '671px',
	left : '715px'
	});
	$(".vidtext12").stop().animate({ 
	fontSize : '40px',
	top : '-240px',
	borderBottomWidth : '3px',
	width : '579px',
	left : '715px'
	});
	$(".vidtext13").stop().animate({ 
	fontSize : '40px',
	top : '-260px',
	borderBottomWidth : '3px',
	width : '170px',
	left : '715px'
	});
},
function() {
    $(".vidtext11").stop().animate({ 
	fontSize : '33px',
	top : '-130px',
	borderBottomWidth : '0px',
	width : '553px',
	left : '815px'
	});
	$(".vidtext12").stop().animate({ 
	fontSize : '33px',
	top : '-145px',
	borderBottomWidth : '0px',
	width : '478px',
	left : '860px'
	});
	$(".vidtext13").stop().animate({ 
	fontSize : '33px',
	top : '-160px',
	borderBottomWidth : '0px',
	width : '114px',
	left : '1000px'
	});
	
});



$(".video2").hover(function() {
    $(".vidtext21").stop().animate({ 
	fontSize : '40px',
	top : '-400px',
	borderBottomWidth : '3px',
	width : '671px',
	left : '135px'
	});
	$(".vidtext22").stop().animate({ 
	fontSize : '40px',
	top : '-415px',
	borderBottomWidth : '3px',
	width : '579px',
	left : '225px'
	});
	$(".vidtext23").stop().animate({ 
	fontSize : '40px',
	top : '-430px',
	borderBottomWidth : '3px',
	width : '380px',
	left : '425px'
	});
},
function() {
    $(".vidtext21").stop().animate({ 
	fontSize : '33px',
	top : '-280px',
	borderBottomWidth : '0px',
	width : '543px',
	left : '151px'
	});
	$(".vidtext22").stop().animate({ 
	fontSize : '33px',
	top : '-295px',
	borderBottomWidth : '0px',
	width : '473px',
	left : '180px'
	});
	$(".vidtext23").stop().animate({ 
	fontSize : '33px',
	top : '-310px',
	borderBottomWidth : '0px',
	width : '308px',
	left : '240px'
	});
	
});