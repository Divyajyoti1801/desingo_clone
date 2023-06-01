import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  label: country.name.common,
  latlng: country.latlng,
}));

const useCountries = () => {
  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.label === value);
  };
  return { getByValue };
};

export default useCountries;
