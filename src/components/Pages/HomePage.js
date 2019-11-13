import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero'
import BoxMessage from '../BoxMessage/BoxMessage'
import Title from '../Title'
import VotingBoxes from '../VotingBoxes/VotingBoxes'
import Postulate from '../Postulate/Postulate'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { getHero, getEntries } from '../../helpers/data'

export const HomePage = (props) => {
  const [entries, setEntries] = useState([])
  const [hero, setHero] = useState({})

  useEffect(() => {
    getEntries(setEntries)
    getHero(setHero, 0)
  }, [])

  return (
    <div className="page">
      <Header floating />
      <Hero hero={hero}/>
      <BoxMessage />
      <Title level={2}>Votes</Title>
      <VotingBoxes entries={entries} />
      <Postulate />
      <Footer />
    </div>
  );
}