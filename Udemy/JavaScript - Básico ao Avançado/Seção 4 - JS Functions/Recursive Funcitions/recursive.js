function recursive(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursive(max);
}

recursive(0);
console.log('-----------------');
recursive(100);
console.log('-----------------');
recursive(-100);