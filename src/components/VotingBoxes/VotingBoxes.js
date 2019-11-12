import React, { useEffect, useState, useRef, useContext } from 'react'
import { MessagesContext } from '../Message/MessageContext'
import thumbUp from '../../assets/thumb-up.svg'
import './VotingBoxes.scss'

const Entry = props => {
  const { entry, onVote } = props
  const [voteAction, setVoteAction] = useState()
  const { messages, setMessage } = useContext(MessagesContext)
  const [hasVoted, setHasVoted] = useState(false)
  const { votes } = entry
  const image = {
    backgroundImage: `url(assets/${entry.image})`
  }
  const totalVotes = votes.up + votes.down
  const results = {
    upPercent: Math.round(votes.up * 100 / totalVotes),
    downPercent: Math.round(votes.down * 100 / totalVotes)
  }

  return (
    <div style={image} className="voting-boxes__entry">
      <div className="voting-boxes__wrapper">
        <div className="voting-boxes__content">
          <h3 className="voting-boxes__title">
            { votes.up > votes.down ? (
              <div className="voting-boxes__title-icon voting-boxes__title-icon--up">
                <img src={thumbUp} alt="Like"/>
              </div>          
            ) : (
              <div className="voting-boxes__title-icon voting-boxes__title-icon--down">
                <img src={thumbUp} alt="Dislike"/>
              </div>
            ) }
            {entry.name}
          </h3>
          <div className="voting-boxes__description">{entry.description}</div>
          <div className="voting-boxes__actions">
            {!hasVoted ? (
              <>
                <button 
                  onClick={() => setVoteAction('increment')} 
                  className={`voting-boxes__action voting-boxes__action--up ${voteAction === 'increment' ? 'voting-boxes__action--selected' : ''}`}
                >
                  <img src={thumbUp} alt="Like"/>
                </button>
                <button 
                  onClick={() => setVoteAction('decrement')} 
                  className={`voting-boxes__action voting-boxes__action--down ${voteAction === 'decrement' ? 'voting-boxes__action--selected' : ''}`}
                >
                  <img src={thumbUp} alt="Dislike"/>
                </button>
                <button disabled={!voteAction} onClick={() => {
                  onVote(entry.id, voteAction)
                  setHasVoted(true)
                  setMessage('Thank you for voting!')
                }} className="voting-boxes__link">
                  Vote now
                </button>
              </>
            ) : (
              <button onClick={() => {
                setVoteAction(null)
                setHasVoted(false)
              }} className="voting-boxes__link">
                Vote again
              </button>
            )}
          </div>
        </div>
        <div className="voting-boxes__results">
          <div style={{width: `${results.upPercent}%`}} className="voting-boxes__results-thumb voting-boxes__results-thumb--up">
            <i className="voting-boxes__results-thumb-icon voting-boxes__results-thumb-icon--up"><img src={thumbUp} alt="Like"/></i>
            {results.upPercent}%
          </div>
          <div style={{width: `${results.downPercent}%`}} className="voting-boxes__results-thumb voting-boxes__results-thumb--down">
            {results.downPercent}%
            <i className="voting-boxes__results-thumb-icon voting-boxes__results-thumb-icon--down"><img src={thumbUp} alt="Dislike"/></i>
          </div>
        </div>
      </div>
    </div>
  )
}

const Hero = (props) => {
  const { entries } = props
  const [entriesFromLocal, setEntriesFromLocal] = useState([])

  const onVote = (entryId, action) => {
    let entryToUpdate = entriesFromLocal.filter(entry => entry.id === entryId)
    entryToUpdate = entryToUpdate[0]

    if(!entryToUpdate || !action) return

    if (action === 'increment') {
      entryToUpdate.votes.up++
    }
    
    if (action === 'decrement') {
      entryToUpdate.votes.down++
    }

    const updatedEntries = entriesFromLocal.map(entry => {
      if (entry.id === entryId) {
        return entryToUpdate
      }

      return entry
    })
    localStorage.removeItem('entries')
    localStorage.setItem('entries', JSON.stringify(updatedEntries))
  }

  useEffect(() => {
    const entriesFromLocalStorage = localStorage.getItem('entries')
    if(entriesFromLocalStorage && entriesFromLocalStorage.length) {
      setEntriesFromLocal(JSON.parse(entriesFromLocalStorage))
    } else if(entries.length) {
      localStorage.setItem('entries', JSON.stringify(entries))
      setEntriesFromLocal(entries)
    }
  }, [entries])

  return (
    <div className="voting-boxes">
      <div className="container">
        <div className="voting-boxes__list">
          { entriesFromLocal.map(entry => (
            <Entry 
              key={entry.id} entry={entry} 
              onVote={onVote} 
            />
          )) }
        </div>
      </div>
    </div>
  );
}

export default Hero
