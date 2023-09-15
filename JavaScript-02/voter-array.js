const voters = [
  ["Antonio", true, 5],
  ["Marija", false],
  ["Darko", true, 3],
  ["Kristijan", false],
  ["Blagica", true, 5],
];

let enterName = prompt("Enter a name:");
document.body.style.marginTop = "30px";
function votersName(voter) {
  for (let i = 0; i < voter.length; i++) {
    if (voter[i][0] === enterName) {
      document.getElementById('name').innerText = voter[i][0];
      if (voter[i][1] == true) {
        document.getElementById('vote').innerText = 'Voted!'
        if (voter[i][2]) {
          document.getElementById('grade').innerText = voter[i][2];
        }
      } else {
        document.getElementById('vote').innerText = "Didn't Vote!";
        document.getElementById('grade').style.display = 'none';
      }
      break;
    }
  }
}
votersName(voters);

