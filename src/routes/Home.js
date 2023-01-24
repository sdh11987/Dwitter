import { dbService } from 'fbase';
import React, { useState } from 'react';

const Home = () => {
  const [dweet, setDweet] = useState("")
  const onSubmit = (event) => {
    event.preventDefault()
    dbService.collection("dweets").add({
      dweet,
      createAt: Date.now()
    })
    setDweet("")
  }
  const onChange = (event) => {
    const {target: {value}} = event
    setDweet(value)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={dweet} onChange={onChange} type="text" placeholder="메세지를 입력하세요!" maxLength={120} />
        <input type="submit" value="Dweet" />
      </form>
    </div>
  )
}

export default Home;