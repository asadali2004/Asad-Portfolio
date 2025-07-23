"use client";
import Image from "next/image";
import { useState } from "react";
import GlowCard from "../../helper/glow-card";
import SectionWrapper from "../../SectionWrapper";

const certifications = [
  { id: 1, image: "/certificate/HCIcertificate.jpg", title: "Human Computer Interaction", issuer: "NPTEL" },
  { id: 2, image: "/certificate/Certificate1.jpg", title: "Cloud Computing", issuer: "IIT Kharagpur - NPTEL" },
  { id: 3, image: "/certificate/Certificate2.jpg", title: "Linux and SQL", issuer: "Google - Coursera" },
  { id: 4, image: "/certificate/Certificate3.jpg", title: "MERN + GenAI", issuer: "W3elites" },
  { id: 5, image: "/certificate/Certificate4.jpg", title: "Web Applications PHP", issuer: "University of Michigan - Coursera" },
  { id: 6, image: "/certificate/Certificate5.jpg", title: "GenAI for Everyone", issuer: "Fractal - Coursera" },
  { id: 7, image: "/certificate/Certificate6.jpg", title: "Generative AI for Everyone", issuer: "DeepLearning.AI - Coursera" },
  { id: 8, image: "/certificate/Certificate7.jpg", title: "Introduction to Generative AI", issuer: "Google Cloud - Coursera" },
  { id: 9, image: "/certificate/Certificate8.jpg", title: "Introduction to LLMs", issuer: "Google Cloud - Coursera" },
  { id: 10, image: "/certificate/Certificate9.jpg", title: "Generative AI Primer", issuer: "Vanderbilt University - Coursera" },
  { id: 11, image: "/certificate/Certificate10.jpg", title: "Prompt Engineering for ChatGPT", issuer: "Vanderbilt University - Coursera" },
  { id: 12, image: "/certificate/Certificate11.jpg", title: "ChatGPT Advanced Data Analysis", issuer: "Vanderbilt University - Coursera" },
];

function Certificate() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <SectionWrapper>
      <section id="certificate" className="relative z-50 border-t my-12 lg:my-24 border-emerald-500/30">
        {/* Background */}
        <Image
          src="/section.svg"
          alt="Background Section"
          width={1572}
          height={795}
          className="absolute top-0 -z-10"
        />

        {/* Title */}
        <div className="flex justify-center my-8 lg:py-12">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-emerald-400"></span>
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 w-fit text-white p-2 px-5 text-xl rounded-md font-semibold tracking-wide backdrop-blur-sm border border-emerald-500/30">
              CERTIFICATES
            </span>
            <span className="w-24 h-[2px] bg-gradient-to-r from-emerald-400 to-transparent"></span>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.id} className="relative">
                <GlowCard identifier={`certificate-${cert.id}`}>
                  <div className="flex flex-col items-center justify-center gap-4 p-4 lg:p-6 h-full">
                    <div 
                      className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-emerald-500/20 cursor-pointer transition-transform duration-300 hover:scale-105"
                      onClick={() => openImage(cert.image)}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                      <p className="text-emerald-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeImage}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-emerald-400 transition-colors"
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="Certificate"
                width={800}
                height={600}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </section>
    </SectionWrapper>
  );
}

export default Certificate;
