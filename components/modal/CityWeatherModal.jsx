import { useMoonriseTime, useSunriseTime } from "@/hooks/useTime";
import LoadingOverlay from "../loading/LoadingOverlay";

const CityWeatherModal = ({ isOpen, onClose, cityData, isLoading }) => {
  const { name, main, wind } = cityData || {};

  const sunriseTime = useSunriseTime(cityData);
  const moonriTime = useMoonriseTime(cityData);

  const trimmedCityName = name?.replace(" Province", "");

  return !isLoading ? (
    <div
      className={`${
        isOpen ? "opacity-100 z-20" : "opacity-0 -z-10"
      } flex justify-between flex-col duration-500 w-full max-w-[360px] sm:max-w-[450px] h-[400px] sm:h-[360px] bg-[#fafafa] rounded-lg p-5 fixed transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-3 text-gray-700 border-solid border-[1px] border-black `}
    >
      <div className="text-center font-semibold text-3xl border-b-2">
        <span>{trimmedCityName}</span>
      </div>
      <div className="space-y-5">
        <div className="space-x-2">
          <span className="font-semibold text-xl">Sıcaklık: </span>
          <span className="font-medium text-lg">{Math.ceil(main?.temp)}°C</span>
        </div>
        <div className="space-x-2">
          <span className="font-semibold text-xl">
            Hissedilen Hava Sıcaklığı:
          </span>
          <span className="font-medium text-lg">
            {Math.ceil(main?.feels_like)}°C
          </span>
        </div>
        <div className="space-x-2">
          <span className="font-semibold text-xl">Rüzgar Hızı: </span>
          <span className="font-medium text-lg">{wind?.speed} m/s</span>
        </div>
        <div className="space-x-2">
          <span className="font-semibold text-xl">Güneşin Doğuş Zamanı: </span>
          <span className="font-medium text-lg">{sunriseTime} </span>
        </div>
        <div className="space-x-2">
          <span className="font-semibold text-xl">Ayın Doğuş Zamanı: </span>
          <span className="font-medium text-lg">{moonriTime} </span>
        </div>
      </div>
      <div
        onClick={onClose}
        className="mx-auto border-solid border-2 w-fit px-4 py-1 cursor-pointer bg-black text-white rounded-lg"
      >
        <span>Kapat</span>
      </div>
    </div>
  ) : (
    <LoadingOverlay />
  );
};

export default CityWeatherModal;
