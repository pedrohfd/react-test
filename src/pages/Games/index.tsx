import { Fragment, useEffect } from 'react'
import Button from '../../components/Button'
import Filters from '../../components/Filters'
import Header from '../../components/Header'

import { Container, Bar } from './styles'

interface DataProps {
  item: string
}

const Games = () => {
  const customData = require('../../assets/games.json')
  const games = JSON.parse(customData).types

  return (
    <Fragment>
      <Header />
      <Container>
        <Bar>
          {customData}
          <Button route='/new-game' isGreen={true} name='New Bet' />
        </Bar>
      </Container>
    </Fragment>
  )
}

export default Games
