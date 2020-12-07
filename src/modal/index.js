export const modalListener = event => {
  event.preventDefault()
  const img = event.target
  const link = img.parentElement
  const videoId = link.dataset.videoid

  if (link && link.classList.contains('js-video-link')) {
    import(/*webpackChunkName: "modal"*/ './open-modal')
      .then(({ openModal }) => {
        openModal(videoId)
      })
      .catch(err => {
        console.log(err)
      })
  }
}