const formatDate = (timeInSeconds) => {
  let seconds = `${timeInSeconds}`;
  let minutes = 0;
  let hours = 0;

    if (seconds < 60){
      return `${seconds}s`;
    }
    else if (seconds < 3600) {
      minutes = Math.floor(seconds/60);
      let correctedSeconds = seconds - 60 * minutes;
      if (correctedSeconds === 0) {
        return `${minutes}m`;
      } else {
        return `${minutes}m ${correctedSeconds}s`;
      }
    }
    else if (seconds >= 3600) {
      hours = Math.floor( seconds/3600 );
      minutes = Math.floor( ( seconds - 3600 * hours ) / 60 );
      correctedSeconds = seconds - ( 3600 * hours + 60 * minutes );

      if (correctedSeconds === 0 && minutes === 0) {
        return `${hours}h`;
      }
      else if (correctedSeconds === 0) {
        return `${hours}h ${minutes}m`;
      }
      else if (minutes === 0) {
        return `${hours}h ${correctedSeconds}s`;
      }
      else {
        return `${hours}h ${minutes}m ${correctedSeconds}s`;
      }
    }
    else {
      return `0s`;
    }
}
module.exports = formatDate;
