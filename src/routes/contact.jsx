import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
        <div name="contact" className="min-h-screen -mt-4 w-full bg-crm">
            <div className="h-52 bg-gr">
                <h1 className="flex justify-center pt-32 text-6xl underline">
                    CONTACT
                </h1>
            </div>
      </div>
        <Outlet/>
    </>
  )
}

export default Contact;
