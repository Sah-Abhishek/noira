import devineHand from '../assets/devineHand.png';
import dumbell from '../assets/dumbell.png';
import leave from '../assets/leaf.png';
import heart from '../assets/heart.png';
import twoLeaves from '../assets/twoLeaves.png';
import cartWheel from '../assets/cartWheel.png';

const services = [
  {
    title: 'Relaxing Massage',
    description: 'Relaxing full-body massage treatments',
    price: 'From £80',
    icon: devineHand,
  },
  {
    title: 'Deep tissue massage',
    description: 'Professional rehabilitation services',
    price: 'From £80',
    icon: dumbell,
  },
  {
    title: 'Swedish Massage',
    description: 'Luxury facial and skincare treatments',
    price: 'From £78',
    icon: leave,
  },
  {
    title: 'Lymphatic Drainage',
    description: 'Holistic health and lifestyle guidance',
    price: 'From £81',
    icon: heart,
  },
  {
    title: 'Brazillian Lymphatic Drainage',
    description: 'Traditional healing therapy',
    price: 'From £91',
    icon: twoLeaves,
  },
  {
    title: 'Pregnancy Massage',
    description: 'Personalized yoga sessions',
    price: 'From £79',
    icon: cartWheel,
  },
   {
    title: 'Sports Massage',
    description: 'Targeted relief for athletes',
    price: 'From £81',
    icon: dumbell,
  },

   {
    title: 'De-Stress Massage',
    description: 'Personalized relaxation techniques',
    price: 'From £78',
    icon: cartWheel,
  },

   {
    title: 'Reflexology',
    description: 'Personalized reflexology sessions',
    price: 'From £83',
    icon: heart,
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20" id="services">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Our <span className="text-[#C49E5B]">Services</span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Premium wellness treatments tailored to your needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-white/20 rounded-xl p-6 text-center hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-[#f5e18c] via-[#e0a528] to-[#a66c00] w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4">{service.description}</p>
            <p className="text-yellow-400 font-bold text-sm sm:text-base">
              From {service.price}/session
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
