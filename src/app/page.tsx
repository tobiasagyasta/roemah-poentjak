import Image from "next/image";
import { montserrat, merriweather, playfairDisplay } from "./fonts/fonts";
import HeroBanner from "@/components/HeroBanner";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <main>
        <HeroBanner></HeroBanner>

        {/* History Section */}
        <section className="history min-h-[80vh] md:min-h-screen" id="about-us">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center bg-[#F1F7ED]">
            <div className="text-content md:w-1/2 p-10 text-center">
              <h1
                className={`${playfairDisplay.className} text-4xl md:text-5xl font-bold mb-4 leading-tight`}
              >
                Our History
              </h1>
              <h3
                className={`${montserrat.className} text-xl md:text-2xl font-normal mb-6`}
              >
                Origins of Roemah Poentjak
              </h3>
              <p className="text-base leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quaerat numquam sit, ratione corrupti suscipit perspiciatis
                debitis quo. Ratione exercitationem reprehenderit ab, minus
                deserunt explicabo esse maiores nobis dolores tempore!
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center md:w-1/2 px-10 py-20 bg-[#1E3231]">
              <div className="relative w-full max-w-[500px]">
                <Image
                  src="/treehouse.jpg"
                  alt="Image content treehouse"
                  width={600}
                  height={800}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wide Text Section */}
        <section className="wide-text-1 min-h-[80vh] md:min-h-screen py-16 bg-[#9D9982]">
          <div className="container mx-auto flex flex-col items-center text-center">
            <div className="text-content p-10">
              <h1
                className={`${playfairDisplay.className} text-4xl md:text-5xl font-bold mb-4 leading-tight`}
              >
                More Text
              </h1>
              <h3
                className={`${montserrat.className} text-xl md:text-2xl font-normal mb-6`}
              >
                Insert Text Here
              </h3>
              <div className="max-w-3xl mx-auto">
                <p className="text-base text-center leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  quaerat numquam sit, ratione corrupti suscipit perspiciatis
                  debitis quo. Ratione exercitationem reprehenderit ab, minus
                  deserunt explicabo esse maiores nobis dolores tempore!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wide Image Section */}
        <section className="hidden wide-image-1 w-full h-80 md:h-[600px] lg:h-[800px] bg-[#35261D] relative overflow-hidden md:flex">
          <Image
            className="object-cover w-full h-full p-8 md:p-36"
            src="/wide-1.jpg"
            alt="Wide interior image 1"
            layout="fill"
            objectFit="cover"
          />
        </section>

        {/* About Us Section */}
        <section className="about-us min-h-[80vh] md:min-h-screen">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center bg-[#F8F4E3]">
            {/* Image */}
            <div className="flex justify-center items-center md:w-1/2 px-10 py-20 bg-[#692229]">
              <div className="relative w-full max-w-[500px]">
                <Image
                  src="/bed.jpg"
                  alt="Image content bed"
                  width={600}
                  height={800}
                  layout="responsive"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col items-center justify-center text-content min-h-[80vh] md:min-h-screen md:w-1/2 p-10 text-center md:text-left">
              <h1
                className={`${playfairDisplay.className} text-4xl text-center md:text-5xl font-bold mb-4 leading-tight`}
              >
                About Us
              </h1>
              <h3
                className={`${montserrat.className} text-xl md:text-2xl text-center font-normal mb-6`}
              >
                What We Provide
              </h3>
              <p className="text-base text-center leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quaerat numquam sit, ratione corrupti suscipit perspiciatis
                debitis quo. Ratione exercitationem reprehenderit ab, minus
                deserunt explicabo esse maiores nobis dolores tempore!
              </p>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section
          className="location relative bg-[#F8F5F2] py-16 min-h-[80vh] md:min-h-screen"
          id="location"
        >
          <div className="container mx-auto text-center mb-8">
            <h1
              className={`${playfairDisplay.className} text-4xl text-center md:text-5xl font-bold mb-4 leading-tight`}
            >
              Our Location
            </h1>
            <h3
              className={`${montserrat.className} text-xl md:text-2xl text-center font-normal mb-6`}
            >
              Come and Visit Us!
            </h3>
          </div>

          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4863258120795!2d107.0372263957841!3d-6.710346870176551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b3d93fb134e7%3A0x8073be7fde1db455!2sRoemah%20Poentjak!5e0!3m2!1sen!2sid!4v1727258980483!5m2!1sen!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              className="p-4 w-full md:w-2/3 lg:w-1/2 md:p-0 rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>

        {/* Contact Us Section */}
        <section
          className="Contact Us bg-[#F8F5F2] min-h-[80vh] md:min-h-screen"
          id="contact"
        >
          <ContactForm />
        </section>
      </main>
    </>
  );
}
