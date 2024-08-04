import { ProductCard } from "@/components/ProductCard/ProductCard";

const Home = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen sm:h-full md:h-96 "
        style={{
          backgroundImage:
            'url("https://thumbs.dreamstime.com/b/gothic-sexy-young-woman-halloween-beautiful-model-girl-fantasy-makeup-goth-costume-black-feathers-portrait-wide-screen-147399638.jpg?w=1400")',
        }}
      ></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto my-10 gap-4">
        <ProductCard
          img1={
            "https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          img2={
            "https://images.pexels.com/photos/21492/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          }
        />

        <ProductCard
          img2={
            "https://thumbs.dreamstime.com/b/fashion-art-photo-sexy-girl-dressed-red-night-club-perfect-female-body-neon-lettering-background-concept-144281801.jpg?w=768"
          }
          img1={
            "https://thumbs.dreamstime.com/z/sexy-asian-dj-mixing-music-club-party-female-disc-jockey-turntable-nightclub-enjoying-mixing-sound-music-sexy-asian-197016726.jpg?ct=jpeg"
          }
        />
        <ProductCard
          img2={
            "https://thumbs.dreamstime.com/z/sunflowers-field-many-yellow-52248430.jpg?ct=jpeg"
          }
          img1={
            "https://thumbs.dreamstime.com/z/sunflower-planet-earth-globe-map-center-honey-bees-beautiful-field-sunny-summer-day-blue-sky-provence-france-315805410.jpg?ct=jpeg"
          }
        />
      </div>
    </>
  );
};

export default Home;
