document.querySelector('button').addEventListener('click', getMedia)

function getMedia(){
  const userDate = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${userDate}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type == 'image') {
          document.querySelector('img').src = data.hdurl
        }
        else if (data.media_type == 'video') {
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('#title').innerText = data.title;
        document.querySelector('#explanation').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}