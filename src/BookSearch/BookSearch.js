import react, { useState } from 'react'
import Card from './Card'
import axios from 'axios'
import './style.css'
import React from 'react'

export default function BookSearch() {
  const [search, setSearch] = useState('')
  const [bookData, setData] = useState([])
  const searchBook = (evt) => {
    if (evt.key === 'Enter') {
      axios
        .get(
          'https://www.googleapis.com/books/v1/volumes?q=' +
            search +
            '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' +
            '&maxResults=40',
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err))
    }
  }
  return (
    <>
      <div className="header">
        <div className="textArea">
          <h2>
            A room without books is like
            <br /> a body without a soul.
          </h2>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
         
          </div>
        </div>
      </div>

      <div className="container">{<Card book={bookData} />}</div>
    </>
  )
}