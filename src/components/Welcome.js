import React from 'react';
import Faq from './Faq';
function Welcome() {
    return (
    <div className="welcome">
        <Faq content={{
            question:"What are these images?",
            answer:"The images on this site were generated using a specific type of machine-learning algorithm known as a generative adversarial network (GAN)."
        }}
        />

        <Faq content={{
            question:"How did I generate these images?",
            answer:"These images were generated using the program Big Sleep, a GAN designed to generate images based on an input phrase."
        }}
        />

        <Faq content={{
            question:"How can you generate images like these?",
            answer:"The Big Sleep source code is available on github and is free to use. You will need familiarity with programming and machine learning to use Big Sleep, but there is a guide on using Big Sleep for novice coders."
        }}
        />

        <div className="big-sleep-container">
            <h3>Big Sleep</h3>
            <ul>
                <li>Github Repo <span className="link"><a href="https://github.com/lucidrains/big-sleep">https://github.com/lucidrains/big-sleep</a></span></li>
                <li>Google Colab Notebook  <span className="link"><a href="https://colab.research.google.com/drive/1NCceX2mbiKOSlAd_o7IU7nA9UskKN5WR?usp=sharing">https://colab.research.google.com/drive/1NCceX2mbiKOSlAd_o7IU7nA9UskKN5WR?usp=sharing</a></span></li>
                <li>A tutorial on using the Google Colab Notebook to generate your own images <span className="link"><a href="https://www.reddit.com/r/MachineLearning/comments/kzr4mg/p_the_big_sleep_texttoimage_generation_using/">https://www.reddit.com/r/MachineLearning/comments/kzr4mg/p_the_big_sleep_texttoimage_generation_using/</a></span></li>
            </ul>
        </div>
    </div>
    )
}

export default Welcome;