import './App.css'
import CardTask from './components/taskCard/CardTask';
import ButtonCreate from './components/buttonCreate/ButtonCreate';
import NavTextEditor from './components/navTextEditor/NavTextEditor';



function App() {

  return (
    <div className="app-container">
        <section className='nav-section'>
          <ButtonCreate />
          <NavTextEditor />
        </section>
        <section className='main-section'>
          <CardTask />
        </section>
       
    </div>
  )
  
}

export default App;
