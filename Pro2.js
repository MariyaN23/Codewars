/*Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.
Zero alone is fine, don't worry about it. Poor guy anyway */

function noBoringZeros(n) {
  let number = n;
  if (n == 0)
    {
      return 0;
    }
  else 
  {
  while ((number % 10) == 0) 
    {
      number = number / 10;
    }
  return number;
      }
}