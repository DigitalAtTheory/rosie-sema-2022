import Head from "next/head";
import HeroImage from "../../components/HeroImage";
import TitleImage from "../../components/TitleImage";
import Lockup from "../../components/Lockup";
import Bottle from "../../components/Bottle";
import Form from "../../components/Form";
import Slash from "../../components/Slash";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Digital() {
  return (
    <div>
      <Head>
        <title>Rosie - SEMA 2022 - Virtual</title>
      </Head>
      <Slash />
      <div className="max-w-5xl px-8 mx-auto flex flex-col align-middle justify-center relative z-20">
        <div className="text-center py-12 md:py-24">
          <HeroImage />
        </div>
        <div className="mb-12">
          <div className="md:w-3/4 mx-auto flex justify-center mb-12">
            <TitleImage />
          </div>
          <div>
            <p className="text-center text-lg md:text-3xl font-light w-3/4 mx-auto">
              Since you {`couldn't`} be here with us at the SEMA Show, {`we're`}
              bringing the show to you. If you liked the content that brought
              you here, fill out the survey below to get on our list for more
              content like this before it drops anywhere else.
            </p>
          </div>
          <Link
            className="text-white text-lg py-4 px-16 bg-[#f51832] font-semibold rounded-lg block text-center md:w-3/4 lg:w-3/12 mx-auto mt-12 cursor-pointer"
            to="formContainer"
            spy={true}
            smooth={true}
            duration={500}
          >
            Count me in
          </Link>
        </div>
        <div className="md:w-3/4 mx-auto flex justify-center mb-12">
          <Lockup />
        </div>
        <div className="flex flex-col lg:flex-row gap-12 md:gap-24 w-3/4 mx-auto">
          <div>
            <Bottle />
            <p className="text-center text-sm text-gray-400 mt-4">
              *Mobil 1 bottle custom label not found elsewhere.
            </p>
          </div>
          <p className="lg:w-11/12 text-center md:text-left text-lg md:text-3xl font-light self-center">
            Did you know that{" "}
            <span className="whitespace-nowrap">Mobil 1 Supercar 0W-40</span> is
            the first and only dexos-approved motor oil developed specifically
            for Corvette? With the{" "}
            <span className="whitespace-nowrap">
              LT1 E-ROD Connect & Cruise
            </span>{" "}
            powertrain system, the heart of every Corvette can motivate your hot
            rod to get out of the garage and onto the street.*
          </p>
        </div>
        <div id="formContainer" className="my-24 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Sign up, stay tuned
          </h2>
          <Form formId="131" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto mb-4">
        <p className="text-xs text-gray-400">
          *Chevy Performance E-ROD engines have been granted CARB Executive
          Orders, which allows for their installation on specific emission
          controlled vehicles to be driven on public streets and highways. An
          exemption is granted if the product has been determined not to cause
          an increase in vehicle emissions from the production vehicles for
          which the part is intended, nor otherwise cause vehicles to be
          non-compliant with the vehicle emissions certification and
          anti-tampering laws. For additional information, including which
          vehicles these E-ROD engines can be installed in, please visit{" "}
          <a
            href="https://www.chevrolet.com/performance-parts"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-400"
          >
            ChevroletPerformance.com.
          </a>
        </p>
      </div>
    </div>
  );
}
