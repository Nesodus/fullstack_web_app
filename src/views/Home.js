import React, { Component } from 'react'
import Navbar from "../components/navbar/Navbar";
import styled from 'styled-components';
import GlobalStyles from "../styles/Global";

class Home extends Component {
    state = {
        navbarOpen: false
    };

    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    };

    render() {

        return (
            <>
                <Navbar
                    navbarState={this.state.navbarOpen}
                    handleNavbar={this.handleNavbar}
                />
                <TextContainer>
                    <h2>

                        Lomography is the commercial trademark of Lomographische AG, Austria for products and services catering to lo-fi photographers. The name is inspired by the former state-run optics manufacturer LOMO PLC of Saint Petersburg, Russia. LOMO PLC created and produced the 35mm LOMO LC-A Compact Automat camera — which became the centerpiece of Lomography’s marketing and sales activities. This camera was loosely based upon the Cosina CX-1 and introduced in the early 1980s. In 1991, the Austrian founders of Lomography discovered the Lomo LC-A. They were “charmed by the unique, colorful, and sometimes blurry” images that the camera produced. After a series of international art exhibitions and marketing, Lomography signed an exclusive distribution agreement with LOMO PLC — thereby becoming the sole distributor of all Lomo LC-A cameras outside of the Soviet Union. Since the introduction of the original Lomo LC-A, Lomography has produced and marketed various lines of branded analogue cameras. Most of these cameras are designed to produce a single photographic effect. In 2005, production of the original Lomo LC-A was discontinued. Its replacement, the LC-A+, was introduced in Fall 2006. The new camera, made in China rather than Russia, featured the original Russian lens manufactured by LOMO PLC. This changed as of mid-2007 with the lens now made in China as well. Similar to Eastman Kodak’s concept of the “Kodak moment”, the Lomography website endorses a motto of “Don’t Think, Just Shoot”. This motto is accompanied by the Ten Golden Rules of Lomography; guidelines encouraging spontaneity and minimal consideration of formal technique. The cameras marketed by Lomography are generally low-fidelity and inexpensively constructed. Some cameras make use of multiple lenses and colored flashes, or exhibit optical distortions and light leaks. Current models marketed by Lomographische AG include Lomo LC-A, Diana, Holga, Holga 35mm, Actionsampler, Frogeye, Pop-9, Oktomat, Fisheye, Fisheye2, Colorsplash, Colorsplash Flash, F-stop Bang, SuperSampler, Horizon 202, Seagull TLR, and Smena 8M. The company also resells dead stock Polaroid cameras and Russian dead stock. The Lomographic Society International owns galleries, stores and “showcases” dedicated to the growth, support and public exposure of the art. The society is based in Vienna, Austria, where most of its events are organised. An example of the society’s cultural events showcasing photographs from the community is the Lomokikuyu competition, which raises money for eye surgeries and vision care in Kenya, in partnership with Viennese vision aid organisation Light for the World. The project has since been updated and donations now also go to the International Committee of the Red Cross to help fight the famine in East Africa. The organisation also organises the Lomography World Congress, an international conference of practitioners held in varying host cities. The website also features a magazine, which provides a photo archive storage for their work. Articles monitor trends emerging in the community and offer tips on. Aficionados of the hobby can blog their own tutorials to share their discoveries, fostering enthusiasm with the Lomographic art. Besides fans who are community members, Lomo Amigos, or friends of Lomography, are often celebrities who enjoy working with Lomography cameras and are invited to contribute to the magazine. They include Elijah Wood, Neil Gaiman, and David Arquette. The site also celebrates the work of Lomographers with online exhibits and competitions. Digital painting is an emerging art form in which traditional painting techniques such as watercolor, oils, impasto, etc. are applied using digital tools by means of a computer, a digitizing tablet and stylus, and software. Traditional painting is painting with a physical medium as opposed to a more modern style like digital. Digital painting differs from other forms of digital art, particularly computer-generated art, in that it does not involve the computer rendering from a model. The artist uses painting techniques to create the digital painting directly on the computer. All digital painting programs try to mimic the use of physical media through various brushes and paint effects. Included in many programs are brushes that are digitally styled to represent the traditional style like oils, acrylics, pastels, charcoal, pen and even media such as airbrushing. There are also certain effects unique to each type of digital paint which portraying the realistic effects of say watercolor on a digital ‘watercolor’ painting. In most digital painting programs, the user can create their own brush style using a combination of texture and shape. This ability is very important in bridging the gap between traditional and digital painting. Digital painting thrives mostly in production art. It is most widely used in conceptual design for film, television and video games. Digital painting software such as Corel Painter, Adobe Photoshop, ArtRage, GIMP, Krita and openCanvas give artists a similar environment to a physical painter: a canvas, painting tools, mixing palettes, and a multitude of color options. There are various types of digital painting, including impressionism, realism, and watercolor. There are both benefits and drawbacks of digital painting. While digital painting allows the artist the ease of 
                        Join 1,108 other followers

                    </h2>
                </TextContainer>
                <GlobalStyles/>
            </>
        )
    }
}

export default Home

const TextContainer = styled.div`
    margin: 0 auto;
    width: 75%;
    display: flex;
    text-align: justify;
    line-height: 1.6;
    word-spacing: 3px;
`;
