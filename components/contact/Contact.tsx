import React from "react";
import { Author } from '../../graphql';
interface IContact {
  me: Author
}

const Contact: React.FC<IContact> = ({ me }) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 z-10 dark:text-white text-gray-900 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className=" z-20 rounded-md shadow-md bg-[#F1F1F1] dark:bg-gray-900 mx-auto text-center -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="mt-12">
              <h1 className="text-black dark:text-gray-50 font-semibold text-2xl md:text-3xl">
                Prenez contact ! Je ne mords pas.
              </h1>
            </header>

            {/* phone, email, address */}
            <div className="icons-container inline-flex flex-col my-10 space-y-4">

              <div className="cursor-pointer flex flex-row items-center space-x-6 rounded-md border border-gray-400 hover:border hover:border-orange-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-orange-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <a href={`mailto:contact@anthonyhelliet.com`} className="dark:text-gray-50 font-light text-sm pr-[1rem]">
                  contact@anthonyhelliet.com
                </a>
              </div>
              <div className="cursor-pointer flex flex-row items-center space-x-6 rounded-md border border-gray-400 hover:border hover:border-orange-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 text-orange-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="dark:text-gray-50 font-light text-sm">
                  Gex, 01170, France
                </p>
              </div>
            </div>

            {/* social media */}
            <div className="social-icons flex flex-row justify-center space-x-8">

              <a
                href={"https://www.linkedin.com/in/anthony-helliet/"}
                className="h-10 w-10 rounded-full hover:bg-orange-500 flex items-center justify-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-gray-900 dark:text-gray-50 h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>

              <a
                href={"https://gitlab.com/ahelliet"}
                className="h-10 w-10 rounded-full hover:bg-orange-500 flex items-center justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-900 h-5 w-5 dark:text-gray-50">
                  <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" />
                </svg>
              </a>

            </div>
          </div>


          <form className="form rounded-lg bg-white p-4 md:mt-8 md:mr-8 flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              {" "}
              Votre nom ou la société que vous représentez :
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-orange-500"
              name="name"
              required
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Une adresse email pour vous recontacter :
            </label>
            <input
              type="email"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-orange-500"
              name="email"
              required
            />
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mx-4 mt-4"
            >
              Votre Message :
            </label>
            <textarea
              rows={6}
              style={{ resize: "none" }}
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-orange-500"
              name="message"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 rounded-md mx-4 mt-8 py-2 text-gray-50 text-xs font-bold w-[calc(w-full-1rem)] hover:bg-orange-600"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact