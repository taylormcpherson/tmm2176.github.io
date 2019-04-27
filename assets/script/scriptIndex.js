/***************************************************
* @author: Taylor McPherson
* 
* WDD Final Project, scriptIndex.js
* jQuery functions for Home page (index.html)
*****************************************************/

$(document).ready(function() {

	/** Make sure if any part of document is selected except for descriptors, hide images */
	$(".footer, .innerDiv, .rightCol").hover(function() {
		$(".ills").hide();
	})

	/** For each descriptor when hovered, first hide all images, then fadeIn corresponding image */
	$("#d1").hover(function() {
		$("#img1").css({"display": "block"});
		$("#img2, #img3, #img4, #img5").hide();
		//checkDisplay();
	})

	 $("#d2").hover(function() {
		$(".ills").hide();
		$("#img2").css({"display": "block"});
	}) 

	$("#d3").hover(function() {
		$(".ills").hide();
		$("#img3").css({"display": "block"});
	})

	$("#d4").hover(function() {
		$(".ills").hide();
		$("#img4").css({"display": "block"});
	})

	$("#d5").hover(function() {
		$(".ills").hide();
		$("#img5").css({"display": "block"});
	}) 

})
