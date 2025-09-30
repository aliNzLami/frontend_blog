import React from 'react'
import ArticlesHeader from '../../../components/ArticlesHeader'
import Paragraph from '../../../components/Paragraph'
import Centered from '../../../components/Centered';
import Pic from '../../../components/Pic';
import pic3 from './3.jpg';
import pic2 from './2.jpg';
import pic1 from './1.jpg';
import xp from './xp.png';
import video from './maybe.mp4';

function XP() {
    return (
        <>
            <ArticlesHeader />

            <Paragraph mb={true}>
                When I saw those images on Pinterest
            </Paragraph>

            <Pic src={pic3} alt={'windows XP nostalgia'} />

            <Centered>
                <Paragraph mb={true}>
                    Green Hills
                </Paragraph>
            </Centered>

            <Pic src={pic2} alt={'windows XP nostalgia'} />

            <Centered>
                <Paragraph mb={true}>
                    Fragmented Skies
                </Paragraph>
            </Centered>

            <Pic src={pic1} alt={'windows XP nostalgia'} />

            <Centered>
                <Paragraph mb={true}>
                    Digital Errors in the Middle of Nature
                </Paragraph>
            </Centered>


            <br />
            <br />

            <Paragraph mb={true}>
                I was convinced that my understanding of Windows XP was correct. 
            </Paragraph>

            <Paragraph>
                XP wasn’t just an operating system.
            </Paragraph>
            <Paragraph>
                It was an aesthetic statement.
            </Paragraph>
            <Paragraph>
                An attempt to build a future that wasn’t cold and mechanical.
            </Paragraph>
            <Paragraph>
                it was a window to a new world,
            </Paragraph>
            <Paragraph>
                human,
            </Paragraph>
            <Paragraph>
                tangible,
            </Paragraph>
            <Paragraph mb={true}>
                bloom.
            </Paragraph>

            <Paragraph>
                Have you ever thought...
            </Paragraph>
            <Paragraph mb={true}>
                What were people runnung away from, back in 1996 to 2004?
            </Paragraph>

            <Paragraph mb={true}>
                What if Kurt Cobain waited only 3 more years?
            </Paragraph>

            <Paragraph>
                Let me tell you an interesting fact...
            </Paragraph>
            <Paragraph>
                Let's be honset, people were drown in the nihilism in 90s.
            </Paragraph>
            <Paragraph mb={true}>
                The main symbol of 90s was Grunge, could you imagine how absurd is that? 
            </Paragraph>

            <Paragraph>
                Thanks to America,
            </Paragraph>
            <Paragraph mb={true}>
                The big distraction came out...
            </Paragraph>

            <Centered>
                <video className='rounded-10 dBlock mb-50 video fullImgMobile' loop={true} controls={false} autoPlay="autoplay" src={video}></video>
            </Centered>

            <br />
            <br />

            <Paragraph>
                Windows XP arrived in the early 2000s, when the world was still teetering between analog and digital.
            </Paragraph>
            <Paragraph>
                With XP, Microsoft wanted to create an experience.
            </Paragraph>
            <Paragraph>
                The name comes from "eXPerience," and that's exactly what it screams in its design:
            </Paragraph>

            <Paragraph>
                - Warm colors,
            </Paragraph>
            <Paragraph>
                - Rounded Corners,
            </Paragraph>
            <Paragraph mb={true}>
                - A startup sound, like an invitation to a safe and personal digital world
            </Paragraph>

            <Paragraph>
                XP wanted to say: 
            </Paragraph>
            <Paragraph mb={true}>
                "Technology can be lovely. It can be relaxing. It can be like a garden, not a factory." 
            </Paragraph>
            
            <Paragraph>
                And now, years later, when I saw those images on Pinterest
            </Paragraph>
            <Paragraph mb={true}>
                the combination of nature with digital errors, the skies that were shattered like Windows windows...
            </Paragraph>

            <Paragraph>
                I realized that XP still lives on. Not on laptops, but in our minds. 
            </Paragraph>
            <Paragraph mb={true}>
                In a beautiful memory. In a dream of a future that wanted to be human.
            </Paragraph>

            
            <Paragraph mb={true}>
                How does it relate to my blog?
            </Paragraph>
            <Paragraph>
                It relates to my career.
            </Paragraph>
            <Paragraph>
                It relates to my character.
            </Paragraph>
            <Paragraph>
                I am a 2000-born Gen-Z.
            </Paragraph>
            <Paragraph>
                I grew up with XP & PS2.
            </Paragraph>
            <Paragraph>
                I grew up with mobile Java games.
            </Paragraph>
            <Paragraph>
                I grew up with online Flash games.
            </Paragraph>
            <Paragraph>
                I grew up with vintage customizable blogs.
            </Paragraph>
            <Paragraph>
                I am a Frontend Engineer now.
            </Paragraph>
            <Paragraph>
                But when I code CSS,
            </Paragraph>
            <Paragraph>
                I do not feel like an engineer.
            </Paragraph>
            <Paragraph>
                I feel 2004.
            </Paragraph>
            <Paragraph mb={true}>
                I feel home...
            </Paragraph>

            <Pic src={xp} alt={'bliss'} />
            <Centered>
                <Paragraph mb={true}>
                    Home
                </Paragraph>
            </Centered>
        </>
    )
}

export default XP