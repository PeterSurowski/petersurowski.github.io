console.log("JS file is connected!");

// Extending jQuery to detect animation end:
$.fn.extend({
    animateCss: function(animationName, callback) {
      var animationEnd = (function(el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd',
        };
  
        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));
  
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
  
        if (typeof callback === 'function') callback();
      });
  
      return this;
    },
  });

// Makes anchor tags scroll smoothly:
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

//Unhides #project-description:
function unhider() {
    $('#project-8').addClass('animated fadeOutDown');
    setTimeout(function() {
        $('#project-7').addClass('animated fadeOutDown');
    }, 100);
    setTimeout(function() {
        $('#project-6').addClass('animated fadeOutDown');
    }, 200);
    setTimeout(function() {
        $('#project-5').addClass('animated fadeOutDown');
    }, 300);
    setTimeout(function() {
        $('#project-4').addClass('animated fadeOutDown');
    }, 250);
    setTimeout(function() {
        $('#project-3').addClass('animated fadeOutDown');
    }, 350);
    setTimeout(function() {
        $('#project-2').addClass('animated fadeOutDown');
    }, 450);
    setTimeout(function() {
        $('#project-1').addClass('animated fadeOutDown');
    }, 550);
    setTimeout(function() {
        $('#project-1').animateCss('fadeOutDown', function() {        
            $('#project-1').hide();
            $('#project-description').removeClass('animated fadeOutUp');
            $('#project-description').show();
            $('#project-description').addClass('animated fadeInDown');
        });
    }, 800);    
};

// This re-hides project-description after you cick the X and brings back the projects.
function rehider() {
    $('#project-description').removeClass('animated fadeInDown');
        $('#project-description').animateCss('fadeOutUp', function() {
        $('#project-description').hide();
        $('#project-1').show();
        $('#project-1').removeClass('animated fadeOutDown');
        $('#project-1').addClass('animated fadeInUp');
        setTimeout(function() {
            $('#project-2').removeClass('animated fadeOutDown');
            $('#project-2').addClass('animated fadeInUp');
        }, 100);
        setTimeout(function() {
            $('#project-3').removeClass('animated fadeOutDown');
            $('#project-3').addClass('animated fadeInUp');
        }, 200);
        setTimeout(function() {
            $('#project-4').removeClass('animated fadeOutDown');
            $('#project-4').addClass('animated fadeInUp');
        }, 300);
        setTimeout(function() {
            $('#project-5').removeClass('animated fadeOutDown');
            $('#project-5').addClass('animated fadeInUp');
        }, 400);
        setTimeout(function() {
            $('#project-6').removeClass('animated fadeOutDown');
            $('#project-6').addClass('animated fadeInUp');
        }, 500);
        setTimeout(function() {
            $('#project-7').removeClass('animated fadeOutDown');
            $('#project-7').addClass('animated fadeInUp');
        }, 600);
        setTimeout(function() {
            $('#project-8').removeClass('animated fadeOutDown');
            $('#project-8').addClass('animated fadeInUp');
        }, 700); 
    });  
};

// These add project-specific content to #project-description:
function contentAdderOne() {
    $('#project-image').empty();
    $('#project-image').append('<a href="./img/projects/Solution_Architect.pdf" target="_blank"><img src="./img/projects/resumescreenshot.png"/></a>');
    $('#project-copy').empty();
    $('#project-copy').append("<h3>My Resume</h3><p><strong>Technologies used:</strong>Adobe Illustrator</p><p><strong>Description:</strong>Peter is an AI software engineer and solution architect with 26 years of experience working for such companies as AOL and Automattic (WordPress.com, Tumblr.com, etc).</p><h4><a href='./img/projects/SolutionArchitect.pdf' target='_blank'>CHECK IT OUT!</a></h4> ");
}

function contentAdderTwo() {
    $('#project-image').empty();
    $('#project-image').append("<a href='https://petersurowski.github.io/RPG/' target='_blank'><img src='./img/projects/cornered520x500.jpg'/></a>");
    $('#project-copy').empty();
    $('#project-copy').append("<h3>Cornered!</h3><p><strong>Technologies used:</strong> HTML | CSS | plain vanilla JavaScript</p><p><strong>Description:</strong> Cornered! is a simple dice-throwing game where you try to defeat three zombies by rolling high enough numbers to take away their hit points before they depleat yours. It uses only HTML, CSS and plain JavaScript (though Peter also created <a href='https://petersurowski.github.io/RPG-jQuery/' target='_blank'>a version that uses jQuery</a>.)</p><h4><a href='https://petersurowski.github.io/RPG/' target='_blank'>TRY IT OUT!</a></h4> ");
}

function contentAdderThree() {
    $('#project-image').empty();
    $('#project-image').append("<a href='https://petersurowski.github.io/TriviaGame/' target='_blank'><img src='./img/projects/holygrail520x500.jpg'/></a>");
    $('#project-copy').empty();
    $('#project-copy').append("<h3>The Bridge of Death</h3><p><strong>Technologies used:</strong> HTML | CSS | jQuery</p><p><strong>Description:</strong> There should have been a Monty Python's Quest for the Holy Grail-themed video game on Nintendo, but there wasn't. So Peter created one! It recreates one of the most famous scenes of the movie in glorious 8-bit fashion.</p><h4><a href='https://petersurowski.github.io/TriviaGame/' target='_blank'>TRY IT OUT!</a></h4> ");
}

function contentAdderFour() {
    $('#project-image').empty();
    $('#project-image').append("<a href='https://petersurowski.github.io/timesheet/' target='_blank'><img src='./img/projects/TimeCard520x500.jpg' /></a>");
    $('#project-copy').empty();
    $('#project-copy').append("<h3>Time Sheet</h3><p><strong>Technologies used:</strong> HTML | CSS | Bootstrap | jQuery | Firebase</p><p><strong>Description:</strong> We all gotta punch the clock in one way or another. May as well do it in style! Peter created this basic Bootstrapped time sheet app while toying with Google's new Firebase database service. It's pre-populated with some dummy data, but feel free to add to it!<p><h4><a href='https://petersurowski.github.io/timesheet/' target='_blank'>TRY IT OUT!</a></h4> ");
}

function contentAdderFive() {
    $('#project-image').empty();
    $('#project-image').append("<a href='http://http://www.capoeirariverside.com/' target='_blank'><img src='./img/projects/capoeira520x500.jpg' /></a>");
    $('#project-copy').empty();
    $('#project-copy').append("<h3>Capoeira Riverside</h3><p><strong>Technologies used:</strong> HTML | CSS | Bootstrap | PHP | MySQL | WordPress</p><p><strong>Description:</strong> Peter created this website for a client who runs a martial arts school. He needed something that presented the business' basic information while stirring excitement in the visitor. He also needed a CMS that the client would be able to use after the development phase was done. WordPress was an effective solution. The theme is a customized child of OneTone.<p><h4><a href='http://capoeirariverside.com/' target='_blank'>VISIT THE SITE!</a></h4> ");
}

function contentAdderSix() {
    $('#project-image').empty();
    $('#project-image').append("<a href='http://http://www.creativekidsclub.org/' target='_blank'><img src='./img/projects/CKC520x500.jpg' /></a>");
    $('#project-copy').empty();
    $('#project-copy').append("<h3>Creative Kids Club</h3><p><strong>Technologies used:</strong> WordPress (front end only)</p><p><strong>Description:</strong> Peter created this website for a nonprofit client who wanted a fast, inexpensive website. WordPress hosted solutions were effective for this. Peter wrote the copy, managed the photography and set up the organizations other online campaign components, such as the GoFundMe page and social media accounts.<p><h4><a href='http://creativekidsclub.org' target='_blank'>VISIT THE SITE!</a></h4> ");
}

function contentAdderSeven() {
    $('#project-image').empty();
    $('#project-image').append("<img src='./img/projects/UCR520x500.jpg' />");
    $('#project-copy').empty();
    $('#project-copy').append('<h3>UC Riverside: Copywriting projects</h3><p>During his time as a copywriter at UCR, Peter crafted messaging for numerous projects.<ul><li><b>Get the Facts on Marijuana:</b> Peter designed a campaign to educate students on the university policy on marijuana. It included posters, cards, LCD screens around campus, copy to be included in a weekly email and <a href="http://well.ucr.edu/programs/marijuana-education-awareness.html" target="_blank">a web page.</a></li><li><b>Be Sexcellent:</b> This campaign, launched during Sex Week, educated students on the safer sex resources on campus. The campaign included a flier, posters, email content, LCD screen messaging and <a href="http://well.ucr.edu/programs/be-sexcellent.html" target="_blank">a web page</a>. Peter crafted the content, in collaboration with the client and several student workers, researched the resources and brainstormed the visual themes with the designer.</li><li><b>BlaqOUT:</b> UCR hosts an annual festival for black people who are LGBT, and Peter crafted messaging for the promotional materials. These includes posters, cards, email content, LCD screen messaging and social media content.</li><li><b>Veterans Resource Center:</b> Peter and his team designed the promotional materials for the grand opening of the Veterans Resource Center at UCR. These include posters, fliers, cards, LCD screen messaging, social media and email content.</li></ul></p>');
}

function contentAdderEight() {
    $('#project-image').empty();
    $('#project-image').append('<a href="http://www.redlands.edu/meet-redlands/student-faculty-and-alumni-stories/alumni-stories/"><img src="./img/projects/lissahjohnson520x500.jpg" /></a>');
    $('#project-copy').empty();
    $('#project-copy').append("<h3>University of Redlands: Testimonials page</h3><p>During his time as a web designer and digital content editor at University of Redlands, Peter contributed to the creation of much of the college's website, <a href='http://www.redlands.edu' target='_blank'>www.redlands.edu.</a> Though his page and UX design, along with his written content and original photography, are found throughout the site, many of the elements he designed have changed since he was there. The student stories page stands as an exception: The design is unchanged as of this writing.</p><p>I designed this page to encourage visitors to keep clicking the stories, so we could deliver as much messaging as possible. I did this by using many large, compelling photos and including the alumni's names, job titles and employers.</p><h4><a href='http://www.redlands.edu/meet-redlands/student-faculty-and-alumni-stories/alumni-stories/' target='_blank'>VISIT THE SITE!</a></h4>");
}
function contentAdderNine() {
    $('#project-image').empty();
    $('#project-image').append('<a href="http://www.redlands.edu/meet-redlands/student-faculty-and-alumni-stories/alumni-stories/"><img src="./img/projects/lissahjohnson520x500.jpg" /></a>');
    $('#project-copy').empty();
    $('#project-copy').append("<h3>University of Redlands: Testimonials page</h3><p>During his time as a web designer and digital content editor at University of Redlands, Peter contributed to the creation of much of the college's website, <a href='http://www.redlands.edu' target='_blank'>www.redlands.edu.</a> Though his page and UX design, along with his written content and original photography, are found throughout the site, many of the elements he designed have changed since he was there. The student stories page stands as an exception: The design is unchanged as of this writing.</p><p>I designed this page to encourage visitors to keep clicking the stories, so we could deliver as much messaging as possible. I did this by using many large, compelling photos and including the alumni's names, job titles and employers.</p><h4><a href='http://www.redlands.edu/meet-redlands/student-faculty-and-alumni-stories/alumni-stories/' target='_blank'>VISIT THE SITE!</a></h4>");
}