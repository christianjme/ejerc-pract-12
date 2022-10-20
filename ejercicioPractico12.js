function webCam(id) {
  const $video = document.getElementById(id);
  // console.log(navigator.mediaDevices)

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log(stream)
        $video.srcObject = stream
        $video.play()
        $video.controls = true
      })
      .catch((err) => {
        console.log(`Error: ${err}`)

        $video.insertAdjacentHTML('beforebegin',`<p>${err}</p>`)
      });
  }
}

addEventListener("DOMContentLoaded", (e) => webCam("webcam"));
