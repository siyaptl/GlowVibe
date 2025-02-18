import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "../../components/cmpheader";
import bgfaq from '../../assets/myfaq.jpg';

const faqs = [
  {
    question: "Are your beauty products cruelty-free?",
    answer: "Yes, all our beauty products are 100% cruelty-free and not tested on animals."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer worldwide shipping. Shipping costs vary depending on the destination."
  },
  {
    question: "Can I return a product if I am not satisfied?",
    answer: "Yes, we have a 30-day return policy. You can return the product if it's unused and in its original packaging."
  },
  {
    question: "Are your products suitable for sensitive skin?",
    answer: "Yes, our products are dermatologically tested and suitable for sensitive skin."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a tracking number via email to track your shipment."
  },
  {
    question: "Do you offer gift packaging?",
    answer: "Yes, we offer special gift packaging for a small additional charge at checkout."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     <Header />

     <div 
            className="lg:fixed md:scroll scroll top-0 w-screen lg:bg-cover md:bg-cover bg-cover border-white lg:bg-left md:bg-left bg-right bg-no-repeat z-[-1] border-x-8 lg:h-[100%] md:min-h-[457px] min-h-[219px] lg:mt-0 md:mt-0 mt-1 md:flex md"
            style={{ backgroundImage: `url(${bgfaq})` }}
            >
                <h2 className="text-5xl font-semibold text-center text-white opacity-100 w-[211px] pl-[111px] pt-[151px] font-serif ... tracking-widest leading-[51px] lg:hidden md:flex hidden">Frequently Asked Questions</h2>
                <h2 className="text-3xl font-semibold text-left text-white opacity-100 w-[211px] pl-[31px] pt-[63px] font-serif ... tracking-wider leading-[35px] lg:hidden md:hidden flex">Frequently Asked Questions</h2>
       </div>

    <div className="flex lg:items-left items-center flex-col lg:w-[61%] md:w-[97%] w-[97%] lg:ml-12 md:mt-11 mt-11 pb-11 md:mx-auto mx-auto">
      <h2 className="text-5xl font-semibold md:hidden lg:flex hidden text-left mb-8 text-white opacity-100 font-serif ... leading-[55px] tracking-wide lg:mt-1">Frequently Asked Questions</h2>
      <div className="space-y-4 flex flex-col lg:items-left mx-auto items-center">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border p-5 lg:w-[675px] md:w-[755px] w-[98%] cursor-pointer bg-white opacity-75 transition duration-300 ease-in-out transform hover:scale-x-105"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="lg:text-lg md:text-lg tracking-wider font-roboto text-[16.5px] font-semibold text-pink-950 pr-5">{faq.question}</h3>
              {openIndex === index ? <ChevronUp className="text-[#ad6f83]" /> : <ChevronDown className="text-[#c27e94]" />}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-blue-950 border-t font-roboto pt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
