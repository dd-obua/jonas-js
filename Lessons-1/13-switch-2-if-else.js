const day = 'Monday';

if (day === 'Monday') {
  console.log('Plan course structure');
  console.log('Go to codding meetup ');
} else if (day === 'Tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'Wednesday' || day === 'Thursday') {
  console.log('Write code examples');
} else if (day === 'Friday') {
  console.log('Record videos');
} else if ((day = 'Saturday' || day === 'Sunday')) {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day');
}
