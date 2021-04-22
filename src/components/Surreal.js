import React from 'react'
import Image from './Image'
import surreal_1 from '../images/surreal/the_fabric_of_spacetime_in_the_style_of_Salvador_Dali.png'
import surreal_2 from '../images/surreal/human_emotions.png'
import surreal_3 from '../images/surreal/surreal_imagination_of_the_human_mind.png'
import surreal_4 from '../images/surreal/surreal_representation_of_family.png'
import surreal_5 from '../images/surreal/our_solar_system_in_the_style_of_salvador_dali.png'
import surreal_6 from '../images/surreal/flowers.png'

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* <Surreal>: - contains and loads all surrealist-themed
*              images
*
*            - gets loaded from <Header>
*                     
* @args:     none
*
* @return:   1) six <Image> components, each with a source
*               path and caption describing the image
* * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function Surreal() {
    return (
        <section className="gallery min-vh-100">
        <div className="container-lg">
            <div className="row">
                <Image content={{
                    source:surreal_1,
                    caption:"'the fabric of space and time'"
                }} 
                />

                <Image content={{
                    source:surreal_2,
                    caption:"'human emotions'"
                }} 
                />

                <Image content={{
                    source:surreal_3,
                    caption:"'an imagination of the human mind'"
                }} 
                />

                <Image content={{
                    source:surreal_4,
                    caption:"'a surreal family'"
                }} 
                />

                <Image content={{
                    source:surreal_5,
                    caption:"'solar system in the style of Dali'"
                }} 
                />

                <Image content={{
                    source:surreal_6,
                    caption:"'flowers in the style of Dali'"
                }} 
                />
            </div>
        </div>
    </section>

    )
}

export default Surreal