import React from 'react'
import { Link } from 'react-router-dom';


import "../css/project.css"
import Footer from './Footer';
function project() {
  return (
    <div className='project'>
      <header>
        <h1>
          projects
        </h1>
        <p>
          my projects are related to my my thinking  nature
        </p>
      </header>
      {/* the project detailes are given */}
      <div className='projectdetales'>

        <div className='project1'>
          <div className='pname'>

            <h2>
              chat with mythri
            </h2>
            <Link className='link'> link *</Link>
            <span className="spantext">
              the chatting  application
            </span>

          </div>
          <div className='pdetailes'>
            <h2 className='text'>
              the project 1:
              the chating boat
            </h2>
            <p style={{ float: "center" }} className='left'>

              <span className="spantext" >
                Application Purpose Statement
              </span>
              <br />

              The primary objective of this application is to provide companionship and alleviate loneliness by engaging users in friendly conversations.

            </p>
            <Link className='link'>link*</Link>
            <p>
              <span className="spantext">
                resouces:
              </span>
              HTML  , CSS  , JAVASCRIPT , REACT
            </p>
          </div>
        </div>
        {/* project 2 */}
        <div className='project1 two'>
          <div className='pname'>
            <h2>
              chat with mythri
            </h2>
            <span className="span">
              the chatting  application
            </span>
          </div>
          <div className='pdetailes'>
            <h2 className='text'>
              the chating boat
            </h2>
          </div>
        </div>
        {/* project 3 */}
        <div className='project1 three'>
          <div className='pname'>
            <h2>
              chat with mythri
            </h2>
            <span className="span">
              the chatting  application
            </span>
          </div>
          <div className='pdetailes'>
            <h2 className='text'>
              the chating boat
            </h2>
          </div>
        </div>


      </div>

<Footer/>
    </div>
  )
}

export default project