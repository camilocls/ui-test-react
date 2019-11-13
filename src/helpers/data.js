export const getHero = async (setData, item) => {
  await fetch('../hero.json', {
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
    setData(data[item])
  }).catch(error => {
    console.log(`Error: ${error.message}`)
  })
}

export const getEntries = async (setData) => {
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
    setData(data)
  }).catch(error => {
    console.log(`Error: ${error.message}`)
  })
}