export function calculateTripFuel({ distanceKm, consumptionPer100km, pricePerLiter }) {
  const fuelLiters = (distanceKm * consumptionPer100km) / 100;
  const totalCost = fuelLiters * pricePerLiter;

  return {
    fuelLiters,
    totalCost,
  };
}
