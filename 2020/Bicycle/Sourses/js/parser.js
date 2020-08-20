window.onload=()=>{
  const body=document.querySelector('body');

  function nextBox(element) {
      element.childNodes.forEach(node=>{
         if(node.nodeName.match(/^H\d$/)){
             console.log(node);
         }else{
             nextBox(node);
         }
      });
  }

  nextBox(body);
};