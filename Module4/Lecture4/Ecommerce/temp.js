function convertToTimeZone(date, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
}

// Example usage:
const date = new Date(); 

const timeZoneIndia = 'Asia/Kolkata';
const timeZoneNewYork = 'America/New_York';
const timeZoneLondon = 'Europe/London';

console.log(`Time in India: ${convertToTimeZone(date, timeZoneIndia)}`);
console.log(`Time in New York: ${convertToTimeZone(date, timeZoneNewYork)}`);
console.log(`Time in London: ${convertToTimeZone(date, timeZoneLondon)}`);
