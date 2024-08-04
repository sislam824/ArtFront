import { ProductCard } from "@/components/ProductCard/ProductCard";

const Product = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="heading bg-gray-200 p-2">
        <h3>PRODUCTS</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-2  m-auto">
        <div className="">
          <ProductCard
            img1={
              "https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            img2={
              "https://images.pexels.com/photos/21492/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            }
          />
        </div>

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
        <ProductCard
          img2={"https://thumbs.dreamstime.com/b/sunflower-11947962.jpg?w=768"}
          img1={"https://thumbs.dreamstime.com/b/sunflower-2914552.jpg?w=768"}
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
        <div className="">
          <ProductCard
            img1={
              "https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            img2={
              "https://images.pexels.com/photos/21492/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
