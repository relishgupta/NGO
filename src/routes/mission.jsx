import { Outlet } from "react-router-dom";

const Mission = () => {
  return (
    <>
    <div name="mission" className="min-h-screen -mt-4 w-full bg-crm">
      <div className="h-48 bg-gr">
      <h1 className="acc flex justify-start mx-10 md:mx-20 pt-28 text-6xl underline text-black">
          Mission
        </h1>
      </div>
      <div className="pl-5 text-2xl text-black">
          {/* <p className="my-1 border-l-4 border-orange-500 pb-3 text-blue-800 text-5xl md:text-6xl">Mission</p> */}
          <p>1. To work for the upliftment of youth community to organise Youth activities for National Character building. Give financial help to poor and needful people.</p>
          <p>2. To promote the cause of education on modern and scientific lines and make educational institute such as school buildings and make memorial places and other works for Martyrs.</p>
          <p>3. To make good environment with plantation drive in every area and also make resources such as hand pumps, ponds and in dry areas.</p>
          <p>4. To provide cheques/cash payments to BPL families, widows and orphans/poor girls for running their smooth life. Also provide cheques/cash payment to long illness poor people and in the marriage of orphan girls.</p>
          <p>5. To improve the health standard of the people by organising the camps for AIDS population and opening of small dispensaries and financially help poor people for their treatment in rural and urban areas.</p>
          <p>6. To provide the facilities for promotion and development for technology and application of Science and technology in women development in rural and urban areas and make toilet complex and home for homeless, BPL families, widows and war widows.</p>
          <p>7. To undertake its activities in agriculture and horticultural products development and cultivation.</p>
          <p>8. To work for animals and birds and make shed for pet animals of BPL category people and manage instruments for handicapped people.</p>
          <p>9. To set up and manage Khadi and village industries work centres for poor and needy people and manage instruments for handicapped people.</p>
          <p>10. To work for the upliftment of people belonging to scheduled caste, schedule tribees, other economically weaker sections of society and people residing in the far flung areas of state of J&K.</p>
          <p>11. To make all states green with plantation surrounding cities and both sides of all national highways in J&K and other states.</p>
          <p>12. To run vocational training centers of youth, women child labour, weaker sections ST, SC, Minorties and BPL people and pension to elderly men and women.</p>
          <p>13. Distribute relief such as dry ration and other items to needy peoples on natural disaster time and relief to border areas people during the violation of cease fire and during COVID-19.</p>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Mission;
