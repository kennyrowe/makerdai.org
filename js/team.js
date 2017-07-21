
$(function() {
  var team = [
    {
      name: 'Rune Christensen',
      role: 'Founder',
      pic: 'Rune.png'
    },
    {
      name: 'Andy Milenius',
      role: 'Technical Project Manager',
      pic: 'Andy.png'
    },
    {
      name: 'Nikolai Mushegian',
      role: 'Lead Architect',
      pic: 'Nikolai.png'
    },
    {
      name: 'Kenny Rowe',
      role: 'Head of Operations',
      pic: 'Kenny.png'
    },
    {
      name: 'Matt Richards',
      role: 'Head of Marketing',
      pic: 'Matt.png'
    },
    {
      name: 'James Reidy',
      role: 'IT Lead',
      pic: 'James.png'
    },
    {
      name: 'Daniel Brockman',
      role: 'Software Engineer',
      pic: 'Daniel.png'
    },
    {
      name: 'Mariano Conti',
      role: 'Software Engineer',
      pic: 'Mariano.png'
    },
    {
      name: 'Fernando Tiberti',
      role: 'Software Engineer',
      pic: 'Ferni.png'
    },
    {
      name: 'Gonzalo Balabasquer',
      role: 'Software Engineer',
      pic: 'Gonzalo.png'
    },
    {
      name: 'Nik Kunkel',
      role: 'Software Engineer',
      pic: 'Nik.png'
    },
    {
      name: 'Michael Brockman',
      role: 'Software Engineer',
      pic: 'Mikael.png'
    },
    {
      name: 'Ryan Casey',
      role: 'Software Engineer',
      pic: 'Ryan.jpeg'
    },
    {
      name: 'Rain Beam',
      role: 'Software Engineer',
      pic: 'Rain.png'
    },
    {
      name: 'Paweł Grajewski',
      role: 'Software Engineer',
      pic: 'Pawel.png'
    },
    {
      name: 'Robert Horvath',
      role: 'Software Engineer',
      pic: 'Robert.png'
    },
    {
      name: 'Thomas Pulber',
      role: 'Software Engineer',
      pic: 'Thomas.png'
    }
  ];

  // Populate the team
  var teamHtml = '';
  team.forEach(function(member) {
    teamHtml += '<div class="member">' +
      '<div class="member-img-container"><img src="assets/img/team/' + member.pic + '"/></div>' +
      '<span class="name">' + member.name + '</span><br>' +
      '<span class="role">' + member.role + '</span>' +
      '</div>';
  });
  $('#team-portraits').html(teamHtml);

});
