/***************************************************
* @author: Taylor McPherson
* 
* WDD Final Project, scriptContact.js
* jQuery functions for Contact page (contact.html)
*****************************************************/

$(document).ready(function() {
	/* when resumeCirc clicked on, change page view accordingly */
	$("#resumeCirc").click(function() {
		denoise();
		resumeView();
	})

	/* when formCirc clicked on, change page view accordingly */
	$("#formCirc").click(function() {
		denoise();
		formView();
	})

	/* when form "SEND" button is clicked, check that all fields are filled in and redirect to empty form */
	$("#submitButton").on('click', function() {
		submitView();
	})

	/* header clicked, reset to original page view */
	$(".header").click(function() {
		reset();
	});

	/* when any circle is hovered(mouseenter) over, change its text color
	* then when mouse not on(mouseleave), change back to original color */
	//resume circle
	$("#resumeCirc").mouseenter(function() {
		$("#resumeDescrip").css({"color": "#C9A07B"});
	})
	$("#resumeCirc").mouseleave(function() {
		$("#resumeDescrip").css({"color": "#768277"});
	})

	//form circle
	$("#formCirc").mouseenter(function() {
		$("#formDescrip").css({"color": "#C9A07B"});
	})
	$("#formCirc").mouseleave(function() {
		$("#formDescrip").css({"color": "#768277"});
	})

	//git circle
	$("#gitCirc").mouseenter(function() {
		$("#gitDescrip").css({"color": "#C9A07B"});
	})
	$("#gitCirc").mouseleave(function() {
		$("#gitDescrip").css({"color": "#768277"});
	})

	//photo portfolio circle
	$("#photoCirc").mouseenter(function() {
		$("#photoDescrip").css({"color": "#C9A07B"});
	})
	$("#photoCirc").mouseleave(function() {
		$("#photoDescrip").css({"color": "#768277"});
	})

	//rover circle
	$("#roverCirc").mouseenter(function() {
		$("#roverDescrip").css({"color": "#C9A07B"});
	})
	$("#roverCirc").mouseleave(function() {
		$("#roverDescrip").css({"color": "#768277"});
	})

	//instagram circle
	$("#instaCirc").mouseenter(function() {
		$("#instaDescrip").css({"color": "#C9A07B"});
	})
	$("#instaCirc").mouseleave(function() {
		$("#instaDescrip").css({"color": "#768277"});
	})

	
})

function resumeView() {
	$("#resume").fadeIn();
	$("#resumeCirc").show();
	$("#row1").css({"margin-left": "25%", "margin-right": "50%", "margin-top": "0px", "margin-bottom":"1%"});
	$("#bigCircle").css({"padding": "0px", "margin":"0"});
	$("#resumeCirc").css({"width": "100%", "height": "100%", "border-radius": "0", 
			"margin": "0px", "opacity": "1"});
}

 function formView() {
 	$(".contactForm").fadeIn();
 	$("#formCirc").show();
 	$("#row1").css({"margin-left": "31.8%", "margin-right": "50%", "margin-top": "0px"});
 	$("#bCircle").css({"padding": "0px", "margin": "0px"});
 	$("#formCirc").css({"width": "100%", "height": "100%", "border-radius": "15%", 
 			"margin": "0", "opacity": "1"});
}

function submitView() {
	$(".contactForm").trigger("reset");
	$(".contactForm").css({"display": "none"});
	$("#formSent").show();
}

function reset() {
	$("#resume, #row1, #resumeCirc, #bCircle, .contactForm, #formCirc, #formSent").removeAttr("style");
	$(".bigCircle, .bigDescrip, #row2, #upArrow").show();
}

function denoise() {
	$(".bigCircle").hide();
	$(".bigDescrip").hide();
	$("#row2").hide();
	$(".upArrow").hide();
}

