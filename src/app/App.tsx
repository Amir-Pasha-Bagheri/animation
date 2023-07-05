import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../assets/theme'
import Suspensor from './suspensor'
import DefaultLoader from './loaders/DefaultLoader'

const RoomFacilities = React.lazy(() => import('./roomFacilities'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspensor fallback={<DefaultLoader />}>
        <RoomFacilities />
      </Suspensor>
    </ThemeProvider>
  )
}

export default App
