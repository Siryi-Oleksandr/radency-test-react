export function cutString(inputString: string): string {
  if (inputString.length > 20) {
    return inputString.substring(0, 20) + '...';
  }
  return inputString;
}
