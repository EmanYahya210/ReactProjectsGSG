import './style.css'

import React from 'react'

export default function Card({ book }) {
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount

        return (
          <>
            <div className="card">
              <div className="card-area">
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">{amount}</p>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}
