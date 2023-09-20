const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'REACT', 'VUE','BOOTSTRAP', 'TAILWIND',
    'PYTHON', 'DJANGO',
    'JAVA', 'SPRINGBOOT', 'NODEJS',
    'MYSQL', 'MONGO', 'PHP'
];

var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px
    radius: 150,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

// Giving color to each text in sphere
var color = '#36A2EB ';
document.querySelector('.Sphere').style.color = color;
