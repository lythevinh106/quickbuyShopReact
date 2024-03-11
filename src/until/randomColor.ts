



const ListColor =["#A1034A","#2D5F84","#9ED065","#FFD6AE","#FB4B29"];


export  const getRandomRgbColor=():string=>{
       

    let length =  ListColor.length;


    return    ListColor[Math.floor(Math.random() * length)];
      

}









