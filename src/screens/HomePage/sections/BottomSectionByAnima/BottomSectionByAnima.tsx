import { MailIcon, MapPinIcon, PhoneIcon, SendIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Textarea } from "../../../../components/ui/textarea";

export const BottomSectionByAnima = (): JSX.Element => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
      author: "Jane Cooper",
      position: "CEO, Airbnb",
    },
    {
      id: 2,
      text: "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It's so flexible, well organised and easily editable.",
      author: "Floyd Miles",
      position: "Vice President, GoPro",
    },
    {
      id: 3,
      text: "Landify saved our time in designing my company page.",
      author: "Kristin Watson",
      position: "Co-Founder, Strapi",
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      id: 1,
      icon: <PhoneIcon className="w-5 h-5 text-white" />,
      label: "Phone",
      value: "+212520397044",
    },
    {
      id: 2,
      icon: <MailIcon className="w-5 h-5 text-white" />,
      label: "E-Mail",
      value: "info@bestworldemballage.com",
    },
    {
      id: 3,
      icon: <MapPinIcon className="w-5 h-5 text-white" />,
      label: "Location",
      value: "Morocco, Al-Dar Al-Baidaa, Darb Omar, Khrebka ST",
    },
  ];

  // Footer links
  const quickLinks = ["About us", "Products", "Contact us"];

  return (
    <section className="w-full">
      {/* Testimonials Section */}
      <div className="w-full bg-white py-12 overflow-hidden">
        <div className="max-w-[1040px] mx-auto px-4">
          <div className="relative">
            <img
              className="w-[142px] h-[116px]"
              alt="Quote mark"
              src="/quote-mark.svg"
            />

            <div className="flex flex-col max-w-[488px] gap-2 mt-14 ml-[93px]">
              <h2 className="font-['Baloo_Bhaina_2',Helvetica] font-bold text-[#333333] text-5xl tracking-[-1.20px] leading-[52px]">
                Real Stories from Real Customers
              </h2>

              <p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-lg leading-7">
                Get inspired by these stories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {/* First testimonial - larger card */}
              <Card className="bg-[#fffcf5] rounded-2xl overflow-hidden col-start-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      className="w-4 h-[13px]"
                      alt="Quote mark"
                      src="/quote-mark.svg"
                    />
                    <div className="flex flex-col gap-4">
                      <p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-base leading-6">
                        {testimonials[0].text}
                      </p>
                      <div className="flex flex-col">
                        <h4 className="font-['Baloo_Bhaina_2',Helvetica] font-bold text-[#333333] text-lg leading-7">
                          {testimonials[0].author}
                        </h4>
                        <p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-sm leading-5">
                          {testimonials[0].position}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Second testimonial */}
              <Card className="bg-[#fffcf5] rounded-2xl overflow-hidden mt-[262px] ml-[93px] max-w-[384px]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      className="w-4 h-[13px]"
                      alt="Quote mark"
                      src="/quote-mark.svg"
                    />
                    <div className="flex flex-col gap-4">
                      <p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-base leading-6">
                        {testimonials[1].text}
                      </p>
                      <div className="flex flex-col">
                        <h4 className="font-['Baloo_Bhaina_2',Helvetica] font-bold text-[#333333] text-lg leading-7">
                          {testimonials[1].author}
                        </h4>
                        <p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-sm leading-5">
                          {testimonials[1].position}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Third testimonial */}
              <Card className="bg-[#fffcf5] rounded-2xl overflow-hidden mt-[382px] ml-[501px] max-w-[384px] col-start-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img
                      className="w-4 h-[13px]"
                      alt="Quote mark"
                      src="/quote-mark.svg"
                    />
                    <div className="flex flex-col gap-4">
                      <p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-base leading-6">
                        {testimonials[2].text}
                      </p>
                      <div className="flex flex-col">
                        <h4 className="font-['Baloo_Bhaina_2',Helvetica] font-bold text-[#333333] text-lg leading-7">
                          {testimonials[2].author}
                        </h4>
                        <p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-sm leading-5">
                          {testimonials[2].position}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-10 ml-[93px]">
            <img
              className="cursor-pointer"
              alt="Left arrow button"
              src="/left-arrow-button-1.svg"
            />
            <div className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-base leading-6 w-5">
              1/3
            </div>
            <img
              className="cursor-pointer"
              alt="Right arrow button"
              src="/left-arrow-button.svg"
            />
          </div>
        </div>

        <img
          className="w-[99px] h-[197px] absolute top-[-76px] right-0"
          alt="Ellipse"
          src="/ellipse-118.svg"
        />
      </div>

      {/* Contact Section */}
      <div className="w-full">
        <div className="relative">
          <img
            className="w-full h-[545px] mt-[300px]"
            alt="Background Image"
            src="/image-1.png"
          />

          <Card className="max-w-[1095px] mx-auto bg-[#fffcf5] rounded-[30px] p-8 flex flex-col md:flex-row gap-8 relative -mt-[300px]">
            {/* Contact Information */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-base leading-6 max-w-[424px]">
                  For inquiries, orders, and anything on your mind regarding our
                  products, please feel free to contact us.
                </p>
                <p className="font-['Baloo_Bhaina_2',Helvetica] font-medium text-[#333333] text-2xl leading-[30px] max-w-[424px]">
                  Our team will be ready and very happy to make your life
                  easier, healthier, and your work more distinctive and
                  innovative.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {contactInfo.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="p-4 bg-[#232b55] rounded-full">
                      <div className="w-6 h-6 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-[#333333] text-sm leading-5">
                        {item.label}
                      </p>
                      <p className="font-['Baloo_Bhaina_2',Helvetica] font-semibold text-[#333333] text-base leading-6">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col gap-6 flex-1">
              <h3 className="font-['Baloo_Bhaina_2',Helvetica] font-medium text-[#333333] text-2xl leading-[30px]">
                Contact us
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    className="h-12 rounded-2xl border-[#ffc85b]"
                    defaultValue="Maram"
                  />
                  <Input className="h-12 rounded-2xl" placeholder="Last Name" />
                </div>
                <Input className="h-12 rounded-2xl" placeholder="Email" />
                <Textarea
                  className="h-[165px] rounded-2xl"
                  placeholder="Your message"
                />
              </div>

              <div className="flex items-center">
                <Button className="bg-[#232b55] rounded-full px-8 h-12 font-['Baloo_Bhaina_2',Helvetica] font-semibold">
                  SendIcon
                </Button>
                <Button
                  size="icon"
                  className="bg-[#232b55] rounded-full h-12 w-12 ml-0"
                >
                  <SendIcon className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="bg-[#232b55] pt-8 pb-4 px-4 md:px-[147px] flex flex-col items-center justify-center gap-9 h-80 relative">
          <div className="flex flex-col md:flex-row items-start justify-center gap-[60px] w-full max-w-[1280px]">
            {/* Logo and Description */}
            <div className="flex flex-col gap-6 max-w-[505px]">
              <div className="w-[110px] h-[72px] relative">
                <div className="h-[72px] relative">
                  <div className="w-[110px] h-10 bg-[url(/vector-2.svg)] bg-[100%_100%] absolute">
                    <img
                      className="absolute w-[26px] h-[7px] top-[33px] left-[81px]"
                      alt="Vector"
                      src="/vector.svg"
                    />
                    <img
                      className="absolute w-[17px] h-1.5 top-[18px] left-[85px]"
                      alt="Vector"
                      src="/vector.svg"
                    />
                  </div>
                  <img
                    className="absolute w-[89px] h-2 top-[54px] left-2.5"
                    alt="Group"
                    src="/group-1.png"
                  />
                  <img
                    className="absolute w-[94px] h-1.5 top-[46px] left-2"
                    alt="Group"
                    src="/group-2.png"
                  />
                  <img
                    className="absolute w-[94px] h-2 top-16 left-2"
                    alt="Group"
                    src="/group-3.png"
                  />
                </div>
              </div>
              <p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-white text-base leading-6">
                We are proud to offer a wide and distinct range of high-quality,
                healthy and uniquely designed plastic products that also meet
                the needs of our clients in Morocco and all over the world.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4 w-[162px]">
              <h3 className="font-['Baloo_Bhaina_2',Helvetica] font-semibold text-white text-2xl leading-[30px]">
                Quick Links
              </h3>
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-white text-base leading-6"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex flex-col justify-between w-80 self-stretch">
              <div className="flex flex-col gap-4">
                <h3 className="font-['Baloo_Bhaina_2',Helvetica] font-semibold text-white text-2xl leading-[30px]">
                  Contact Us
                </h3>
                <div className="flex items-center">
                  <Input
                    className="h-[52px] px-5 py-[15px] rounded-[900px] border-white bg-transparent text-white placeholder:text-white placeholder:opacity-40"
                    placeholder="Your Email"
                  />
                  <Button
                    size="icon"
                    className="w-[53.47px] h-[53.47px] rounded-full border border-white bg-transparent ml-0"
                  >
                    <img
                      className="w-6 h-6"
                      alt="Paper plane right"
                      src="/paperplaneright.svg"
                    />
                  </Button>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <div className="flex w-10 h-10 items-center justify-center rounded-[170px]">
                  <div className="w-[9.33px] h-[18.75px] bg-[url(/group-740.png)] bg-[100%_100%]" />
                </div>
                <div className="flex w-10 h-10 items-center justify-center rounded-[170px]">
                  <div className="w-[18.8px] h-[18.89px] bg-[url(/group-7.png)] bg-[100%_100%]" />
                </div>
                <div className="flex w-10 h-10 items-center justify-center rounded-[170px]">
                  <div className="w-[20.38px] h-[16.76px] bg-[url(/group-742.png)] bg-[100%_100%]" />
                </div>
                <img className="w-10 h-10" alt="Icon" src="/icon-2.svg" />
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col items-center gap-4 w-full max-w-[1152px]">
            <Separator className="w-full h-px bg-white opacity-20" />
            <div className="flex items-center justify-center w-full">
              <p className="font-['Baloo_Bhaina_2',Helvetica] font-normal text-white text-base opacity-40">
                Copy rights 2025 BWE
              </p>
            </div>
          </div>

          <img
            className="h-[329px] w-full absolute left-0 top-[-9px]"
            alt="Mask group"
            src="/mask-group-2.png"
          />
        </footer>
      </div>
    </section>
  );
};
