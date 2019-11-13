import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero'
import BoxMessage from '../BoxMessage/BoxMessage'
import Title from '../Title'
import VotingBoxes from '../VotingBoxes/VotingBoxes'
import Postulate from '../Postulate/Postulate'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Loader from '../Loader/Loader'
import { getHero, getEntries } from '../../helpers/data'

export const PastTrialsPage = (props) => {
  const [entries, setEntries] = useState([])
  const [hero, setHero] = useState({})
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    await getEntries(setEntries)
    await getHero(setHero, 2)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  if(loading) {
    return (
      <Loader />
    )
  }

  return (
    <div className="page">
      <Header floating />
      <Hero hero={hero} />
      <BoxMessage />
      <Title level={2}>Past Trials</Title>
      <VotingBoxes entries={entries} />
      <Title level={2}>Other Sample Title</Title>
      <VotingBoxes entries={entries} />
      <Postulate />
      <Footer />
    </div>
  );
}
