import './style.css'

import React from 'react'

export default function Card({ book }) {
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail

        return (
          <>
            <div className="card">
              <div className="card-area">
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}
