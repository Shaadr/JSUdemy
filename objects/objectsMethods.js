let restaurant = {
    name:'BWW',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        // console.log(this) -> 'this' referes the the object this fucntion is on, meaning the "restauraunt" object
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount += partySize
    },
    removeParty: function(partySize) {
        this.guestCount -= partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))


