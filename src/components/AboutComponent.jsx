import "../App.css";

export default function AboutComponent() {
  return (
    <>
      <div className="max-w-5xl mx-auto mt-20">
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l  text-center overflow-hidden"
            style={{
              backgroundImage: `url('https://avatars.githubusercontent.com/u/135966912?v=4')`,
            }}
            title="Woman holding a mug"
          >
            {" "}
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="text-gray-900 font-bold text-xl mb-2">About Me</div>
            <div className="mb-12 mt-12">
              <p className="text-gray-700 text-base">
                After graduating from Politeknik Negeri Indramayu with a degree
                in Informatics Engineering, I further honed my skills at Binar
                Bootcamp. As a beginner Full Stack Web Developer, I am prepared
                to face the challenges of the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
