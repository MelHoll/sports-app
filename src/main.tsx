import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App.tsx'
import 'src/index.css'

//Mock services
const deferRender = async (): Promise<ServiceWorkerRegistration | undefined> => {
  const { worker } = await import('src/mocks/browser');
  return worker.start();
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
});
