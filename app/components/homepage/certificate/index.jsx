"use client";
import Image from "next/image";
import { useState } from "react";
import GlowCard from "../../helper/glow-card";

const certifications = [
  { id: 1, image: "/certificate/Certificate1.jpg", title: "Cloud Computing", issuer: "IIT Kharagpur - NPTEL" },
  { id: 2, image: "/certificate/Certificate2.jpg", title: "Linux and SQL", issuer: "Google - Coursera" },
  { id: 3, image: "/certificate/Certificate3.jpg", title: "MERN + GenAI", issuer: "W3elites" },
  { id: 4, image: "/certificate/Certificate4.jpg", title: "Web Applications PHP", issuer: "University of Michigan - Coursera" },
  { id: 5, image: "/certificate/Certificate5.jpg", title: "GenAI for Everyone", issuer: "Fractal - Coursera" },
  { id: 6, image: "/certificate/Certificate6.jpg", title: "Generative AI for Everyone", issuer: "DeepLearning.AI - Coursera" },
  { id: 7, image: "/certificate/Certificate7.jpg", title: "Introduction to Generative AI", issuer: "Google Cloud - Coursera" },
  { id: 8, image: "/certificate/Certificate8.jpg", title: "Introduction to LLMs", issuer: "Google Cloud - Coursera" },
  { id: 9, image: "/certificate/Certificate9.jpg", title: "Generative AI Primer", issuer: "Vanderbilt University - Coursera" },
  { id: 10, image: "/certificate/Certificate10.jpg", title: "Prompt Engineering for ChatGPT", issuer: "Vanderbilt University - Coursera" },
  { id: 11, image: "/certificate/Certificate11.jpg", title: "ChatGPT Advanced Data Analysis", issuer: "Vanderbilt University - Coursera" },
  { id: 12, image: "/certificate/Certificate12.jpg", title: "Programming in C++", issuer: "Codio - Coursera" },
];

function Certificate() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <div id="certificate" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background */}
      <Image
        src="/section.svg"
        alt="Background Section"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {certifications.map((certificate) => (
            <GlowCard key={certificate.id} identifier={`certificate-${certificate.id}`}>
              <div
                className="p-4 relative cursor-pointer transition-transform hover:scale-105 duration-300 flex flex-col items-center"
                onClick={() => openImage(certificate.image)}
              >
                <div className="relative w-[300px] h-[220px] overflow-hidden rounded-lg bg-white">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-white">{certificate.title}</p>
                  <p className="text-sm text-gray-400">{certificate.issuer}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
            <Image
              src={selectedImage}
              alt="Certificate Full View"
              width={1410}
              height={1000}
              className="rounded-lg bg-white"
              style={{ width: "100%", height: "auto" }}
            />
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 text-xl"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
