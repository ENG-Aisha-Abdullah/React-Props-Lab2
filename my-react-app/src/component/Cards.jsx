import React from 'react'

export default function Cards(card_img, card_title, card_list) {
    return (
        <div class="cards-container">
            <div class="card">
                <img id="card_img" src="" class="card-img-top" alt=""></img>
                <div class="card-body">
                    <h5 id="card_title" class="card-title">Card title</h5>
                    <ul id="card_list">
                        <li>1:</li>
                        <li>2:</li>
                        <li>2:</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
