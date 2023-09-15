import { useNavigate } from 'react-router-dom';
import mainFoto from '../assets/main.png';

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="bg-black text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center mb-1 sm:justify-center">
            <div className="flex flex-col lg:w-3/4 justify-center items-start p-8 max-md:pb-0">
              <h2 className="text-2xl md:text-4xl leading-relaxed md:leading-snug mb-2">The machines must work. People must think.</h2>
              <p className="text-sm md:text-lg text-gray-50 mb-4">We are an online store for the latest robot designs, offering a wide selection of affordable and fashionable devices that can make your life easier. Use our solutions and your life will take on new colors.</p>
              <button
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
                onClick={() => {
                  navigate({ pathname: '/catalog/' });
                }}
              >
                Catalog
              </button>
            </div>
            <div className="p-0 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 lg:w-1/2  justify-center max-md:m-0">
              <div className="h-48 flex flex-wrap content-center">
                <img className="inline-block mt-24 md:mt-0 max-md:p-0 max-md:mt-0 max-md:h-full" src={mainFoto} alt='roboto main' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-6xl p-6 mx-auto space-y-2">
          <h2 className="text-center mt-4 title-font text-4xl font-extrabold leading-10 tracking-tight sm:text-4xl sm:leading-none md:text-4xl">Our ideas</h2>
          <div className="block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12">
            <img src="https://global-uploads.webflow.com/620c0d2e51cac37f5958848f/632871c1e7d7f142d9f72917_0919_2-p-1600.jpg" alt="roboto future" className="shadow-xl my-auto object-cover w-full h-64 rounded sm:h-96 lg:col-span-5 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-7">
              <h3 className="text-2xl font-semibold sm:text-4xl">Human-made robots of the future</h3>
              <span className="text-xs dark:text-gray-400">September 16, 2023</span>
              <p>Our task is to share with all people in the World information about innovative robots and robotic technologies that shape the modern and future future of our great Planet Earth.</p>
              <p>We are here to inspire, inform, and empower a growing community of robot consumers like you, whether they are hobbyists, scientists, enthusiasts, or curious shoppers.</p>
              <p>Our friendly team of editors collects all the information from around the world you need to fuel your high-tech lifestyle: what robots are on the market, where to buy them, how to use them and how they get into competing products, their future in human development.</p>
              <p>In addition, on our website you have the opportunity to study new wireless nanotechnologies, the stages of humanitys creation of artificial intelligence, and many other interesting things designed to keep you one step ahead.</p>
              <p className='font-bold'>We are ready to inform you about new robots of the future that will change your lifestyle!</p>
            </div>
          </div>

        </div>
      </section>
      <section>
        <div id="services" className="section relative pt-4 pb-8 md:pt-4 md:pb-0 bg-white">
          <div className="container xl:max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className=" title-font  mb-4 text-3xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-4xl">What We Do?</h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Our team is committed to being at the top of their game, meeting the needs of our clients and helping new developers.</p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-slate-950 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap flex-row -mx-4 text-center">
              <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Searching of decisions</h3>
                  <p className="text-gray-500">Selection of products to suit your requirements and goals.</p>
                </div>
              </div>
              <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-chat-square-dots" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Support</h3>
                  <p className="text-gray-500">Feedback 24 hours throughout the entire period of operation.</p>
                </div>
              </div>
              <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-badge-ad" viewBox="0 0 16 16">
                      <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                      <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Individual approach</h3>
                  <p className="text-gray-500">Personalized service for each client.</p>
                </div>
              </div>
              <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                      <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Brand</h3>
                  <p className="text-gray-500">We cooperate with the most famous global manufacturers in the world.</p>
                </div>
              </div>
              <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                      <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Economically</h3>
                  <p className="text-gray-500">Low prices. In search of the best on the market in terms of price - quality.</p>
                </div>
              </div>
              <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Optimization</h3>
                  <p className="text-gray-500">We think about cost optimization in every process from start to finish.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
        <img
          alt="save roboto"
          src="https://klike.net/uploads/posts/2022-12/1671597204_3-18.jpg"
          className="h-32 w-full object-cover md:h-full"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            just now
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
              Get 20% off
            </span>

            <span className="mt-2 block text-sm">On your next order over $50</span>
          </h2>

          <div
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
          >
            With Code:
            <span className='text-red-500 lowercase text-2xl italic'> vlad20</span>
          </div>
          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Offer valid until 30th September, 2023 *
          </p>
        </div>
      </section>
    </>

  );
};
