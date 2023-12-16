let preveiwContainer = document.querySelector('.detail-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.detail-container .detail').forEach(detail =>{
  detail.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = detail.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});