import axios from "axios";
import { ManufacturerLogos } from "src/types/Logos";

const LogosApi = {
  all() {
    return axios
      .get<ManufacturerLogos>(
        "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json"
      )
      .then((r) => r.data);
  },
  readme() {
    return axios
      .get(
        "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/v2/README.md"
      )
      .then((r) => r.data);
  },
};

export default LogosApi;
