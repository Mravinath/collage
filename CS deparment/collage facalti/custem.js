let preveiwContainer = document.querySelector('.details-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
document.querySelectorAll('.detail-container .details').forEach(details =>{
  details.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = details.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){getAttribute
        preview.classList.add('active');
      }
    });
  };
});