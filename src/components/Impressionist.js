import React from 'react'
import Image from './Image'

import impressionist_1 from '../images/impressionist/a_tropical_beach_in_the_style_of_Claude_Monet.png'
import impressionist_2 from '../images/impressionist/volcano_in_the_style_of_claude_monet.png'
import impressionist_3 from '../images/impressionist/a_mountain_surrounded_by_a_forest.png'
import impressionist_4 from '../images/impressionist/marine_life.png'
import impressionist_5 from '../images/impressionist/spiral_galaxy.png'
import impressionist_6 from '../images/impressionist/rainforest.png'


function Impressionist() {
    return (
        <section className="gallery min-vh-100">
            <div className="container-lg">
                <div className="row">
                    <Image content={{
                        source:impressionist_1,
                        caption:"'tropical beach'"
                    }} 
                    />

                    <Image content={{
                        source:impressionist_2,
                        caption:"'volcano'"
                    }} 
                    />

                    <Image content={{
                        source:impressionist_3,
                        caption:"'mountain surrounded by a forest'"
                    }}
                    />

                    <Image content={{
                        source:impressionist_4,
                        caption:"'marine life'"
                    }} 
                    />

                    <Image content={{
                        source:impressionist_5,
                        caption:"'spiral galaxy'"
                    }}
                    />

                    <Image content={{
                        source:impressionist_6,
                        caption:"'rainforest'"
                    }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Impressionist