import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import chatBotImg from './media/roleplayimg.svg';


const Newtest = () => {

  const [candidatename, changecandidatename] = useState();
  const [scenario, changescenario] = useState();
  const [targetrole, changetargetrole] = useState();
  const [level, setLevel] = useState();
  const [tone, setTone] = useState();

  function handleSubmit(e)
  {

  }

    return(
        <section className="userdashboard container-fluid px-5 py-4">
      <nav className="d-flex align-items-center justify-content-between">
        <h3><i className="fa-solid fa-brain" style={{ fontSize: '2rem' }}></i> papelAI</h3>
        <a href="/" className="logout btn btn-dark"> <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>Logout</a>
      </nav>
      <div className='row mt-5'>

        <div className='col-lg-5 p-5 offset-1'>

            <h2>Create <span>Roleplay</span></h2>
            <p>define the role-play scenario (e.g., I want to practice -handling customer complatints about late deliveries, Prepare me for a job interview for software engineer role).</p>
            <img src={chatBotImg} id='roleplayimg'></img>
        </div> 
        <div className='col-lg-5'>
        <form className="login-form p-4 mt-5" onSubmit={handleSubmit}>
              
              <label for="candidatename">candidate Name:</label>
              <input
                type="text"
                placeholder=""
                className="form-control mb-3"
                name="candidatename"
                value={candidatename}
                onChange={(e) => {
                  changecandidatename(e.target.value);
                }}
              />
      
              <label for="scenario">Scenario:</label>
              <input
                type="text"
                placeholder=""
                className="form-control mb-3"
                name="scenario"
                value={scenario}
                onChange={(e) => {
                  changescenario(e.target.value);
                }}
              />
              <label for="targetrole">Target role: </label>
              <input
                type="text"
                placeholder=""
                className="form-control mb-3"
                name="targetrole"
                value={targetrole}
                onChange={(e) => changetargetrole(e.target.value)}
              />

<label htmlFor="level-select">Choose a level: </label>
      <select id="level-select" className='form-control mb-3' value={level} onChange={setLevel}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <label htmlFor="tone-select">Choose a tone: </label>
      <select id="tone-select" className='form-control' value={tone} onChange={setTone}>
        <option value="formal">Formal</option>
        <option value="informal">Informal</option>
      </select>
              <button className="btn  sign-btns my-3 w-100">Generate</button>
            </form>
        </div> 


      </div>
      </section>
    )
}

export default Newtest;