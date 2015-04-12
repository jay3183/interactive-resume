var projects = {
    "projects": [
        {
            "ProjectTitle": "Nyack - Travel Search Engine",
            "Dates": "Present",
            "Description": "Travel search engine and blogging platform.",
            "images":"images/confide-app.png"


        },
        {
            "ProjectTitle": "Caddify - Uber for golf caddies",
            "Dates": "April 2011 - November 2014",
            "Description": "On Demand Mobile App for golf caddies",
            "images":"images/images.jpg"
        }
    ],
    "display":function(){
for(var project in projects.projects){
$("#projects").append(HTMLprojectStart);
var projectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].ProjectTitle);
$(".project-entry:last").append(projectTitle);
var projectDates = HTMLprojectDates.replace("%data%",projects.projects[project].Dates);
$(".project-entry:last").append(projectDates);
var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].Description);
$(".project-entry:last").append(projectDescription);
var projectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
$(".project-entry:last").append(projectImages);
}
}
};
projects.display();




var bio = {

"name": "Johnny Two Times",
"role": "web developer",
"contacts": {
"mobile": "555-233-0988",
 "email": "johnny2x@gmail.com",
	"Github":"johnny2x",
	"twitter":"@johnny2x",
	"location": "SF Bay"
	},
	"welcomeMessage": "Welcome to my resume",
"skills":[
  "HTML","Sales", "CSS", "jQuery", "JavaScript"
],	"bioPic": "images/fry.jpg",
"display": function (){
var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);
var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
var bioPicture = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
var  mobile = HTMLmobile.replace("%data%", bio.contacts.mobile) ;
var twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var gitContact = HTMLgithub.replace("%data%",bio.contacts.Github);

if (bio.skills.length > 0 ){
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
$("#skills").append(formattedSkill);
}

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcomeMsg);
$("#header").append(bioPicture);
$("#topContacts").append(mobile);
$("#topContacts").append(contactEmail);
$("#topContacts").append(twitter);
$("#topContacts").append(gitContact);
//Footer Contacts
$("#footerContacts").append(mobile);
$("#footerContacts").append(contactEmail);
$("#footerContacts").append(twitter);
$("#footerContacts").append(gitContact);
}
};

bio.display();


var education = {

"Schools":[

{
"School": "UCLA",
"location": "Los Angeles, California",
"Degree":"BS",
"Major": ["Computer Science", "French", "Mathematics"],
"Dates": "2005 -2009",
"Schoolurl": "http://ucla.com"
},

{
"School": "USC",
"location": "Los Angeles, California",
"Degree":"MS",
"Major": ["Computer Science","Mathematics"],
"Dates": "2010 -2013",
"Schoolurl": "http://usc.com"
},

{

"School": "Stanford",
"location": "Palo Alto, California",
"Degree":"PHD",
"Major": ["Computer Science", "Mathematics"],
"Dates": "2013 -2015",
"Schoolurl": "Http://stanford.com"

}
],
"onlineCourses":[

{

   "Title":"Front End developer Nano Degree",
   "School": "Udacity",
   "dates": "December 2015",
   "url": "udacity.com"

},

{

	"Title": "Backend in Node.js",
   "School": "Thinkful",
   "dates": "June 2014",
   "url": "Thinkful.com"
},

{

	"Title": "Full Stack Web Development",
   "School": "Bloc.io",
   "dates":  "March 2015",
   "url": "bloc.io"
}
],
  "display":function(){
for(var school in education.Schools){
$("#education").append(HTMLschoolStart);
var schoolName =  HTMLschoolName.replace("%data%", education.Schools[school].School);
var schoolDegree = HTMLschoolDegree.replace("%data%", education.Schools[school].Degree);
$(".education-entry:last").append(schoolName + schoolDegree);

var schoolDates = HTMLschoolDates.replace("%data%", education.Schools[school].Dates);
$(".education-entry:last").append(schoolDates);
var schoolLocation = HTMLschoolLocation.replace("%data%",education.Schools[school].location );
$(".education-entry:last").append(schoolLocation);
var schoolMajor = HTMLschoolMajor.replace("%data%",education.Schools[school].Major);
$(".education-entry:last").append(schoolMajor);
}
$(".education-entry:last").append(HTMLonlineClasses);
for(var course in education.onlineCourses){
var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].Title);
var onlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].School);
$(".education-entry:last").append(onlineTitle + onlineschool);
var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
$(".education-entry:last").append(onlineDates);
var onlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
$(".education-entry:last").append(onlineUrl);
}
}
};

education.display();

/*
Js lint threw errors with the multi line strings included in the jobs object.
To correct the errors // jshint multistr: true // was added to the document.
*/
/*jshint multistr: true */

var work = {
    "jobs": [
        {
            "Employer": "ABC co.",
            "Title": "Sales Manager",
            "location": "Dallas, Texas",
            "Dates": "1/5/12 - Present",
            "Description": "Sales manager for seven years. Responsible for corporate accounts and \
             300 percent growth in a span of 3 years. Brought in multi million dollar \
             accounts, topping revenue of $100 million dollars in 2010.\
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quibusdam, nisi \
             facere nihil officiis, incidunt aspernatur alias non reprehenderit dolores quas \
             corporis quam iste recusandae labore! Totam similique, aliquid. Inventore. ",
            "url": "http://ABCCO.com"
        },
        {
            "Employer": "XEROX" ,
            "Title": "Salesperson(B2B)",
            "location": "Houston, Texas",
            "Dates": "1/1/07 - 11/10/11",
            "Description": "Increased XEROX's B2B revenue by 25 % each quarter for  and interacted with \
            various fortune 500 & 100 executives. Built a sales funnel and sales channel for XEROX's B2B \
            division. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit atque quibusdam rerum \
             ipsa ullam quas rem cupiditate voluptas earum placeat alias aliquam impedit consequuntur obcaecati \
             cumque eum aspernatur facere recusandae!",
            "url": "http://xerox.com"
        },
        {
            "Employer": "IBM",
            "Title": "Intern",
            "location": "Richmond,Virginia",
            "Dates": "2/1/06 - 12/15/06 ",
            "Description": "Assisted sales executives with strategic sales planning and \
             building of a new sales channel. Become the first intern to close a one \
             million dollar account. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi omnis, \
             libero? Provident vitae distinctio placeat repellendus, hic mollitia quos non, nostrum et excepturi \
             laboriosam explicabo, magni praesentium minus accusantium odit!",
            "url": "http://ibm.com"
        }
    ],
    
     "display":function(){
for (var job in work.jobs) {
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].Employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].Title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);
var workDates = HTMLworkDates.replace("%data%", work.jobs[job].Dates);
$ (".work-entry:last").append(workDates);
var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].Description);
$(".work-entry:last").append(workDescription);
var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(workLocation);

}
}

};
work.display();



//Map Div

$("#mapDiv").append(googleMap);

