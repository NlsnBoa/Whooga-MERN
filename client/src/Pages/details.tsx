("use client");

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

// define the state being passed through the Link
interface DetailsPageState {
  tagTitle: string;
  tagNum: string;
  tagDate: string;
  tagImage: string;
  tagDesigner: string;
}

export default function details() {
  const location = useLocation();
  // Type the state object correctly
  const state = location.state as DetailsPageState;

  // null
  if (!state) {
    return <div>Error: No data available</div>;
  }

  const { tagTitle, tagNum, tagDate, tagImage, tagDesigner } = state;
  return (
    <>
      <Header />

      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="mt-4 ml-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
                {tagTitle}
              </h1>
              <p className="pt-2 text-2xl font-bold">Tag Number: {tagNum}</p>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <div className="mt-8 space-y-2 text-xl font-bold text-gray-500 dark:text-gray-400 ml-8">
                <p>Created At: {tagDate}</p>
                <p>Owner: {tagDesigner}</p>
              </div>
            </section>
          </div>

          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center sm:pt-10">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img alt={tagTitle} src={tagImage} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
