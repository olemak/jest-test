const Utils = require ('./utils')

test('adds 1 + 2 to equal 3', () => {
  expect(Utils.add(1, 2)).toBe(3);
});

describe('Calculate Distance', () => {
	const osloLat = 59.849142
	const osloLng = 11.105223
	const romeLat = 41.910241
	const romeLng = 12.395911
	const osloRomeDistance = Utils.calculateDistance(osloLat, osloLng, romeLat, romeLng)
	test('Oslo-Rome should be more than 1800 km', ()=> {
		expect(osloRomeDistance).toBeGreaterThan(1800)  		
	})
	test('Oslo-Rome should be less than 2200 km', () =>{
		expect(osloRomeDistance).toBeLessThan(2200);
	})
})