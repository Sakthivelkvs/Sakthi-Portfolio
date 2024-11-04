/**
 * @copyright 2024 de-horst
 * @licence Apache-2.0
 */

const ExperienceCard = () => {
    return (
      <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
        <div className="mb-4 flex items-center gap-3">
          <img
            src="/images/indusrty.png" // Add a relevant image for the internship/company logo
            alt="Finedge IT Solutions"
            className="w-12 h-12 object-contain"
          />
          <p className="text-lg font-semibold text-zinc-50">
            Internship Experience at Finedge IT Solutions (Feb 2024 – Jul 2024)
          </p>
        </div>
  
        <p className="text-zinc-400 mb-4">
          I completed a 5-month internship at Finedge IT Solutions where I strengthened my skills as a Python web developer. I worked on web applications using Python and Django, focusing on creating user-friendly features and optimizing MySQL databases for better performance. My work helped boost user engagement by 15%. I also gained experience in Angular for frontend development, which improved my ability to work across both frontend and backend projects.
        </p>
  
        <p className="text-zinc-50 font-semibold mb-2">Key Contributions:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Developed and improved web apps using Python and Django.</li>
          <li>Managed and optimized MySQL databases.</li>
          <li>Worked on Angular projects to expand my frontend skills.</li>
        </ul>
  
        <p className="text-zinc-50 font-semibold mb-2">Project Highlight – Mech Manage</p>
        <p className="text-zinc-400 mb-4">
          Mech Manage is an Employee Management Software (EMS) I built for Mechland Tools, my cousin’s company. It handles tasks like employee records, attendance, payroll, and shift scheduling. It also tracks production and has an e-commerce feature for product sales. This project streamlined operations and cut down manual work, showing my ability to create practical solutions for real needs.
        </p>
  
        <p className="text-zinc-50 font-semibold mb-2">Technologies Used:</p>
        <ul className="flex flex-wrap items-center gap-3">
          <li className="flex items-center">
            <img src="/images/python.svg" alt="Python" className="w-8 h-8" /> Python
          </li>
          <li className="flex items-center">
            <img src="/images/django.svg" alt="Django" className="w-8 h-8" /> Django
          </li>
          <li className="flex items-center">
            <img src="/images/html.svg" alt="HTML" className="w-8 h-8" /> HTML
          </li>
          <li className="flex items-center">
            <img src="/images/css3.svg" alt="CSS" className="w-8 h-8" /> CSS
          </li>
          {/* <li className="flex items-center">
            <img src="/images/react.svg" alt="React" className="w-8 h-8" /> React
          </li> */}
          <li className="flex items-center">
            <img src="/images/mysql.svg" alt="MySQL" className="w-8 h-8" /> MySQL
          </li>
          <li className="flex items-center">
            <img src="/images/angular.svg" alt="Angular" className="w-8 h-8" /> Angular
          </li>
        </ul>
      </div>
    );
  };
  
  export default ExperienceCard;
  