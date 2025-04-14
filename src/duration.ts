export function formatDuration(seconds: number): string {
  console.log(seconds);
  if (seconds < 0) {
    throw new Error("error negative seconds");
  }else if (seconds < 60) {
    return `${seconds}s`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m${remainingSeconds}s`;
  } else {
    const hours = Math.floor(seconds / 3600);
    if(seconds % 3600 === 0) {
      return `${hours}h`;
    }
    else{
    const remainingMinutes = Math.floor((seconds % 3600) / 60)
    if (seconds % 60 === 0) {
      return `${hours}h${remainingMinutes}m`;
    }else{
    const remainingSeconds = seconds % 60;
    return `${hours}h${remainingMinutes}m${remainingSeconds}s`;
    }}
  }
}
