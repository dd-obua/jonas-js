const day = 'Saturday';

switch (day) {
  case 'Monday':
    console.log('Plan course structure');
    console.log('Go to codding meetup ');
    break;
  case 'Tuesday':
    console.log('Prepare theory videos');
    break;
  case 'Wednesday':
  case 'Thursday':
    console.log('Write code examples');
    break;
  case 'Friday':
    console.log('Record videos');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day');
}
