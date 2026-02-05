import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
    // return html saying "Under Construction"
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
                <h1>Under Construction </h1>
                <p>Stay tuned!</p>
            </div>
        </BrowserRouter>
)