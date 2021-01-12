const input = process.argv.splice(2).sort((a,b) => (a-b));;
const nums = input.map(Number);
const beeper = () => {
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > 0 && !isNaN(nums[i])) {
      let timer = ((nums[i])*1000)
      setTimeout(() => {
      process.stdout.write(`*BEEP!*\n`);
      }, timer);
    }
  }
}
beeper();
