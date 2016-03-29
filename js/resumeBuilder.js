var bio = {
  "name": "Robert Cabrera",
  "role": "Mangaer, IBM Cloud",
  "contacts": {
    "mobile": "281-220-7992",
    "email": "rscabrera@gmail.com",
    "github": "rscabrera",
    "twitter": "@rs_cabrera",
    "location": "Houston"
  },
  "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
  "skills": [
    "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
  ],
  "bioPic": "https://scontent-ord1-1.xx.fbcdn.net/hphotos-xfl1/v/t1.0-9/12809683_10208362709446658_6122974549796379685_n.jpg?oh=6985c655ba93ebe6f8537fd9a90b4add&oe=57766129"
}

var education = {
  "schools": [
    {
      "name": "US Army",
      "city": "Fort Belviour, VA",
      "degree": "BS",
      "majors": ["Surveying"],
      "dates": 1997
      "url": "http://example.com"
    },
    {
      "name": "WGU",
      "city": "Salt Lake City, UT",
      "degree": "BS",
      "majors": ["CS"],
      "dates": "Present",
      "url": "http://example.com"
    }
  ],
  "onlineCourses": [
    {
    "title": "Front End Development Certification",
    "school": "Free Code Camp"
    "dates": "Present",
    "url": "http://freecodecamp.com"
  }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "IBM",
      "title": "Manager, IBM Cloud",
      "dates": "January 2010 - Present",
      "description": "Resolve system administrative and web developer-type issues on various distrobutions of Linux as well as Windows Server OSes.  Database administration of MySQL, MSSQL, PostgreSQL, MongoDB, NoSQL, etc.  Network troubleshooting and administration of network equipment such as hardware firewalls (Fortigate), network gateways (Vyatta), switches (Arista/Citrix), routers (Arista/Citrix), load balancers (Citrix NetScaler), and other various networking tasks such as VLAN NAT routing or VLAN trunking.  Configure and troubleshoot various VPNs such as PPTP, SSL, or IPSec connections.  Troubleshoot and resolve various email issues ranging from routing of emails, to DNS issues, to digging through root cause analysis of SPAM emails.  Provide RCA for servers that have gone down, or are running sluggish, as well as provide investigative analysis for a hacked or rooted server.  Troubleshoot and configure various virtulization setups such as Hyper-V, VMware, XenCenter for customer and configure storage for the devices such as SAN, NAS, or iSCSI.  Developer tasks include, but are not limited to working with node.js, PHP, Ruby, API, JavaScript, or using DevOps tools such as Bluemix, Chef, Ansible, etc. to automate tasks such as provisioning virtual machines, or push live code across multiple nodes at once for an instant change."
    }
  ]
}
if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}
