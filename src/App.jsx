import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';

function App() {

  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center w-100' style={{height:"100vh"}}>
          <div className='d-flex flex-column align-items-center justify-content-center bg-light rounded-2'>
            <h2 className='text-primary'>Counter Application</h2>
              <Counter/>
          </div>
      </div>
    </>
  )
}

export default App
