import React, { useEffect, useState } from 'react';
import Hero from './Hero/Hero'
import BoxMessage from './BoxMessage/BoxMessage'
import Title from './Title'
import VotingBoxes from './VotingBoxes/VotingBoxes'

const HomePage = (props) => {
  const [entries, setEntries] = useState([])

  const getEntries = async () => {
    await fetch('../data.json', {
      headers: {
        Accept: 'application/json'
      }
    }).then(response => {
      if(!response.ok) {
        throw new Error('Upsss!')
      }

      return response
    }).then(async response => {
      const data = await response.json()
      setEntries(data)
    }).catch(error => {
      console.log(`Error: ${error.message}`)
    })
  }

  useEffect(() => {
    getEntries()
  }, [])

  return (
    <div className="page">
      <Hero />
      <BoxMessage />
      <Title level={2}>Votes</Title>
      <VotingBoxes entries={entries} />
    </div>
  );
}

export default HomePage;
