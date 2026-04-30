import { Globe3D } from "@/components/ui/3d-globe";
import type { GlobeMarker } from "@/components/ui/3d-globe";

const flag = (code: string) => `https://flagcdn.com/w20/${code}.png`;

const visitedPlaces: GlobeMarker[] = [
  // Spain
  { lat: 40.4168, lng: -3.7038, src: flag("es"), label: "Madrid" },
  { lat: 41.3851, lng: 2.1734, src: flag("es"), label: "Barcelona" },
  // Italy
  { lat: 41.9028, lng: 12.4964, src: flag("it"), label: "Rome" },
  // Mexico
  { lat: 21.1619, lng: -86.8515, src: flag("mx"), label: "Cancún" },
  { lat: 20.6296, lng: -87.0739, src: flag("mx"), label: "Playa del Carmen" },
  { lat: 22.8905, lng: -109.9167, src: flag("mx"), label: "Cabo" },
  // Dominican Republic
  { lat: 18.582, lng: -68.4033, src: flag("do"), label: "Punta Cana" },
  // Jamaica
  { lat: 18.1096, lng: -77.2975, src: flag("jm"), label: "Jamaica" },
  // Canada
  { lat: 49.2827, lng: -123.1207, src: flag("ca"), label: "Vancouver" },
  // Japan (first trip)
  { lat: 35.6762, lng: 139.6503, src: flag("jp"), label: "Tokyo" },
  { lat: 34.6937, lng: 135.5023, src: flag("jp"), label: "Osaka" },
  { lat: 35.0116, lng: 135.7681, src: flag("jp"), label: "Kyoto" },
  // New Zealand
  { lat: -36.8509, lng: 174.7645, src: flag("nz"), label: "Auckland" },
  // Australia
  { lat: -33.8688, lng: 151.2093, src: flag("au"), label: "Sydney" },
  // Thailand
  { lat: 13.7563, lng: 100.5018, src: flag("th"), label: "Bangkok" },
  { lat: 8.0863, lng: 98.9063, src: flag("th"), label: "Krabi" },
  // Singapore
  { lat: 1.3521, lng: 103.8198, src: flag("sg"), label: "Singapore" },
  // United Kingdom
  { lat: 51.5074, lng: -0.1278, src: flag("gb"), label: "London" },
  // Ireland
  { lat: 53.3498, lng: -6.2603, src: flag("ie"), label: "Dublin" },
  // Scotland
  { lat: 55.9533, lng: -3.1883, src: flag("gb-sct"), label: "Edinburgh" },
  { lat: 55.8642, lng: -4.2518, src: flag("gb-sct"), label: "Glasgow" },
  // Croatia
  { lat: 45.815, lng: 15.9785, src: flag("hr"), label: "Zagreb" },
  // Hungary
  { lat: 47.4979, lng: 19.0402, src: flag("hu"), label: "Budapest" },
  // Greece
  { lat: 40.6401, lng: 22.9444, src: flag("gr"), label: "Thessaloniki" },
  { lat: 37.9838, lng: 23.7275, src: flag("gr"), label: "Athens" },
  // Egypt
  { lat: 30.0444, lng: 31.2357, src: flag("eg"), label: "Cairo" },
  { lat: 29.9773, lng: 31.1325, src: flag("eg"), label: "Giza" },
  // Jordan
  { lat: 31.9454, lng: 35.9284, src: flag("jo"), label: "Amman" },
  { lat: 29.5267, lng: 35.006, src: flag("jo"), label: "Aqaba" },
  // Turkey
  { lat: 41.0082, lng: 28.9784, src: flag("tr"), label: "Istanbul" },
  // Taiwan
  { lat: 25.033, lng: 121.5654, src: flag("tw"), label: "Taipei" },
  // Colombia
  { lat: 10.391, lng: -75.4794, src: flag("co"), label: "Cartagena" },
  { lat: 6.2442, lng: -75.5812, src: flag("co"), label: "Medellín" },
  // France
  { lat: 48.8566, lng: 2.3522, src: flag("fr"), label: "Paris" },
  // Norway
  { lat: 69.6492, lng: 18.9553, src: flag("no"), label: "Tromsø" },
  // Sweden
  { lat: 59.3293, lng: 18.0686, src: flag("se"), label: "Stockholm" },
  // Hong Kong
  { lat: 22.3193, lng: 114.1694, src: flag("hk"), label: "Hong Kong" },
  // China
  { lat: 29.1179, lng: 110.4791, src: flag("cn"), label: "Zhangjiajie" },
  { lat: 29.3291, lng: 110.5333, src: flag("cn"), label: "Wulingyuan" },
  { lat: 31.2304, lng: 121.4737, src: flag("cn"), label: "Shanghai" },
  { lat: 29.563, lng: 106.5516, src: flag("cn"), label: "Chongqing" },
  { lat: 30.5728, lng: 104.0668, src: flag("cn"), label: "Chengdu" },
  { lat: 34.3416, lng: 108.9398, src: flag("cn"), label: "Xi'an" },
  { lat: 39.9042, lng: 116.4074, src: flag("cn"), label: "Beijing" },
  // Japan (second trip)
  { lat: 43.0618, lng: 141.3545, src: flag("jp"), label: "Sapporo" },
  { lat: 43.3523, lng: 142.3825, src: flag("jp"), label: "Furano" },
  { lat: 41.7688, lng: 140.729, src: flag("jp"), label: "Hakodate" },
];

export const Travel = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-32 pb-8">
        <p className="text-xs uppercase tracking-widest text-accent font-medium mb-4">
          Around the world
        </p>
        <h1 className="text-3xl font-semibold text-primary mb-3">Travel</h1>
      </div>

      <Globe3D
        markers={visitedPlaces}
        config={{
          autoRotateSpeed: 0.3,
          showAtmosphere: true,
          atmosphereColor: "#daddd8",
          atmosphereIntensity: 0.15,
          bumpScale: 5,
          enableZoom: true,
          minDistance: 4,
          maxDistance: 12,
        }}
        className="h-[75vh] w-full"
      />
    </>
  );
};
