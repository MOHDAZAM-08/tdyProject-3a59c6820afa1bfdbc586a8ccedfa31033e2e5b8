import React, { useState } from 'react';
import Modal from './Modal';
import img1 from '../img/liv1.jpeg';
import img2 from '../img/liv2.jpeg';
import img3 from '../img/liv3.jpeg';
import img4 from '../img/liv4.jpeg';
import img5 from '../img/liv5.jpeg';
import img6 from '../img/liv6.jpeg';
import img7 from '../img/liv7.jpeg';
import img8 from '../img/liv8.jpeg';
import img9 from '../img/liv8.jpeg';
import img10 from '../img/liv (10).jpeg';
import img11 from '../img/liv (11).jpeg';
import img12 from '../img/liv (12).jpeg';
import img13 from '../img/liv (13).jpeg';
import img14 from '../img/liv (14).jpeg';
import img15 from '../img/liv (15).jpeg';
import img16 from '../img/liv (16).jpeg';
import img17 from '../img/liv (17).jpeg';
import img18 from '../img/liv (18).jpeg';
import img19 from '../img/liv (19).jpeg';
import img20 from '../img/liv (20).jpeg';
import to from '../img/to (7).jpeg';
import to2 from '../img/to (8).jpeg';
import to3 from '../img/to (10).jpeg';
import to4 from '../img/to (5).jpeg';
import to5 from '../img/to (3).jpeg';
import to6 from '../img/to (4).jpeg';   
import bed from '../img/bed.jpeg';   
import bed2 from '../img/bed (2).jpeg';   
import bed3 from '../img/bed (3).jpeg';   
import bed4 from '../img/bed (4).jpeg';   
import bed5 from '../img/bed (5).jpeg';   
import bed6 from '../img/bed (6).jpeg';   
import kit from '../img/kit.jpeg';   
import kit2 from '../img/kit (2).jpeg';
import kit3 from '../img/kit (3).jpeg';
import kit4 from '../img/kit (4).jpeg';
import Navbar from './Navbar';

export default function ProjectPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='projects'>
            <Navbar/>
            <div className="aboutProject">
              <h4>PROJECTS</h4>
            </div>
            <h1>This is LivingRoom Section</h1>
            <div className='projectSec'>
                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img1} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img1} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img2} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img2} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img3} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img3} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

      
                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img4} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img4} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img5} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img5} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img6} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img6} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img7} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img7} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img8} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img8} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img9} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img9} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img10} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img10} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img11} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img11} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img12} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img12} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img13} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img13} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img14} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img14} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img15} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img15} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img16} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img16} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img17} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img17} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img18} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img18} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img19} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img19} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>


                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={img20} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={img20} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

            </div>
            <h1>This is Washroom Section</h1>
            <div className='projectSec'>
            <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={to} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={to} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={to6} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={to6} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={to2} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={to2} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={to3} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={to3} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={to4} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={to4} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={to5} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={to5} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>
            </div>
            <h1>This is Bedroom Section</h1>
            <div className='projectSec'>
            <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={bed} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={bed} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={bed2} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={bed2} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={bed3} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={bed3} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={bed4} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={bed4} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={bed5} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={bed5} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={bed6} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={bed6} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>
            </div>
            <h1>This is kitchen Section</h1>
            <div className='projectSec'>
            <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={kit} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={kit} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={kit2} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={kit2} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={kit3} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={kit3} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

                <div className='imgp' style={{ width: '100%' }} onClick={() => openModal(<img src={kit4} alt='' style={{ width: '80%' }} />)}>
                    <div className='img'>
                        <img src={kit4} alt='' style={{ width: '100%' }} />
                    </div>
                    <div className='heading'>
                        <p>RESIDENCE AT INDERPURI</p>
                    </div>
                </div>

              

              
            </div>
            {isModalOpen && (
                <Modal content={modalContent} isOpen={isModalOpen} closeModal={closeModal} />
            )}
        </div>
    );
}
