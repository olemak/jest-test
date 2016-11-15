const utils = {
	add: function (a, b){
		return a + b
	},

	toRad: function(x) {
    	return x * Math.PI / 180;
  	},

	calculateDistance: function (fromLat, fromLng, toLat, toLng){
		const R = 6371;

		  const x1 = toLat - fromLat;
		  const dLat = this.toRad(x1);
		  const x2 = toLng - fromLng;
		  const dLon = this.toRad(x2)
		  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.toRad(fromLat)) * Math.cos(this.toRad(toLat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
		  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		  const d = R * c;

		  return d
	}
} 

module.exports = utils