const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')
const $progress = document.querySelector('#progress')

$play.addEventListener('click', () => {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  $backward.hidden = false
  $forward.hidden = false
})

$pause.addEventListener('click', () => {
  $video.pause()
  $pause.hidden = true
  $play.hidden = false
  $backward.hidden = true
  $forward.hidden = true
})

$forward.addEventListener('click', () => $video.currentTime += 10)
$backward.addEventListener('click', () => $video.currentTime -= 10)

$video.addEventListener('loadedmetadata', () => {
  $progress.max = $video.duration
})

$video.addEventListener('timeupdate', () => {
  $progress.value = $video.currentTime

  if (parseFloat($progress.value) === parseFloat($progress.max)) {
    console.log('end');
    $play.hidden = false
    $pause.hidden = true
    $backward.hidden = true
    $forward.hidden = true
  }
})

$progress.addEventListener('input', () => {
  $video.currentTime = $progress.value
})