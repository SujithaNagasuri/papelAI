import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import teacherImg from './media/undraw_teacher_re_sico.svg';
import performanceImg from './media/undraw_performance_overview_re_mqrq.svg';
import readingImg from './media/undraw_reading_book_re_kqpk.svg';
import chatBotImg from './media/undraw_chat_bot_re_e2gj.svg';



const Userdashboard = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            window.location.href = '/login';
        }
    }, []);

    return (

        <section className="userdashboard container-fluid px-5 py-4">
      <nav className="d-flex align-items-center justify-content-between">
        <h3><i className="fa-solid fa-brain" style={{ fontSize: '2rem' }}></i> papelAI</h3>
        <a href="/" className="logout btn btn-dark"> <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>Logout</a>
      </nav>

      <h3 className="text-center mt-5"><i className="fa-solid fa-bookmark me-3"></i>Welcome {username}!</h3>

      <div className="d-flex mt-5 intro-box">
        <div className="intro" id="newtest">
          <img src={teacherImg} alt="" />
          <h2 className="mt-3">New Test</h2>
          <a href="/userdashboard/Newtest" className='btn btn-dark'>Explore</a>
        </div>
        <div className="intro" id="mytest">
          <img src={performanceImg} alt="" />
          <h2 className="mt-3">My Tests</h2>
          <a href="/userdashboard/Newtest" className='btn btn-dark'>Explore</a>
        </div>
        <div className="intro" id="Support">
          <img src={readingImg} alt="" />
          <h2 className="mt-3">Support</h2>
          <a href="" className='btn btn-dark'>Explore</a>
        </div>
        <div className="intro" id="settings">
          <img src={chatBotImg} alt="" />
          <h2 className="mt-3">Settings</h2>
          <a href="" className='btn btn-dark'>Explore</a>

        </div>
      </div>

      <h5 className="mt-5">Roleplay History</h5>
      <hr />

      <div className="headings">
        <div><p>Session ID</p></div>
        <div><p>Date</p></div>
        <div><p>View</p></div>
      </div>
      <hr />
    </section>


        // <div className='userdashboard'>

        //     <h1>Welcome, {username}!</h1>

        // </div>
    );
}

export default Userdashboard;