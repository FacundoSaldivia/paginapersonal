const modal1 = document.querySelector('.modal1'); /*El fondo oscuro*/
const projects = document.querySelectorAll('.proyecto'); /*que se clickea*/
const original = document.querySelector('.img'); /* Aca va el div que aparece */
const caption = document.querySelector('.caption'); 
const gitIcon = document.querySelector('.gitIcon');
const pageLink = document.querySelector('.pageLink');

projects.forEach((preview) => {
  preview.addEventListener('click', ()=>{

      modal1.classList.add('open');
      original.classList.add('open');
      //Cambio dinamico de imagen y texto
      const originalSrc = preview.getAttribute('alt'); /* aca esta el contenido de la imagen*/ 
      original.src = `${originalSrc}`
      const descpricion = preview.lastElementChild.innerHTML;
      caption.textContent = descpricion;
      const linkGit = preview.lastElementChild.getAttribute('alt');
      gitIcon.setAttribute('href',linkGit) ;
      const pageLinkSrc = preview.lastElementChild.getAttribute('src');
      pageLink.setAttribute('href',pageLinkSrc);

  })
})

modal1.addEventListener('click',(e)=>{
  if(e.target.classList.contains('modal1')){
    console.log(e.target.classList)
    modal1.classList.remove('open');
    original.classList.remove('open');
  }
})

modal1.addEventListener('click', (e) => {
  if (e.target.classList.contains('button-x')){
    modal1.classList.remove('open');
    original.classList.remove('open');
  }
})
