export function displayDialogue(text, onDisplayEnd) {
  const dialogueUI = document.getElementById("textbox-container")
  const dialogue = document.getElementById("dialogue")
  dialogueUI.style.display = "block"
  let index = 0
  let CurrentText = ""
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      CurrentText += text[index]
      dialogue.innerHTML = CurrentText
      index++
      return
    }
    clearInterval(intervalRef)
  }, 5)

  const closebtn = document.getElementById("close")
  function onCloseBtnClick() {
    onDisplayEnd()
    dialogueUI.style.display = "none"
    dialogue.innerHTML = ""
    clearInterval(intervalRef)
    closebtn.removeEventListener("click", onCloseBtnClick)
  }

  closebtn.addEventListener("click", onCloseBtnClick)
}

export function setCamScale(k) {
  const resizeFactor = k.width() / k.height()
  if (resizeFactor < 1) {
    k.camScale(k.vec2(1))
    return
  }
  k.camScale(k.vec2(1.5))
}
