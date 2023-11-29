/* eslint-disable react/prop-types */

const Country = ({ country }) => {

    console.log(country)
    return (
        <div className="bg-gray-400 py-1 px-4 rounded ">
            <img  className="mt-5" src={country?.flags.png} alt="Bandera" />
            <div className="text-center mt-5">
            <h3 className="text-center font-bold text-3xl">{country?.name.common}</h3>
            <h3><b>Population:</b> {country?.population}</h3>
            <h3><b>Capital:</b> {country?.capital}</h3>
            <h3><b>Area:</b> {country?.area}</h3>
            </div>
        </div>
    );
};

export default Country;