
import React,{useState} from "react";
import './Navbar.css'
const Navbar = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleAnimation = () => {
    setIsAnimated(true);

    // Delay the appearance by 0.5 seconds
    setTimeout(() => {
      // Set isAnimated to false after 0.5 seconds
      setIsAnimated(false);
    }, 500);
  };

  const handleNothingClick = () => {
    // Handle the click on the "Nothing" element
    // Trigger the animation
    handleAnimation();

    // Play the sound
    const audioElement = document.getElementById('nothing-audio');
    if (audioElement) {
      audioElement.play();
    }

    // Hide the "Nothing" element after a delay (adjust the delay as needed)
    setTimeout(() => {
      setIsAnimated(false);
    }, 3000); // 3000 milliseconds (3 seconds) delay for example
  };

  return(
    <header className="Header_header__r9N9Y __className_254d6c __variable_254d6c FooterRevealPageWrap_frame-wrap__PJi9O">
      <a className="Header_skip-link__VZ9J_" href="#page-content">Skip Navigation</a>
      <div className="Header_header__inner__nfTZS">
        <a className="Header_header__logo__7Zjhj" aria-hidden="true" tabIndex="-1" href="/">
          {/* <span className="hidden">Home</span> */}
      

        </a>
        <nav className="Header_menu__Yr6mh ">
          <ul className="Header_menu__list__h_Anx" style={{fontWeight: "bold"}}>
            <li style={{fontWeight: "bold"}} className="Header_menu__item__cb_Hw "><a className="Header_menu__link__UGkEv Header_menu__link--active__QKyk9" href="/">Home</a></li>
            <li className="Header_menu__item__cb_Hw"><a className="Header_menu__link__UGkEv" href="/about">About</a></li>
            <li className="Header_menu__item__cb_Hw"><a className="Header_menu__link__UGkEv" href="/skills">Skills</a></li>
            <li className="Header_menu__item__cb_Hw"><a className="Header_menu__link__UGkEv" href="/projects">projects</a></li>

            <li style={{ fontWeight: "bold" }} className="Header_menu__item__cb_Hw">
        <div className="link-wrap">
          <button className="Header_menu__link__UGkEv">Expertise</button>
          <div className="Header_menu__hover-pill__NFAxL"></div>
        </div>
      </li>
            <li className="Header_menu__item__cb_Hw"><a className="Header_menu__link__UGkEv" href="/contact">Contact</a></li>
          </ul>
          <div className="Header_menu__list__h_Anx Header_menu__list--twin__w_0Lp" style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}>
           
            <span className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS" style={{ gridColumn: 1,fontWeight: "bold" }}>Home</span>
            <span className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS" style={{ gridColumn: 2,fontWeight: "bold" }}>About</span>
            <span className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS" style={{ gridColumn: 3 }}>Project</span>
            <span className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS" style={{ gridColumn: 4 }}>Expertise</span>
            <span className="Header_menu__link__UGkEv Header_menu__link--twin__3W8NS" style={{ gridColumn: 5 }}>Contact</span>
            <div className={`Header_menu__hover-pill__NFAxL ${isAnimated ? 'visible' : ''}`} style={{ position: 'relative', gridColumn: 1, borderRadius: '100px', left: '0px', transform: 'none', transformOrigin: '50% 50% 0px' }}></div>
            <div className="Header_menu__active-pill__YdBUl" style={{ position: 'relative', gridColumn: 1, borderRadius: '100px', transform: 'none', transformOrigin: '50% 50% 0px', left: '0px' }}></div>
          </div>
        </nav>
        <div className={`Header_face__r0io3 ${isAnimated ? 'clicked' : ''}`} onClick={handleNothingClick}>
        <div style={{ transformOrigin: 'center top', transform: `rotate(${isAnimated ? '360deg' : '0deg'}) translateZ(0px)` }}>
          <div style={{ opacity: 1, transform: 'translateY(-50%) translateZ(0px)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40" style={{ '--width': 40, '--height': 40 }}>
              <path fill="currentColor" d="M0 18.166A3.635 3.635 0 0 0 3.637 21.8a3.635 3.635 0 0 0 3.637-3.633 3.635 3.635 0 0 0-3.637-3.633A3.635 3.635 0 0 0 0 18.166ZM32.734 3.633a3.635 3.635 0 0 0 3.637 3.633 3.635 3.635 0 0 0 3.638-3.633A3.635 3.635 0 0 0 36.37 0a3.635 3.635 0 0 0-3.637 3.633ZM7.273 0v3.633h10.912V21.8h14.548v-3.633H21.822V0H7.273ZM20.126 36.332A14.51 14.51 0 0 1 9.844 32.07l-2.57 2.567a18.135 18.135 0 0 0 12.852 5.327c5.014 0 9.56-2.037 12.853-5.327l-2.57-2.567a14.512 14.512 0 0 1-10.283 4.26Z"></path>
            </svg>
          </div>
        </div>
        {isAnimated && (
          <div className="gif-container">
            <div className="Nothing_nothing-wrapper__3K5Pl" aria-hidden="true">
              <div className="Nothing_nothing__zpuZI">
                <img src="/nothing/nothing-2.gif" alt="" width="81" height="200" />
                <audio id="nothing-audio" src="/nothing/nothing.mp3" preload="auto"></audio>
              </div>
            </div>
          </div>
        )}

        
      </div>
      </div>
    </header>
  );
};

export default Navbar;
