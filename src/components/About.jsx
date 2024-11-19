import '../styles/About.css'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, et.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsum, tenetur nesciunt modi obcaecati quam quos fugit sunt, velit quod quo veritatis laborum at sed sit, excepturi necessitatibus sequi? Debitis.</p>
            <h4>Programming Language & Tools</h4>
            <div className="skills">
                <FaHtml5 /><FaCss3 /><FaPhp /><FaJs /><FaBootstrap />
                <FaGithub />
            </div>
        </div>
    </section>
  )
}

export default About