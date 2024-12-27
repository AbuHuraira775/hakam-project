import React, { useState } from 'react';
import Footer from "../components/Footer";
import './faq.css';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionClick = (index) => {
    // Toggle the active index
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <main className="main">
        <section className="section-box mb-30 bg-brand-2 pt-60 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wrapper">
                  {Array(4).fill().map((_, index) => (
                    <div className="container1" key={index}>
                      <div
                        className={`question ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => questionClick(index)}
                      >
                        How do I verify my email?
                      </div>
                      <div
                        className="answercont"
                        style={{
                          maxHeight: activeIndex === index ? '200px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.3s ease',
                        }}
                      >
                        <div className="answer">
                          Click the link in the verification email from verify@codepen.io (be sure to check your spam folder or other email tabs if it's not in your inbox). Or, send an email with the subject "Verify" to verify@codepen.io from the email address you use for your CodePen account.
                          <br /><br />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Faq;
