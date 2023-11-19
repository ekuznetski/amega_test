import "leaflet/dist/leaflet.css";
import { useCallback, useEffect, useState } from "react";
import { Map } from "./components/core/map.tsx";
import "./App.css";
import { useIPDetails } from "./hooks/useIPDetails.ts";
import { debounce } from "./utils/debounce.ts";

function App() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const updateDebouncedValue = useCallback(
    debounce(setDebouncedValue, 200),
    [],
  );
  const ipDetails = useIPDetails(debouncedValue);
  useEffect(() => {
    if (value === "") {
      setValue(ipDetails?.ip ?? "");
    }
  }, [ipDetails, value]);
  return (
    <>
      <input
        onChange={(e) => {
          updateDebouncedValue(e.target.value);
          setValue(e.target.value);
        }}
        value={value}
      />
      {ipDetails && ipDetails.success ? (
        <>
          <div>{ipDetails.city}</div>
          <Map lat={ipDetails.latitude} lng={ipDetails.longitude} />
        </>
      ) : (
        <div>Invalid IP address</div>
      )}
    </>
  );
}

export default App;
