
import Slider from '../components/Slider';
import { Link, useLoaderData } from 'react-router-dom'; 

const Home = () => {

    const roommate = useLoaderData();

    const availableRoommates = roommate.filter(roommate => roommate.availability === "Available");

    const initialRoommate = availableRoommates.slice(0, 6);
 

    return (
        <div>
            <section>
                <Slider />
            </section>
            
            <section className="max-w-7xl mx-auto my-10 px-4">
                <h2 className="text-3xl font-bold mb-6 text-center text-primary">Featured Roommates</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {initialRoommate.map((roommate) => (
                        <div key={roommate._id} className="bg-base-100 rounded-xl shadow p-4 flex flex-col justify-between">
                            <img
                                src={roommate.image}
                                alt={roommate.name}
                                className="w-full h-52 object-cover rounded-xl mb-4"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-primary">{roommate.name}</h3>
                                <p><span className="font-medium">Location:</span> {roommate.location}</p>
                                <p><span className="font-medium">Budget:</span> ${roommate.rent}</p>
                                <p><span className="font-medium">Lifestyle:</span> {roommate.lifestyle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* নিচের See More Button */}
                <div className="text-center mt-8">
                    <Link to="/browse" className="btn btn-outline btn-primary">
                        See More Roommates
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
