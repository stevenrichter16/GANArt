import React from 'react'
import Image from './Image'
import fractal_1 from '../images/fractal/many_colorful_fractals.png'
import fractal_2 from '../images/fractal/many_fractals_in_the_style_of_van_gogh.png'
import fractal_3 from '../images/fractal/crystalline-fractals-repeating-into-infinity.png'
import fractal_4 from '../images/fractal/many_fractals_in_the_style_of_dr_suess.png'
import fractal_5 from '../images/fractal/fractals_made_from_fabric.png'
import fractal_6 from '../images/fractal/vibrant_fractals.png'

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* <Fractal>: - contains and loads all fractal-themed images
* 
*            - gets loaded from <Header> 
*           
* @args:     none
*
* @return:   1) six <Image> components, each with a source
*               path and caption describing the image
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function Fractal() {
    return (
        <section className="gallery min-vh-100">
            <script src="../src/bootstrap.bundle.min.js"></script>
            <div className="container-lg">
                <div className="row">
                        <Image content={{
                        source:fractal_1,
                        caption:"'many colorful fractals'"
                        }} 
                        />

                        <Image content={{
                        source:fractal_2,
                        caption:"'fractals in the style of Van Gogh'"
                        }}
                        />

                        <Image content={{
                        source:fractal_3,
                        caption:"'crystaline fractals'"
                        }} 
                        />

                        <Image content={{
                        source:fractal_4,
                        caption:"'fractals in the style of Dr. Suess'"
                        }} 
                        />

                        <Image content={{
                        source:fractal_5,
                        caption:"'fractals made from fabric'"
                        }} 
                        />

                        <Image content={{
                        source:fractal_6,
                        caption:"'vibrant fractals'"
                        }} 
                        />
                </div>
            </div>   
        </section>
    )
}

export default Fractal


/* Implement later

// import Modal from "react-bootstrap/Modal"
// import ModalBody from "react-bootstrap/ModalBody"
// import ModalHeader from "react-bootstrap/ModalHeader"
// import ModalFooter from "react-bootstrap/ModalFooter"
// import { ModalTitle } from 'react-bootstrap'

<button onClick={showModal}>Display Modal</button>
                <Modal show={isOpen} onHide={hideModal}>
                    <ModalHeader>
                        <ModalTitle>TITLE</ModalTitle>
                    </ModalHeader>
                    <ModalBody className="gallery-modal">
                        <img onClick={showModal} src={fractal_6} alt="fractal" className="gallery-itemXXXX"/>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>

 const [isOpen, setIsOpen] = React.useState(false);

    const showModal = function() {
        console.log(e.target.src)
        
        setIsOpen(true)
    }

    const hideModal = function() {
        setIsOpen(false);
    }
*/
