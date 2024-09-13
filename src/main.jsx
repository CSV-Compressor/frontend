import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Compressor from './pages/Compressor'
import './styles/global.scss'
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')).render(
  <SnackbarProvider
  persist={false}
  anchorOrigin={{
    vertical:"top",
    horizontal:'right'
  }}
  >
    <StrictMode>
      <Compressor/>
    </StrictMode>
  </SnackbarProvider>
)
