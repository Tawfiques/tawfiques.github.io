const Education = () => {
  return (
    <>
      <div className="flex flex-col text-center mt-4 gap-4 sm:px-6 animate-fade-in ">
        <p className="text-white text-sm md:text-sm xl:text-lg font-Poppins">
          <h1 className="text-lg md:text-lg lg:text-2xl font-valorant">
            Education
          </h1>
          <hr className="border-valorantRed my-4 " />
          <span className="font-semibold">North South University</span>
          <br />
          Bachelor of Science in Computer Science and Engineering
        </p>
        <div className="h-[calc(100vh-95vh)] sm:h-[calc(100vh-90vh)]   self-center bg-valorantRed w-1 rounded-md " />
        <p className="text-white text-sm md:text-sm xl:text-lg font-Poppins">
          <span className="font-semibold">Dhaka Imperial College</span>
          <br />
          Higher Secondary Certificate
        </p>
        <div className="h-[calc(100vh-95vh)] sm:h-[calc(100vh-90vh)]  self-center bg-valorantRed w-1 rounded-md " />
        <p className="text-white text-sm md:text-sm xl:text-lg font-Poppins">
          <span className="font-semibold">Ideal School and College </span>
          <br />
          Secondary School Certificate
        </p>
        <p className="text-white text-sm mt-8 md:text-sm xl:text-lg font-Poppins">
          <h1 className="text-lg md:text-lg lg:text-2xl font-valorant">
            Certifcates
          </h1>
          <hr className="border-valorantRed my-4 " />
          <span className="font-semibold">Udemy</span>
          <br />
          The Complete 2024 Web Development Bootcamp{" "}
          <a
            href="https://www.udemy.com/certificate/UC-637cd6b2-67af-4343-a52c-6078c59ae5c1"
            className="text-valorantRed hover:opacity-80"
          >
            (Certificate)
          </a>
        </p>
        <p className="text-white  md:text-sm xl:text-lg font-Poppins">
          <span className="font-semibold"> Sololearn </span>
          <br />
          Theoretical and Practical Understanding Of JavaScript{" "}
          <a
            href="https://www.sololearn.com/certificates/CT-1QUDSCJI"
            className="text-valorantRed hover:opacity-80"
          >
            (Certificate)
          </a>
        </p>
      </div>
    </>
  );
};

export default Education;
