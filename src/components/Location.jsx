import React from 'react';

const Location = () => {
  return (
    <section class=" relative block bg-gray-900 h-full text-white" id="contact">
      <div class="container mx-auto px-4 md:pt-24 pb-20 pt-20">
        <div class="flex flex-wrap text-center justify-center md:bg-gray-900">
          <div class="w-full lg:w-3/12 px-4">
            <h2 class="text-4xl font-luckiest-guy text-[#adf802] font-bold uppercase">
              location
            </h2>
            <p class="text-lg leading-relaxed mt-4 mb-4">
              Ave. Winson Churchil Local #5 181, San Juan, Puerto Rico 00926
            </p>
          </div>

          <div class="w-full md:w-3/12 px-4 mb-4">
            <h2 class="text-4xl font-luckiest-guy font-bold text-[#adf802] uppercase">
              hours
            </h2>
            <h4 class="text-lg leading-relaxed mt-4">Mon.Wed.Fri</h4>
            <p class="mb-2">Would be updated</p>

            <h4 class="text-lg leading-relaxed mt-4">Tue.Thur</h4>
            <p>Would be updated</p>
          </div>

          <div class="w-full md:w-3/12 px-4">
            <h2 class="text-4xl font-luckiest-guy font-bold text-[#adf802] uppercase">
              contact us
            </h2>
            <h4 class="text-lg leading-relaxed mt-4">(787)455-1624</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
