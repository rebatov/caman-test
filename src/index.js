let app = document.getElementById('app');
// const caman = require('caman').Caman;
app.innerHTML = '<h1>Caman test</h1>'
Caman("#dragon", function () {
  this.brightness(10);
  this.contrast(20);
  this.render(function () {
    alert("Done!");
  });
})
