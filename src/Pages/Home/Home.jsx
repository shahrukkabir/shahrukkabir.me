import React from 'react';
import img1 from "../../assets/profile1.jpg"
import img2 from "../../assets/profile2.jpg"
import img3 from "../../assets/profile3.jpg"
import ParticlesComponent from '../../Components/particle-animation/ParticlesComponent';

const Home = () => {
    return (
        <main>
            <ParticlesComponent></ParticlesComponent>
            <div>
                <div>
                    {/* profile image box */}
                    <div className="flex justify-center lg:justify-start">
                        <img className="rounded-full w-[260px] h-[260px] ring-4 shadow-2xl shadow-[#ffffff7d] lg:ring-6 ring-[#00a6fb] object-cover" src={img1} alt="Shahruk" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;