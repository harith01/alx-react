const $ = require('jquery');
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');


let times = 0;
const updateCounter = () => {
    times += 1;
    return $('#count').text(`${times} clicks on the button`);
};

const debouncedUpdateCounter = _.debounce(updateCounter, 100);

$('button').on("click", debouncedUpdateCounter);