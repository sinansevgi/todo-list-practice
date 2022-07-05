function dragDrop() {
  let dragged;
  let droped;

  /* events fired on the draggable target */
  document.addEventListener('drag', () => {

  }, false);

  document.addEventListener('dragstart', (event) => {
  // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  }, false);

  document.addEventListener('dragend', (event) => {
  // reset the transparency
    event.target.style.opacity = '';
  }, false);

  /* events fired on the drop targets */
  document.addEventListener('dragover', (event) => {
  // prevent default to allow drop
    event.preventDefault();
  }, false);

  document.addEventListener('dragenter', (event) => {
  // store a ref. on the droped elem
    droped = event.target.firstChild;
    // highlight potential drop target when the draggable element enters it
    if (event.target.className === 'task') {
      event.target.style.background = 'purple';
    }
  }, false);

  document.addEventListener('dragleave', (event) => {
  // reset background of potential drop target when the draggable element leaves it
    if (event.target.className === 'task') {
      event.target.style.background = '';
    }
  }, false);

  document.addEventListener('drop', (event) => {
  // prevent default action (open as link for some elements)
    event.preventDefault();

    const draggedDad = dragged.parentNode;
    const draggedclone = dragged.cloneNode(true);

    // move dragged elem to the selected drop target and viceversa
    if (event.target.className === 'task') {
      event.target.style.background = '';

      if (draggedDad) {
        draggedDad.appendChild(droped);
        draggedDad.removeChild(dragged);
        event.target.appendChild(draggedclone);
      }

      event.target.firstChild.style.opacity = '';
    }
  }, false);
}
// eslint-disable-next-line import/prefer-default-export
export { dragDrop };