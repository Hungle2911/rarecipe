interface HeroProps {
  image: string;
  name: string;
}
const Hero = ({ image, name }: HeroProps) => (
  <div className="relative flex items-center justify-center h-96">
    <img
      src={image}
      alt={`${name} image`}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <h1 className="relative text-4xl font-bold text-white">{name}</h1>
  </div>
);

export default Hero;
