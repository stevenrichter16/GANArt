import React from 'react'

function Footer() {
    return (
        <footer>
            <ul className="footer-list">
                <span className="my-info">Contact</span>
                <li><span className="contact-item">Github</span>
                    <span className="link">
                        <a href="https://github.com/stevenrichter16/Portfolio">
                         https://github.com/stevenrichter16/Portfolio
                        </a>
                    </span>
                </li>
                <li id="linked-in"><span className="contact-item">LinkedIn</span>
                    <span className="link">
                        <a href="https://www.linkedin.com/in/stevenrichter16">
                             https://www.linkedin.com/in/stevenrichter16
                        </a>
                    </span>
                </li>
                <li id="email"><span className="contact-item">Email </span> 
                    <span className="link">
                         stevenrichter16@gmail.com
                    </span>
                </li>
            </ul>
        </footer>         
    )
}

export default Footer;