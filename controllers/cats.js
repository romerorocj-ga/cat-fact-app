module.exports = {
    fact,
  }

function fact(req, res) {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(cat => {
        console.log(cat);
        res.render('cats/fact', {
          fact: cat.fact,
        })
      })
  }
  