import RelationshipTimer from "./timer";
import { useState } from "react";

export default function MonthsaryLetter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50">
      {/* Cover Card */}
      {!open && (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl text-center w-full max-w-md sm:max-w-lg transform transition duration-500 hover:scale-105">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-600 mb-4">
            Happy Monthsary ❤️
          </h1>

          {/* Timer */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
            <RelationshipTimer />
          </div>

          <button
            onClick={() => setOpen(true)}
            className="mt-4 bg-pink-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-pink-700 transition duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Open Letter 💌
          </button>
        </div>
      )}

      {/* Letter Card */}
      {open && (
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl max-w-md sm:max-w-2xl w-full transform transition duration-500 hover:scale-105">
          <button
            onClick={() => setOpen(false)}
            className="text-pink-600 font-semibold mb-4 hover:underline"
          >
            &larr; Close
          </button>

          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6 text-center sm:text-left">
            Mahal kong Jonalyn (Chichi),
          </h2>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
            I can’t explain kung gaano ako kasaya simula nung nakilala kita. Kahit ordinary lang ang araw, kapag kasama ka, nagiging special bawat moment—sa simpleng titig mo, sa bawat tawa mo, sa maliliit na asaran natin, at syempre, sa mga pasimpleng yakap at halik habang tinitingnan natin kung may nakatingin. Salamat sa pagiging ikaw—sa kabutihan mo, sa pagiging maalaga, at sa pagpapasaya ng araw-araw ko. Sana ramdam mo kung gaano kita kamahal kahit may mga pagkukulang ako bilang partner mo.
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
            Alam ko na nagsisimula pa lang tayo at hindi pa natin fully nakikilala ang isa’t isa, pero sana huwag tayo susuko sa pagmamahalan natin. Nandito lang ako para makinig sa mga rants mo, at alam ko na ganoon ka rin sa akin. Sorry kung minsan hindi ako masyado expressive—siguro baguhan pa ako sa relasyon—pero sana ramdam mo na sinisikap kong ipakita ang pagmamahal ko at maging mas mabuting partner para sayo..
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6 text-center">
            Happy Monthsary! 💌
            <br />
            Yours always,
            <br />
            Aki 💖
          </p>
        </div>
      )}
    </div>
  );
}
