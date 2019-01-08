const Event = require('../../models/event');
const { transformEvent } = require('./merge');

module.exports = {
    events: async () => {
        try {
            const events = await Event.find()
            return events
                .map(event => {
                    return transformEvent(event);
                });
        } catch (err) {
            throw err;
        }
    },
    createEvent: async args => {
        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: +args.eventInput.price,
            date: new Date(args.eventInput.date),
            creator: '5c335a68145d0f95084aee44'
        });
        let createdEvent;
        try {
            const result = await event.save();
            createEvent = transformEvent(result);
            const creator = await User.findById('5c335a68145d0f95084aee44')
            
            if (!creator) {
                throw new Error('User not found.')
            }
            creator.createdEvents.push(event);
            await creator.save();
            return createdEvent;
        } catch (err) {
            throw err;
        }
    }
}