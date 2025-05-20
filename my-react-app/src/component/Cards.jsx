import React from 'react'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous"></link>

// export default function Cards(card_img, card_title, card_list_1, card_list_2, card_list_3) {
//     return (
//         <div class="cards-container ">
//             <div class="card bg-light py-5">
//                 <img id="card_img" src="" class="card-img-top" alt="">
//                 ${card_img}
//                 </img>
//                 <div class="card-body">
//                     <h5 id="card_title" class="card-title">${card_title}</h5>
//                     <ul id="card_list">
//                         <li>${card_list_1}</li>
//                         <li>${card_list_2}</li>
//                         <li>${card_list_3}</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }
// import React from 'react'

function Cards({ card_img, card_title, card_list_1, card_list_2, card_list_3 }) {
  return (
    <div className="row" style={{ maxWidth: "20rem" }}>
      <div className="col">
        <div className="card">
          <img 
            src={card_img} 
            className="card-img-top" 
            alt={card_title} 
          />
          <div className="card-body">
            <h5 className="card-title">{card_title}</h5>
            <ul>
              <li>{card_list_1}</li>
              <li>{card_list_2}</li>
              <li>{card_list_3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

