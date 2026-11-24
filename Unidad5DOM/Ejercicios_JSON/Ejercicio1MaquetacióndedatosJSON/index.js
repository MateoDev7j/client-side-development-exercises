let result = '';
let r=0;
let g=0;
let b=0;
const luminosidad = (r * 299 + g * 587 + b * 114) / 1000;
//Si es mayor a 128 es claro (letra negra), si no es oscuro (letra blanca)
result = luminosidad < 128 ? 'black' : 'white';
let datos={};
datos={
  "colors" : [
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "#FF0000"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    }
  ]
}
const divContenedor = document.getElementById('contenedor-colores');
let divAcutal=null;
let i=0;
for(const item of datos.colors){
    i++;
    console.log(item.color);
    console.log(item.code.rgba);
    divAcutal=document.createElement('div');
    divAcutal.classList.add('clase-'+i);
    divAcutal.style.padding="1rem";
    divAcutal.style.margin="0";
    divAcutal.style.backgroundColor=item.code.hex;
    divAcutal.style.display='flex';
    divAcutal.style.justifyContent = 'space-between';
    divAcutal.style.alignItems = 'flex-end';
    let divP1 = document.createElement('div');
    divP1.classList.add('clase-'+i);

    let pColor=document.createElement('p');
    pColor.classList.add('clase-'+i);
    pColor.innerHTML=item.color;
    pColor.style.fontWeight='bold';
    let pCategory = document.createElement('p');
    pCategory.classList.add('clase-'+i);
    pCategory.innerHTML = item.category;
    let pType = document.createElement('p');
    pType.classList.add('clase-'+i);
    pType.innerHTML=(item.type ? item.type : '');
    let divP = document.createElement('div');
    divP.classList.add('clase-'+i);
    divP.style.flexDirection='column';
    divP.style.textAlign='right';
    let pRgba= document.createElement('p');
    pRgba.classList.add('clase-'+i);
    pRgba.innerHTML=" rgba("+item.code.rgba+")";
    let pHex = document.createElement('p');
    pHex.classList.add('clase-'+i);
    pHex.innerHTML=item.code.hex;
    divAcutal.appendChild(divP1);
    divP1.appendChild(pColor);
    divP1.appendChild(pCategory);
    divP1.appendChild(pType);
    divAcutal.appendChild(divP);
    divP.appendChild(pRgba);
    divP.appendChild(pHex);
    let result = '';
    let r=item.code.rgba[0];
    let g=item.code.rgba[1];
    let b=item.code.rgba[2];
    const luminosidad = (r * 299 + g * 587 + b * 114) / 1000;
    //Si es mayor a 128 es claro (letra negra), si no es oscuro (letra blanca)
    result = luminosidad > 128 ? 'black' : 'white';
    divAcutal.style.color=result;
    divAcutal.style.borderRadius='10px'
    divAcutal.style.maxWidth='70%';
    divAcutal.style.border='10px black';
    divAcutal.style.borderColor='black';
    divContenedor.appendChild(divAcutal);
}