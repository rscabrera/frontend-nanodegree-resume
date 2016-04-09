var appendObjectProperties = function(object, location, formatter, propertyPlaceholder, valuePlaceholder) {
  for (var property in object) {
    var value = object[property];
    var data = formatter.replace(propertyPlaceholder, property)
                        .replace(valuePlaceholder, value);
    $(location).append(data);
  }
};

var appendListOfObjects = function(list, location, formatter, valuePlaceholder) {
  for (var key in list) {
    $(location).append(formatter.replace(valuePlaceholder, list[key]));
  }
};

var replaceData = function(data, formatter, dataPlaceholder) {
  dataPlaceholder = dataPlaceholder || '%data%';
  return formatter.replace(dataPlaceholder, data);
};

var bio = {
  'name': 'Robert Cabrera',
  'role': 'Manager, IBM Cloud',
  'contacts': {
    'mobile': "<a href='tel:5555555555'>555.555.5555</a>",
    'email': "<a href='mailto:rscabrera@gmail.com'>rscabrera@gmail.com</a>",
    'linkedin': "<a href='http://bit.ly/1N09KFX'>Robert Cabrera</a>",
    'github': "<a href='http://bit.ly/1qBLErD'>rscabrera</a>",
    'twitter': "<a href='http://bit.ly/1qd8Yv3'>@rs_cabrera</a>",
    'location': "<a href='#'>Houston, TX</a>"
  },
  'welcomeMessage': 'Experience leading inovative minds in engineering and the best support technicians in the world.',
  'skills': ['Enterprise Servers', 'System Administration', 'Virtualization',
              'SaaS', 'IaaS', 'HTML5/CSS3', 'JavaScript',
              'Python', 'LAMP', 'MEAN', 'Nginx', 'PaaS', 'Linux',
              'GitHub', 'AutoCad', 'Unix', 'Windows Server', 'MongoDB', 'Leadership',
              'Project Management', 'Dev-Ops'],
  'biopic': 'http://bit.ly/1YjXH75',
  'display': function() {
    var name = replaceData(bio.name, HTMLheaderName);
    var role = replaceData(bio.role, HTMLheaderRole).replace('<hr/>','');

    $('#header').prepend(role)
                .prepend(name);

    appendObjectProperties(bio.contacts, '#topContacts', HTMLcontactGeneric, '%contact%', '%data%');
    $('#topContacts').children().clone().appendTo('#footerContacts');

    $('#header').append(replaceData(bio.biopic, HTMLbioPic))
                .append(replaceData(bio.welcomeMessage, HTMLWelcomeMsg))
                .append(HTMLskillsStart);

    appendListOfObjects(bio.skills, '#skills', HTMLskills, '%data%');
  }
};

var education = {
  'schools': [
    {'name': 'Defense Mapping Agency',
     'location': 'Fort Belviour, VA',
     'degree': 'Bachelor of Science',
     'majors': ['Surveying'],
     'dates': 1998,
     'url': 'http://1.usa.gov/1SVHcg7'
	 },
	{'name': 'Western Governors University',
	 'location': 'Salt Lake City, UT',
	 'degree': 'Bachelor of Science',
	 'majors': ['Computer Science'],
	 'dates': 2016,
	 'url': 'http://www.wgu.edu'
	}
  ],
  'onlineCourses': [
    {'title': 'Front-End Nanodegree',
     'school': 'Udacity',
     'date': 2016,
     'url': 'http://www.udacity.com'
    }
  ],
  'display': function() {
    for (var i in this.schools) {
      $('#education').append(replaceData(i, HTMLschoolStart));
      var id = '#school-entry-' + i;
      var school = this.schools[i];
      $(id).append((replaceData(school.name, HTMLschoolName) + replaceData(school.degree, HTMLschoolDegree))
           .replace('#', school.url))
           .append(replaceData(school.dates, HTMLschoolDates))
           .append(replaceData(school.location, HTMLschoolLocation))
           .append(replaceData(school.majors, HTMLschoolMajor));
    }

    $('#education').append(HTMLonlineClasses);
    for (var j in this.onlineCourses) {
      $('#education').append(replaceData(i, HTMLonlineStart));
      var id = '#online-entry-' + j;
      var online = this.onlineCourses[j];
      $(id).append(replaceData(online.title, HTMLonlineTitle) + replaceData(online.school, HTMLonlineSchool))
           .append(replaceData(online.date, HTMLonlineDates))
           .append(replaceData(online.url, HTMLonlineURL).replace('#', online.url));
    }
  }
};

var work = {
  'jobs': [
    {'employer': 'United States Army',
     'title': 'Topographic Surveyor',
     'location': 'Fort Bragg, NC',
     'dates': '1998-2004',
     'description': 'Airborne'
    },
    {'employer': 'IBM',
     'title': 'Manager, IBM Cloud',
     'location': 'Houston, TX',
     'dates': '2010-Present',
     'description': 'All things cloud'
    }
  ],
  'display': function() {
    for (var i in this.jobs) {
      $('#workExperience').append(replaceData(i, HTMLworkStart));
      var id = '#work-entry-' + i;
      var job = this.jobs[i];
      $(id).append((replaceData(job.employer, HTMLworkEmployer) + replaceData(job.title, HTMLworkTitle))
           .replace('href="#"', ''))
           .append(replaceData(job.dates, HTMLworkDates))
           .append(replaceData(job.location, HTMLworkLocation))
           .append(replaceData(job.description, HTMLworkDescription));
    }
  }
};

var projects = {
  'projects': [
    {'title': 'Cloud Things',
     'dates': '2014-2015',
     'description': 'Making the cloud and the internet possible',
     'images': [
       'http://lorempixel.com/400/200/sports',
       'http://lorempixel.com/g/400/200',
       'http://lorempixel.com/400/200'
     ]
    }
  ],
  'display': function() {
    for (var i in this.projects) {
      $('#projects').append(replaceData(i, HTMLprojectStart));
      var id = '#project-entry-' + i;
      var project = this.projects[i];
      $(id).append(replaceData(project.title, HTMLprojectTitle))
           .append(replaceData(project.dates, HTMLprojectDates))
           .append(replaceData(project.description, HTMLprojectDescription));
      for (var j in project.images) {
        $(id).append(replaceData(project.images[j], HTMLprojectImage));
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);


// $('#main').append(internationalizeButton);
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
