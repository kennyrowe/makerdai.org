$(function () {
    var team = [
        {
            name: 'Rune Christensen',
            role: 'Founder',
            pic: 'Rune-Christensen.png'
        },
        {
            name: 'Andy Milenius',
            role: 'Technical Project Manager',
            pic: 'Andy-Milenius.jpeg'
        },
        {
            name: 'Nikolai Mushegian',
            role: 'Lead Architect',
            pic: 'nikolai.jpeg'
        },
        {
            name: 'Kenny Rowe',
            role: 'Head of Operations',
            pic: 'Kenny.jpg'
        },
        {
            name: 'Matt Richards',
            role: 'Head of Marketing',
            pic: 'matt.png'
        },
        {
            name: 'James Reidy',
            role: 'IT Lead',
            pic: 'James.jpeg'
        },
        {
            name: 'Daniel Brockman',
            role: 'Software Engineer',
            pic: 'Daniel.jpeg'
        },
        {
            name: 'Mariano Conti',
            role: 'Software Engineer',
            pic: 'Mariano.jpeg'
        },
        {
            name: 'Fernando Tiberti',
            role: 'Software Engineer',
            pic: 'Ferni.jpeg'
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
            pic: 'Mikael.jpeg'
        },
        {
            name: 'Ryan Casey',
            role: 'Software Engineer',
            pic: 'Ryan.jpeg'
        },
        {
            name: 'Rain Beam',
            role: 'Software Engineer',
            pic: 'rain.png'
        },
        {
            name: 'Paweł Grajewski',
            role: 'Software Engineer',
            pic: 'Paweł-Grajewski.jpg'
        },
        {
            name: 'Robert Horvath',
            role: 'Software Engineer',
            pic: 'r001.jpeg'
        },
        {
            name: 'Thomas Pulber',
            role: 'Software Engineer',
            pic: 'Thomas.jpeg'
        }
    ];

    // Populate the team
    var teamHtml = '';
    team.forEach(function (member) {
        teamHtml += '<div class="member">' +
            '<div class="member-img-container"><img src="assets/img/team/' + member.pic + '"/></div>' +
            '<span class="name">' + member.name + '</span><br>' +
            '<span class="role">' + member.role + '</span>' +
            '</div>';
    });
    $('#team-portraits').html(teamHtml);

});
